import { SearchByName } from "../interfaces/SearchByName";
import { SearchByTags } from "../interfaces/SeachByTags";
import { SearchByOpcionality } from "../interfaces/SearchByOpcionality";
import { PasoRepository } from "../colecciones/PasosRepository";
import {Paso} from "../clases/pasos"

export class SearchPaso implements SearchByTags<Paso>, SearchByName<Paso> {
    
    constructor(public pasoRepository: PasoRepository){}

    findByTags(tags: string[]): Paso[] {
        return this.pasoRepository.saved_pasos.filter(p => p.tags.some(tag => tags.includes(tag)));
    }

    findByName(name: string): Paso[] {
        return this.pasoRepository.saved_pasos.filter(p => p.nombre.toLowerCase().includes(name.toLowerCase()));
    }

    findByOpcionality(opcional: boolean): Paso[] {
        return this.pasoRepository.saved_pasos.filter(p => p.paso_opcional == opcional);
    }
}