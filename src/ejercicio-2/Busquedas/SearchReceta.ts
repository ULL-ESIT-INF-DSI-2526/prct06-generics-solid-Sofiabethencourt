import { SearchByName } from "../interfaces/SearchByName";
import { RecetaRepository } from "../colecciones/RecetaRepository";
import {Receta} from "../clases/receta"
import { searchByYear } from "../interfaces/SearchByYear";

export class SearchReceta implements searchByYear<Receta>, SearchByName<Receta> {
    
    constructor(public recetaRepository: RecetaRepository){}

    findByYearRange(year: number): Receta[] {
        return this.recetaRepository.saved_recetas.filter(r => r.fechaEstreno === year);
    }

    findByName(name: string): Receta[] {
        return this.recetaRepository.saved_recetas.filter(r => r.nombre.toLowerCase().includes(name.toLowerCase()));
    }
}