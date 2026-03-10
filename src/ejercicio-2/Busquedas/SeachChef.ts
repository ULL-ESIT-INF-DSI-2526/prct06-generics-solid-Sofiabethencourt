import { SearchByName } from "../interfaces/SearchByName";
import { SearchByFollowers } from "../interfaces/SearchByFollowers";
import { ChefRepository } from "../colecciones/ChefRepository";
import {Chef} from "../clases/chef"

export class SearchChef implements SearchByFollowers<Chef>, SearchByName<Chef> {
    
    constructor(public chefRepository: ChefRepository){}

    findByFollowers(followers: number): Chef[] {
        return this.chefRepository.saved_chefs.filter(c => c.seguidores >= followers);
    }

    findByName(name: string): Chef[] {
        return this.chefRepository.saved_chefs.filter(c => c.nombre.toLowerCase().includes(name.toLowerCase()));
    }
}