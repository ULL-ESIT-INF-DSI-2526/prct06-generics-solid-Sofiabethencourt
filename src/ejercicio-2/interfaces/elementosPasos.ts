/**
 * Interfaz que define la estructura de los elementos de un paso, incluyendo el nombre del paso, la duración, las etiquetas asociadas, 
 * el número de veces que se ha completado el paso y si el paso es opcional.
 */
export interface elementosPaso {
    nombre: string;
    duracion: number;
    tags: string[];
    veces_completado: number;
    paso_opcional?: boolean;
}