/**
 * Interfaz Presenter que define el contrato para la presentación de datos en formato de tabla. 
 * Esta interfaz es genérica, lo que permite que cualquier tipo de datos pueda ser presentado utilizando 
 * el método mostrarTabla. 
 */
export interface Presenter<T> {
    mostrarTabla(data: T[]): void;
}