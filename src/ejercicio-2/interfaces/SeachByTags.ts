/**
 * Interfaz para buscar (pasos) por sus tags
 */
export interface SearchByTags<T> {
    findByTags(tags: string[]): T[];
}