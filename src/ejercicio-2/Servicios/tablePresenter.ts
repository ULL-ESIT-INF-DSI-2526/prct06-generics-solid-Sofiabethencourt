import { Presenter } from "../interfaces/TablePresenter";
/**
 * Clase genérica TablePresenter que se encarga de presentar datos en formato de tabla. Utiliza el método console.table para mostrar
 * la información de manera clara y estructurada, permitiendo visualizar cualquier tipo de datos genéricos que se le proporcionen.
 */
export class TablePresenter<T> {
    /** 
     * Función que muestra la tabla obtenida a partir de un array de datos genéricos utilizando console.table para una 
     * visualización clara y estructurada.
     */
    public mostrarTabla(data: T[]): void {
        console.table(data);
    }
}