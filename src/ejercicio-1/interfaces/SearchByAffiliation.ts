/**
 * Interface que define el método de búsqueda por afiliación.
 * @template T - El tipo de elemento que se va a buscar.
 */
export interface SearchByAffiliation<T> {
    searchByAffiliation(affiliation: string): T[];
}