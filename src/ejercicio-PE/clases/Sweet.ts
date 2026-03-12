import {Elaborable} from "../interfaces/iElaborable";
import { Dessert} from "./Dessert";

/**
 * Tipo para que el valor de la dificultad sea del 1-10
 */
export type tDif = 1| 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Clase Sweet que implementa Elaborable
 */
export class Sweet implements Elaborable<Dessert> {
    /**
     * COnstructor
     * @param _name - nombre 
     * @param _difficulty - dificultad (1-10)
     * @param _time_preparation - tiempo de preparacion 
     * @param _time_oven - tiempo de horneado
     * @param _time_fridge - tiempo de refrigeracion
     */
    constructor(private _name: string, private _difficulty: tDif, private _time_preparation: number, private _time_oven: number, 
                private _time_fridge: number) {}
    
    /** GETTERS */
    get name(): string { return this._name;}
    get difficulty(): tDif {return this._difficulty;}
    get time_preparation(): number {return this._time_preparation;}
    get time_oven(): number {return this._time_oven;}
    get time_fridge(): number {return this._time_fridge;}

    /**
     * Funcion que da informacion sobre la receta
     * @returns Un objeto de tipo Dessert con el nombre y la dificultad
     */
    desc(): Dessert {
        return new Dessert(this._name, this._difficulty);
    }

    /**
     * Funcion que da el tiempo total de cocinado
     * @returns La suma de los tres tiempos
     */
    time(): number {
        return this._time_fridge + this._time_oven + this._time_preparation;
    }
}