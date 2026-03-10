import {Paso} from '../clases/pasos';

/**
 * Interfaz que define la estructura de los elementos de una receta, incluyendo el nombre de la receta, el año de estreno y un array de pasos.
 */
export interface elementosRecetario {
    nombre: string;
    fechaEstreno: number, 
    pasos: Paso[];
}