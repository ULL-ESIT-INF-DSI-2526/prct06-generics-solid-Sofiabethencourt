/**
 * Intefaz para buscar (recetas) por su año de estreno
 */
export interface searchByYear<T> {
    findByYearRange(year: number): T[];
}