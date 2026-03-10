import { elementosRecetario } from "../interfaces/elementosReceta";
import { Paso } from "./pasos";

/**
 * Clase que representa una receta, que contiene un nombre, un año de estreno y un array de pasos que componen la receta.
 */
export class Receta implements elementosRecetario {
    /**
     * Constructor de la clase Receta, que inicializa las propiedades nombre, fechaEstreno y pasos con los valores proporcionados como argumentos.
     * @param nombre - Nombre de la receta
     * @param fechaEstreno - Año de estreno de la receta
     * @param pasos - Array de pasos que componen la receta
     */
    constructor(public nombre: string, public fechaEstreno: number, public pasos: Paso[]){}

}