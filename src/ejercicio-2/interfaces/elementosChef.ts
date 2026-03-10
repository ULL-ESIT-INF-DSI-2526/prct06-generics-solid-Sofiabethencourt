import {Receta} from '../clases/receta';

/**
 * Interfaz que define la estructura de los elementos de un chef, incluyendo el nombre del chef, el número de seguidores y un array de recetas.
 */
export interface elementosChef {
    nombre: string;
    seguidores: number;
    recetario: Receta[];
}
