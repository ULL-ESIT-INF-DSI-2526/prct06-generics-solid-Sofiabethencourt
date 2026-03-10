import {Receta} from "../clases/receta";

/**
 * Clase para cubrir el servicio de estimación de tiempo de las recetas
 */
export class RecipeTimeEstimator {
    /**
     * Función que devuelve el número total de pasos de la receta, contando tanto los pasos obligatorios como los opcionales.
     * @returns El número total de pasos de la receta.
     */
    public numPasos(recipe: Receta): number {
        return recipe.pasos.length;
    }

    /**
     * Función que calcula el tiempo total mínimo y máximo para completar la receta, sumando la duración de cada paso. 
     * El tiempo mínimo se calcula considerando solo los pasos obligatorios, mientras que el tiempo máximo incluye todos los pasos.
     * @returns Un array con dos elementos: el tiempo mínimo y el tiempo máximo para completar la receta.
     */
    public estimateTime(recipe: Receta): number[] {
        let dur_min: number = 0;
        let dur_max: number = 0;
        recipe.pasos.forEach(p => {
            dur_max += p.duracion;
            if (p.paso_opcional == false) {
                dur_min += p.duracion;
            }
        });
        return [dur_min, dur_max];
    }

}