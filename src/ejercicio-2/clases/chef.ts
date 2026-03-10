import { Receta } from "./receta";
import { Paso } from "./pasos";
import { elementosChef } from "../interfaces/elementosChef";
/**
 * Clase que representa un chef, que contiene un nombre, un número de seguidores y un array de recetas que el chef ha creado.
 */
export class Chef implements elementosChef {
    /**
     * Constructor de la clase Chef, que inicializa las propiedades nombre, seguidores y recetario con los valores proporcionados como argumentos.
     * @param nombre - Nombre del chef
     * @param seguidores - Número de seguidores del chef
     * @param recetario - Array de recetas que el chef ha creado
     */
    constructor(public nombre: string, public seguidores: number, public recetario: Receta[]) {}
}