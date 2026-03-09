import { BasicGalacticCollection} from "../clases_abstractas/BasicGalacticCollection";
import { SearchByAffiliation } from "../interfaces/SearchByAffiliation";
import { SearchByOriginalPlanet } from "../interfaces/SearchByOriginalPlanet";
import { SearchByYear} from "../interfaces/SearchByYear";
import { SearchByPower } from "../interfaces/SearchByPower";
import { JediMaster} from "../clases/JediMaster";

/**
 * Clase que representa una colección de maestros Jedi, implementando las interfaces necesarias para realizar búsquedas por afiliación, 
 * año, planeta de origen y nivel de poder.
 */
export class JediMasterCollection 
        extends BasicGalacticCollection<JediMaster> 
        implements SearchByAffiliation<JediMaster>, SearchByOriginalPlanet<JediMaster>, SearchByPower<JediMaster>, SearchByYear<JediMaster> {

        /**
         * Función que filtra los maestros Jedi por su nivel de poder, devolviendo un array de maestros Jedi que tienen un nivel de poder igual o superior al 
         * especificado.
         * @param level - El nivel de poder por el cual se desea filtrar los maestros Jedi.
         * @returns Un array de maestros Jedi que tienen un nivel de poder igual o superior al especificado.
         */
        searchByPower(level: number): JediMaster[] {
                return this.items.filter(jedi => jedi.level >= level);
        }

        /**
         * Función que filtra los maestros Jedi por su afiliación, devolviendo un array de maestros Jedi que pertenecen a la afiliación 
         * especificada.
         * @param affiliation - La afiliación por la cual se desea filtrar los maestros Jedi.
         * @returns Un array de maestros Jedi que pertenecen a la afiliación especificada.
         */
        searchByAffiliation(affiliation: string): JediMaster[] {
                return this.items.filter(jedi => jedi.affiliation === affiliation);
        }

        /**
         * Función que filtra los maestros Jedi por su planeta de origen, devolviendo un array de maestros Jedi que tienen como planeta de origen el 
         * especificado.
         * @param original_planet - El planeta de origen por el cual se desea filtrar los maestros Jedi.
         * @returns Un array de maestros Jedi que tienen como planeta de origen el especificado.
         */
        searchByOriginalPlanet(original_planet: string): JediMaster[] {
                return this.items.filter(jedi => jedi.original_planet === original_planet);
        }

        /**
         * Función que filtra los maestros Jedi por su año de creación, devolviendo un array de maestros Jedi que fueron creados en el año 
         * especificado.
         * @param year - El año por el cual se desea filtrar los maestros Jedi.
         * @returns Un array de maestros Jedi que fueron creados en el año especificado.
         */
        searchByYear(year: number): JediMaster[] {
                return this.items.filter(jedi => jedi.year === year);
        }

}