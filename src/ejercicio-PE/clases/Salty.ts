import {Elaborable} from "../interfaces/iElaborable";
/**
 * Tupla para acortar las opciones del tipo de plato
 */
export type dishTypes = "Entrante" | "Guarnicion" | "Principal" | "Postre";

/**
 * Clase Salty para platos salados que implementa Elaborable con string
 */
export class Salty implements Elaborable<string> {
    /**
     * Constructor
     * @param _name - nombre
     * @param _country - pais de origen
     * @param _time_dish - tiempo en minutos
     * @param _dish - tipo de plato
     */
    constructor(private _name: string, private _country: string, private _time_dish: number, private _dish: dishTypes) {}
    
    /** GETTERS */
    get name(): string { return this._name;}
    get country(): string {return this._country;}
    get time_dish(): number {return this._time_dish;}
    get dish(): dishTypes {return this._dish;}

    /**
     * Funcion para saber informacion general del plato
     * @returns Un string con la info
     */
    desc(): string {
        return "Nombre: " + this._name + ", pais: " + this._country + ", tiempo en minutos: " + this._time_dish; 
    }

    /**
     * Funcion para saber el tiempo en minutos
     * @returns El tiempo en minutos
     */
    time(): number {
        return this._time_dish;
    }

}