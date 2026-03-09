/**
 * Clase que representa un maestro Jedi, con propiedades como nombre, afiliación, nivel de poder, año de creación y planeta de origen.
 */
export class JediMaster {
    /**
     * Función constructora de la clase JediMaster, que inicializa las propiedades del maestro Jedi con los valores proporcionados como argumentos.
     * @param name - El nombre del maestro Jedi.
     * @param affiliation - La afiliación a la que pertenece el maestro Jedi.
     * @param level - El nivel de poder del maestro Jedi.
     * @param year - El año de creación del maestro Jedi.
     * @param original_planet - El planeta de origen del maestro Jedi.
     */
    constructor (public name: string, public affiliation: string, public level: number, public year: number, 
                 public original_planet: string) {}
}