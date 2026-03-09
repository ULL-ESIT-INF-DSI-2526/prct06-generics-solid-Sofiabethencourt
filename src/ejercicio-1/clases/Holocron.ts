/**
 * Clase Holocron, con sus atributos y constructor.
 */
export class Holocron {
    /**
     * Constructor de la clase Holocron, que recibe el nombre, año de creación y planeta de origen del holocron.
     * @param name - Nombre del holocron.
     * @param year - Año de creación del holocron.
     * @param original_planet - Planeta de origen del holocron. 
     */
    constructor (public name: string, public year: number, public original_planet: string) {}
}