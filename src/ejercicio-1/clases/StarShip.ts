/**
 * Clase que representa una nave espacial, con propiedades como nombre, afiliación, nivel de poder, año de creación y planeta de origen.
 */
export class StarShip {
    /**
     * Función constructora de la clase StarShip, que inicializa las propiedades de la nave espacial con los valores proporcionados como 
     * argumentos.
     * @param name - El nombre de la nave espacial.
     * @param affiliation - La afiliación a la que pertenece la nave espacial.
     * @param year - El año de creación de la nave espacial.
     * @param original_planet - El planeta de origen de la nave espacial.
     */
    constructor (public name: string, public affiliation: string, public year: number, 
                 public original_planet: string) {}
}