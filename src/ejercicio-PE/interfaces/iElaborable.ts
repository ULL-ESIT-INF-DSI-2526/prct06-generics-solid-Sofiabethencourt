/**
 * Interfaz de contrato para todas las recetas
 */
export interface Elaborable<T> {
    desc(): T;
    time(): number;
}