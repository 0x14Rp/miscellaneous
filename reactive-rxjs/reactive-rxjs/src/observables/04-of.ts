import { of } from 'rxjs';


const obs$ = of<number>(...[1,2,3,4,5,6],2,3,4,5);

console.log('Inicio del Obs$');
obs$.subscribe( 
    next => console.log('next', next ),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del Obs$');





