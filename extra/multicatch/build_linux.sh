#!/bin/bash
gcc -c multicatch.c -o multicatch.o -fPIC
ld -shared -o multicatch.pd_linux multicatch.o -lc -lm

