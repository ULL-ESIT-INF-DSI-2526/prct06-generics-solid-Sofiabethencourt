/**
 * Clase Dessert
 */
export class Dessert {
    public name: string;
    public difficulty: number;
    /**
     * Constructor
     * @param nombre - nombre del postre 
     * @param dificultad - dificultad de elaboracion
     */
    constructor(nombre: string, dificultad: number) {
        this.name = nombre;
        this.difficulty = dificultad;
    }
}