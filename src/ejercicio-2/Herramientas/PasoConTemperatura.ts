import {Paso} from "../clases/pasos";

/**
 * Clase que representa un paso de una receta que incluye una herramienta específica. Esta clase hereda de la clase Paso.
 */
export class PasoConTemperatura extends Paso {
    /**
     * Constructor
     * @param nombre - Nombre del paso
     * @param duracion - Duración del paso en minutos
     * @param tags - Array de etiquetas asociadas al paso
     * @param veces_completado - Número de veces que se ha completado el paso
     * @param temperatura - temperatura específica para este paso
     * @param paso_opcional - Indica si el paso es opcional (true) o no (false).
     */
    constructor(public nombre: string, public duracion: number, public tags: string[], public veces_completado: number, 
                public temperatura: string, public paso_opcional?: boolean ) {
        super(nombre, duracion, tags, veces_completado, paso_opcional);        
    }
}