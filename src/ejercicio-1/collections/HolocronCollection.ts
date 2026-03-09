import { Holocron } from "../clases/Holocron";
import { BasicGalacticCollection } from "../clases_abstractas/BasicGalacticCollection";
import { GalacticRegistry } from "../interfaces/GalacticRegistry";
import { SearchByOriginalPlanet } from "../interfaces/SearchByOriginalPlanet";
import { SearchByYear} from "../interfaces/SearchByYear";

/**
 * Clase HolocronCollection que extiende BasicGalacticCollection e implementa GalacticRegistry, SearchByYear y SearchByOriginalPlanet.
 */
export class HolocronCollection 
        extends BasicGalacticCollection<Holocron> 
        implements GalacticRegistry<Holocron>, SearchByYear<Holocron>, SearchByOriginalPlanet<Holocron> {

        /**
         * Función para buscar holocrones por año de creación.
         * @param year - Año de creación del holocron a buscar.
         * @returns Un array de holocrones que fueron creados en el año especificado.
         */
        searchByYear(year: number): Holocron[] {
                return this.items.filter(holocron => holocron.year === year);
        }

        /**
         * Función para buscar holocrones por planeta de origen.
         * @param original_planet - Planeta de origen del holocron a buscar.
         * @returns Un array de holocrones que tienen como planeta de origen el especificado.
         */
        searchByOriginalPlanet(original_planet: string): Holocron[] {
                return this.items.filter(holocron => holocron.original_planet === original_planet);
        }

        /**
         * Función para buscar holocrones por nivel de poder. Dado que los holocrones no tienen un nivel de poder definido, 
         * esta función lanza un error.
         * @param level - Nivel de poder del holocron a buscar.
         * @returns Un array de holocrones que tienen el nivel de poder especificado. En este caso, siempre devuelve un array vacío.
         */
        searchByPower(level: number): Holocron[] {
                throw new Error("No hay nivel de poder para los holocrones");
        }

        /**
         * Función para buscar holocrones por afiliación. Dado que los holocrones no tienen una afiliación definida,
         * esta función lanza un error.
         * @param affiliation - Afiliación del holocron a buscar.
         * @returns Array de holocrones que tienen la afiliación especificada. En este caso, siempre devuelve un array vacío.
         */
        searchByAffiliation(affiliation: string): Holocron[] {
                throw new Error("No hay afiliación para los holocrones");
        }
}