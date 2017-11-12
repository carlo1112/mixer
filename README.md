# mixer
Consola de mezclas realizada para tesis de Lic. en Música y Tecnología. (UNQ)

La consola de mezcla posee las siguientes características:
- 8 canales de entrada: channel_mIn_1_mAux_4_sOut_5~. 
- 4 canales de envío auxiliar: channel_mIn_1_mOut_1~. 
- 4 canales de bus de grupo: channel_sIn_1_sOut_1~.
- 1 canal de bus master: channel_sIn_1_sOut_1~.
- Patchbay de entradas y salidas para conectar Pd con las entradas y salidas de la interfaz de audio. 
- Sistema de grabación y reproducción de 8 canales que permite grabar el audio proveniente de las entradas de la interfaz de audio en los canales de entrada y reproducir grabaciones dentro de los mismos (soundcheck virtual).
- Sistema de presets que permite guardar el estado de los controles de la consola (escenas). 
- Para controlar la consola se pueden utilizar tanto la interfaz de control desarrollada en Pd como la desarrollada en Open Stage Control. 

Para utilizar la consola en Pd Vanilla (se utilizó Pd 0.48.0), hay que incorporar externals. Los externals se incorporan desde Ayuda -> Buscar Externos.
Los externals necesarios son: cyclone, ekext, ext13, ggee, hcs, iemguts, iemlib, jmmmp, motex, mrpeach, pdcontainer, purepd, sfruit, tof, windowing, zexy.
Es necesario que el external zexy inicie junto a Pd. Para esto se debe incorporar en la lista de inicio de Pd en Archivo -> Preferencias -> Inicio.

Para ejecutar la interfaz de control desarrollada en Open Stage Control, se debe  descargar la versión v0.17.5 del software desde http://osc.ammd.net (funcionando correctamente en Chrome Versión 60.0.3112.113 de 64 bits con Windows 7). 
Dentro de la carpeta del programa donde se encuentra el archivo open-stage-control.exe se deben copiar los archivos control.js y control.bat. 
Para utilizar la interfaz de control se debe ejecutar control.bat, que genera una dirección ip, ej. http://192.168.1.167:8080 y  http://127.0.0.1:8080, con la cual se accede al control por medio de un navegador web que se encuentre en la misma computadora donde se está ejecutando, o en un dispositivo que se encuentre conectado a la red en la que esté conectada la computadora. 

