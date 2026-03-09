import {GalacticRegistry} from "../interfaces/GalacticRegistry";

/**
 * Clase abstracta BasicGalacticCollection que implementa GalacticRegistry.
 * Esta clase proporciona una implementación básica para una colección galáctica, con métodos para agregar, eliminar y obtener elementos,
 * así como para buscar por nombre. Las funciones de búsqueda específicas (por poder, afiliación, año y planeta de origen) son abstractas
 * y deben ser implementadas por las clases que extiendan BasicGalacticCollection.
 */
export abstract class BasicGalacticCollection<T> implements GalacticRegistry<T> {
    protected items: T[] = [];

    /**
     * Función para agregar un elemento a la colección.
     * @param item - El elemento a agregar a la colección.
     */
    addItem(item: T): void {
        this.items.push(item);
    }

    /**
     * Función para eliminar un elemento de la colección.
     * @param item - El elemento a eliminar de la colección.
     */
    removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    /**
     * Función para obtener todos los elementos de la colección.
     * @returns - Un array con todos los elementos de la colección.
     */
    getItems(): T[] {
        return this.items;
    }

    /**
     * Función para buscar un elemento por su nombre. Asume que los elementos tienen una propiedad 'name'.
     * @param name - El nombre del elemento a buscar.
     * @returns Un elemento que coincide con el nombre especificado, o undefined si no se encuentra ningún elemento con ese nombre.
     */
    searchByName(name: string): T | undefined {
        return this.items.find(item => (item as any).name === name);
    }

    // Funciones abstractas para buscar por poder, afiliación, año y planeta de origen. Estas funciones deben ser implementadas por 
    // las clases que extiendan BasicGalacticCollection.
    abstract searchByPower(level: number): T[];
    abstract searchByAffiliation(affiliation: string): T[];
    abstract searchByYear(year: number): T[];
    abstract searchByOriginalPlanet(original_planet: string): T[];
}