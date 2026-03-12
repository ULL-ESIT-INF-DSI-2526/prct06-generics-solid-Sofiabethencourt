import { Elaborable } from "../interfaces/iElaborable";
import { Dessert } from "../clases/Dessert";

/**
 * Clase CookBook que sirve para almacenar una coleccion de platos
 */
export class CookBook<T extends Elaborable<any>> {
    public collection: T[];

    /**
     * Constructor que inicializa la coleccion a []
     */
    constructor(){
        this.collection =[];
    }

    /**
     * Funcion para añadir un elemento a la coleccion
     * @param item - Elemento a añadir
     */
    add(item: T): void {
        this.collection.push(item);
    }

    /**
     * Función para eliminar un elemento del array de la coleccion de comidas dependiendo del indice
     * dado
     * @param index - indice
     */
    remove(index: number): void {
        let new_collection: T[] = [];
        this.collection.forEach((c,i) => {
            if (i != index) new_collection.push(c);
        });

        this.collection = new_collection;
    }

    /**
     * Función para devolver el elemento en la posicion x del array
     * @param index - la posicion 
     * @returns El elemento que se encuentra en dicha posición
     */
    get (index: number): T {
        return this.collection.find((c, i) => i == index);
    }

    /**
     * Indica el tamaño de la colección
     * @returns El tamaño real de la colección
     */
    size(): number {
        return this.collection.length;
    }

    /**
     * Filtra dependiendo de un predicado
     * @param predicado Un funcion que devuelve true o false
     * @returns La nueva coleccion filtrada
     */
    filter(predicado: (item: T) => boolean): CookBook<T> {
        let new_collection: CookBook<T> = new CookBook<T>();
        this.collection.forEach((c) => {
            if (predicado(c)) new_collection.add(c); 
        });

        return new_collection;
    }

    /**
     * Funcion que calcula el tiempo medio de todas las recetas del libro
     * @returns La media de tiempo
     */
    avgTime(): number {
        if (this.collection.length == 0) return 0;
        else {
            let total: number = 0;
            this.collection.forEach(c => total += c.time());
            return total / this.collection.length;
        }
    }
}