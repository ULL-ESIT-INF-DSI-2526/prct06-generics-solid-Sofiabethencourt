/**
 * Interfaz genérica para buscar por opcionalidad en los pasos
 */
export interface SearchByOpcionality<T> {
    findByOpcionality(opcional: boolean): T[];
}