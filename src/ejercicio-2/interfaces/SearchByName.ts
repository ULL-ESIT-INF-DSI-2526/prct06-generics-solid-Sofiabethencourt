/**
 * Interfaz genérica para buscar por nombre
 */
export interface SearchByName<T> {
    findByName(name: string): T[];
}