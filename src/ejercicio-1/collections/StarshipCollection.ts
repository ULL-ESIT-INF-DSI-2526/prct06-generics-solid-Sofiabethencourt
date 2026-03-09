import { StarShip} from "../clases/StarShip";
import { BasicGalacticCollection } from "../clases_abstractas/BasicGalacticCollection";
import { GalacticRegistry } from "../interfaces/GalacticRegistry";
import { SearchByAffiliation } from "../interfaces/SearchByAffiliation";
import { SearchByOriginalPlanet } from "../interfaces/SearchByOriginalPlanet";
import { SearchByYear} from "../interfaces/SearchByYear";

/**
 * Clase que representa una colección de naves espaciales, implementando las interfaces necesarias para realizar búsquedas por afiliación, 
 * año y planeta de origen.
 */
export class StarshipCollection 
        extends BasicGalacticCollection<StarShip> 
        implements GalacticRegistry<StarShip>, SearchByAffiliation<StarShip>, SearchByYear<StarShip>, SearchByOriginalPlanet<StarShip> {
        
        /**
         * Filtra las naves espaciales por su afiliación, devolviendo un array de naves que pertenecen a la afiliación especificada.
         * @param affiliation - La afiliación por la cual se desea filtrar las naves espaciales.
         * @returns Un array de naves espaciales que pertenecen a la afiliación especificada.
         */
        searchByAffiliation(affiliation: string): StarShip[] {
                return this.items.filter(starship => starship.affiliation === affiliation);
        }

        /**
         * Función que filtra las naves espaciales por su año de creación, devolviendo un array de naves que fueron creadas en el año 
         * especificado.
         * @param year - El año por el cual se desea filtrar las naves espaciales.
         * @returns Un array de naves espaciales que fueron creadas en el año especificado.
         */
        searchByYear(year: number): StarShip[] {
                return this.items.filter(starship => starship.year === year);
        }

        /**
         * Función que filtra las naves espaciales por su planeta de origen, devolviendo un array de naves que tienen como planeta de origen el 
         * especificado.
         * @param original_planet - El planeta de origen por el cual se desea filtrar las naves espaciales.
         * @returns Un array de naves espaciales que tienen como planeta de origen el especificado.
         */
        searchByOriginalPlanet(original_planet: string): StarShip[] {
                return this.items.filter(starship => starship.original_planet === original_planet);
        }

        /**
         * Función que filtra las naves espaciales por su nivel de poder, devolviendo un array de naves que tienen un nivel de poder igual o superior al 
         * especificado. En este caso, se lanza un error porque las naves espaciales no tienen un nivel de poder definido.
         * @param level - El nivel de poder por el cual se desea filtrar las naves espaciales.
         * @returns Un array vacío, ya que las naves espaciales no tienen un nivel de poder definido.
         */
        searchByPower(level: number): StarShip[] {
                throw new Error("No hay nivel de poder para las naves espaciales");
        }
}