#include "m_pd.h"
#include <string.h>
#include <vector>

#define DEFSENDVS 64 				// Bloque de 64 muestras de Pd.
#define DEBUG 1

#define MAX_MTC_INDEX 40 		    // Cantidad máxima de instancias (mismo nombre) de multicatch que se puede crear.

// mtc, multi catch throw
char mct_names[MAX_MTC_INDEX][20]; 	// Arreglo que guarda los nombres de las conexiones. 40 nombres de 20 caracteres max.
int  global_mct_idx = 0;					// Contador de cantidad de nombres de conexiones
void *mct_class[MAX_MTC_INDEX];		// Arreglo de punteros que guarda el objeto abstracto de pd de cada conexión

/* ----------------------------- mcatch~ ----------------------------- */
static t_class *mcatch_tilde_class;

typedef struct _mcatch_tilde
{
    t_object x_obj;     
    t_symbol *x_sym;    // nombre del par
    int x_n;
    t_sample *x_vec;    // memory buffer
    int x_first;
    int* x_executed;
    int* x_total_instances;
    int mct_idx;
    int instance;

} t_mcatch_tilde;

t_mcatch_tilde *mct_zero[MAX_MTC_INDEX];     // Arreglo de punteros que guarda el objeto abstracto de pd de cada conexión


//busca el nombre s_name en el arreglo mtc_names
//si lo encuentra devuelve su indice,
//en caso contrario devuelve -1.

int find_class_ix(t_symbol *s)
{

    int i,j=-1;
    for( i=0;i<global_mct_idx;i++)
    {
        if( strcmp(  mct_names[i], s->s_name )==0 )
        {
            j = i;
            break;
        }
    }

    return j;
}



void *mcatch_tilde_new(t_symbol *s)
{
    if(strcmp(s->s_name,"")!=0) // chequea que s no tenga un nombre vacío
    {
        int newname, j;

        j = find_class_ix(s);  // Se fija si el nombre ya estaba en uso

        if(j!=-1) // si el nombre no era nuevo
            newname = 0;
        else
            newname = 1;    //si no existia, se le asigna el primero.
            
        /* /////////////////////////////////////////////////////////////////////  
           Crea uno nuevo, guarda el nuevo nombre en mct_names, incrementa el 
           tamaño de global_mct_idx. Crea nueva instancia 0 del mcatch.
        /* ////////////////////////////////////////////////////////////////////// */ 

         // Crea la instancia y la guarda en la estructura t_
        t_mcatch_tilde *x = (t_mcatch_tilde *)pd_new(mcatch_tilde_class);

        // Nombre de la instancia
        x->x_sym = s;       //(*x).x_sym = s;  se asigna el string de nombre a x_sym
        x->x_n = DEFSENDVS; //asigna el tamaño de muestras del vector de buffer de audio

        if(newname == 1)	 
        {

            t_mcatch_tilde* x_zero; //defino x_zero que es un puntero de tipo t_mcatch_tilde
            x_zero = (t_mcatch_tilde *)getbytes(sizeof(t_mcatch_tilde));    //castea el resultado de getbyte a un puntero de t_mcatch_tilde y se lo asigna a x_zero


            // Asigna el nuevo nombre al arreglo de nombres de conexiones
        	strcpy( mct_names[global_mct_idx] , s->s_name ); //copia el contenido de memoria pero no le asinga el puntero
            printf("Creation MCT %d, %s\n",global_mct_idx,mct_names[global_mct_idx]);

        	// Indica que indice tienen la lista de nombres
            x_zero->mct_idx = global_mct_idx;            

            // Aloja vec para usarlo con el audio e inicializa en 0
            x_zero->x_vec = (t_sample *)getbytes(DEFSENDVS * sizeof(t_sample));
            memset((char *)(x_zero->x_vec), 0, DEFSENDVS * sizeof(t_sample));
            x_zero->x_n = DEFSENDVS;

            // Memory allocation for shared variables between instances
            x_zero->x_total_instances  = (int*) getbytes(sizeof(int));

            x_zero->x_executed = (int*) getbytes(sizeof(int));
    		
    		// Inicializa variables de la nueva conexión
    		*(x_zero->x_total_instances) = 1;
    		*(x_zero->x_executed) = 0;
            x_zero->instance = 0;

            // Indica que es la primera instancia de la nueva conexión
            x_zero->x_first = 1;

            mct_zero[global_mct_idx] = x_zero;

    		post("mcatch zero: Connection (%d, %s). New MCT. Total instances n=%d",x_zero->mct_idx,s->s_name,*(x_zero->x_total_instances));
            if (DEBUG) printf("mcatch zero: Connection (%d, %s). New MCT. Total instances n=%d\n",x_zero->mct_idx,s->s_name,*(x_zero->x_total_instances));
                   
            // Copia valores de x_zero a x

            x->mct_idx = global_mct_idx;

            x->x_first = 1;

            x->x_vec = x_zero->x_vec;

            x->x_total_instances = x_zero->x_total_instances;

            x->instance = *(x->x_total_instances);

            x->x_executed = x_zero->x_executed;

            mct_class[global_mct_idx] = &x->x_obj.ob_pd;

            // Incrementa el contador de conexiones
            global_mct_idx++;

            post("mcatch: Connection (%d, %s). New MCT. Total instances n=%d",x->mct_idx,s->s_name,*(x->x_total_instances));
            if (DEBUG) printf("mcatch: Connection (%d, %s). New MCT. Total instances n=%d\n",x->mct_idx,s->s_name,*(x->x_total_instances));
         

         }
        /* 
        	Como el nombre existe, entonces crea una nueva instancia del mcatch con el nombre existente.
        */
        else 
        {   
        	
            t_mcatch_tilde *catcher = (t_mcatch_tilde *) mct_zero[x->mct_idx];

            x->mct_idx = j;

            x->x_first = 0;

            x->x_vec = catcher->x_vec;

            if(DEBUG) printf("mcatch: Connection (%d, %s). Existing MCT. Que onda n=%d\n",x->mct_idx,s->s_name,*(catcher->x_total_instances));

            x->x_total_instances = catcher->x_total_instances;

            *(x->x_total_instances) = *(x->x_total_instances) + 1;

            x->instance = *(x->x_total_instances);

            x->x_executed = catcher->x_executed;

    		post("mcatch: Connection (%d, %s). Existing MCT. Total instances n=%d",x->mct_idx,s->s_name,*(x->x_total_instances));
    		if(DEBUG) printf("mcatch: Connection (%d, %s). Existing MCT. Total instances n=%d\n",x->mct_idx,s->s_name,*(x->x_total_instances));
        }

        outlet_new(&x->x_obj, &s_signal);

        return (x);

    }

}

t_int *mcatch_tilde_perform(t_int *w)
{
	//que hacen estos 4 w??? w[1] es la estructura
	//w[2] buffer de entrada
	//w[3] buffer de salida
	//w[4] tamano de buffer

    //t_mcatch_tilde *catcher = (t_mcatch_tilde *) mct_zero[x->mct_idx];

    t_mcatch_tilde *x = (t_mcatch_tilde *)(w[1]);
    
    t_sample *in = (t_sample *)(w[2]);
    t_sample *out = (t_sample *)(w[3]);
    
    int n = (int)(w[4]);	// tamaño de buffer

    // printf("%d\n",*(x->x_executed));

    *(x->x_executed) = *(x->x_executed) + 1;

    while (n--) //mientras n > 0 o -1, ejecuta este proceso.
    {
        *out++ = *in;
        if( *(x->x_executed)==*(x->x_total_instances) ) //si soy el ultimo de las instancias poner en cero el buffer del mcatch
            *in++ = 0; 
        else
            *in++;
    }    

    if(*(x->x_executed)==*(x->x_total_instances))
        *(x->x_executed)=0;

    return (w+5);
}

/* tb: vectorized catch function */
t_int *mcatch_tilde_perf8(t_int *w)
{
    
    t_mcatch_tilde *x = (t_mcatch_tilde *)(w[1]);

    t_sample *in = (t_sample *)(w[2]);
    t_sample *out = (t_sample *)(w[3]);
    
    int n = (int)(w[4]);

    // printf("%d\n",*(x->x_executed));

    *(x->x_executed) = *(x->x_executed) + 1;

    for (; n; n -= 8, in += 8, out += 8)		//matriz de 8*8, bloque de audio copia el mthrow en mcatch?
    {
       out[0] = in[0]; out[1] = in[1]; out[2] = in[2]; out[3] = in[3]; 
       out[4] = in[4]; out[5] = in[5]; out[6] = in[6]; out[7] = in[7]; 
    
        if( *(x->x_executed)==*(x->x_total_instances) ) //limpia el mcatch
        {
           in[0] = 0; in[1] = 0; in[2] = 0; in[3] = 0; 
           in[4] = 0; in[5] = 0; in[6] = 0; in[7] = 0;                 
        }
       
    }
	
    if(*(x->x_executed)==*(x->x_total_instances))
        *(x->x_executed)=0;

    return (w+5);
}

void mcatch_tilde_dsp(t_mcatch_tilde *x, t_signal **sp)
{

    if (x->x_n == sp[0]->s_n)
    {
        if(sp[0]->s_n&7)
            dsp_add(mcatch_tilde_perform, 4, x,  x->x_vec, sp[0]->s_vec, sp[0]->s_n);
        else
            dsp_add(mcatch_tilde_perf8, 4, x, x->x_vec, sp[0]->s_vec, sp[0]->s_n);
    }
    else error("mcatch_tilde %s: unexpected vector size", x->x_sym->s_name);
}

void mcatch_tilde_free(t_mcatch_tilde *x)		//borra la instancia de mcatch 
{
    *(x->x_total_instances) = *(x->x_total_instances) - 1;		//disminuye la cantidad de instancias
    
    // if(*(x->x_total_instances)==0) //one left alone
   
    if(x->x_first==1)
    {

    }

    if(*(x->x_total_instances)==0)//all gone
    {
        
        strcpy( mct_names[x->mct_idx] , "" );		//borra el nombre de mct_names
        mct_class[x->mct_idx] = NULL;				//borra el objeto de mct_class

        freebytes(x->x_vec, x->x_n * sizeof(t_sample));	
        freebytes(x->x_total_instances, sizeof(int) );
        freebytes(x->x_executed, sizeof(int) );

        post("mcatch: Connection (%d, %s). %d was deleted. There are no more instances. ",x->mct_idx,x->x_sym->s_name,x->instance );
        if(DEBUG) printf("mcatch: Connection (%d, %s). %d was deleted. There are no more instances \n",x->mct_idx,x->x_sym->s_name,x->instance );
		
    }
    else
    {
        post("mcatch: Connection (%d, %s). %d was deleted. Number of instances n=%d",x->mct_idx,x->x_sym->s_name,x->instance ,*(x->x_total_instances) ) ;
        if(DEBUG) printf("mcatch: Connection (%d, %s). %d was deleted. Number of instances n=%d\n",x->mct_idx,x->x_sym->s_name,x->instance ,*(x->x_total_instances));
        if(DEBUG) printf("%g\n", x->x_vec[0]);
    }
    
}

/*
    Segundo proceso que se ejecuta.
    Crea dentro de PD la nueva clase mcatch~, le asigna
    tamaño y atributos.
    Asocia la clase con dsp (audio) y por ultimo asigna
    el help.
*/

extern "C"
{
    void mcatch_tilde_setup(void)
    {
        mcatch_tilde_class = class_new(gensym("mcatch~"), (t_newmethod)mcatch_tilde_new,
            (t_method)mcatch_tilde_free, sizeof(t_mcatch_tilde), CLASS_NOINLET, A_DEFSYM, 0);

        class_addmethod(mcatch_tilde_class, (t_method)mcatch_tilde_dsp, gensym("dsp"),A_CANT, 0);
        class_sethelpsymbol(mcatch_tilde_class, gensym("mcatch~"));
    }
}


/* ----------------------------- mthrow~ ----------------------------- */
static t_class *mthrow_tilde_class;

typedef struct _mthrow_tilde
{
    t_object x_obj;
    t_symbol *x_sym;
    t_sample *x_whereto;
    int x_n;
    t_float x_f;
    int mct_idx;

} t_mthrow_tilde;

void *mthrow_tilde_new(t_symbol *s)
{

    int j;
    j = find_class_ix(s);

    //if(DEBUG) printf("mthrow~ Find %d\n" ,j);

    if(j!=-1)
    {
  	    t_mthrow_tilde *x = (t_mthrow_tilde *)pd_new(mthrow_tilde_class);

        x->mct_idx=j;
        x->x_sym = s;
        x->x_whereto = 0;
        x->x_n = DEFSENDVS;
        x->x_f = 0;

        if(DEBUG) printf("mthrow~ %s created\n",s->s_name);

         return (x);
    }
    else
    {
        post("%s: no matching catch",s->s_name);
        if(DEBUG) printf("%s: no matching catch\n",s->s_name);

 		return NULL;
    }

}

t_int *mthrow_tilde_perform(t_int *w)
{
    t_mthrow_tilde *x = (t_mthrow_tilde *)(w[1]);
    t_sample *in = (t_sample *)(w[2]);
    int n = (int)(w[3]);
    t_sample *out = x->x_whereto;
    if (out)
    {
        while (n--)
        {
            *out += (PD_BIGORSMALL(*in) ? 0 : *in);
            out++;
            in++;
        }
    }
    return (w+4);
}

void mthrow_tilde_set(t_mthrow_tilde *x, t_symbol *s)
{

    //Hacer que esto ande, que busque automaticamente la clase que pertenece. Hacer que mct_class sea un mapa
    int j;
    j = find_class_ix(x->x_sym);

    t_mcatch_tilde *catcher = NULL;

    if(DEBUG) printf("mthrow~ MCT index %d\n",x->mct_idx );

    if(x->mct_idx != -1)
        catcher = (t_mcatch_tilde *) mct_zero[x->mct_idx];    


    if (catcher != NULL)
    {
        if (catcher->x_n == x->x_n)
        {
            x->x_whereto = catcher->x_vec;
        }
        else
        {
            post("%d\t%d",catcher->x_n, x->x_n);
            pd_error(x, "mthrow~ %s: vector size mismatch with mcatch~", x->x_sym->s_name);
            x->x_whereto = 0;
        }
    }
    else
    {
        pd_error(x, "mthrow~ %s: no matching mcatch", x->x_sym->s_name);
        x->x_whereto = 0;
    }
}

void mthrow_tilde_dsp(t_mthrow_tilde *x, t_signal **sp)
{
    if (sp[0]->s_n != x->x_n)
    {
        pd_error(x, "mthrow~ %s: vector size mismatch", x->x_sym->s_name);
    }
    else
    {
        mthrow_tilde_set(x, x->x_sym);
        dsp_add(mthrow_tilde_perform, 3,
            x, sp[0]->s_vec, sp[0]->s_n);
    }
}


/*
    Tercer proceso que se ejecuta.
    Crea dentro de PD la nueva clase mtrhow~, le asigna
    tamaño y atributos.
    Asocia la clase con dsp (audio) y ??? help???
*/

extern "C"
{

    void mthrow_tilde_setup(void)
    {
        mthrow_tilde_class = class_new(gensym("mthrow~"), (t_newmethod)mthrow_tilde_new, 0,
            sizeof(t_mthrow_tilde), 0, A_DEFSYM, 0);
        class_addmethod(mthrow_tilde_class, (t_method)mthrow_tilde_set, gensym("set"), A_SYMBOL, 0);
        CLASS_MAINSIGNALIN(mthrow_tilde_class, t_mthrow_tilde, x_f);
        class_addmethod(mthrow_tilde_class, (t_method)mthrow_tilde_dsp, gensym("dsp"),A_CANT, 0);
    }

}

/*
    Cuando se importa multicatch en PD, se corre por 
    primera vez este proceso, que ejecuta los comandos
    internos, para poder crear los objetos mcatch~ y 
    mthrow~ dentro del entorno de PD.
*/

extern "C"
{
    void multicatch_setup(void)
    {
        mcatch_tilde_setup();
        mthrow_tilde_setup();
    }
}