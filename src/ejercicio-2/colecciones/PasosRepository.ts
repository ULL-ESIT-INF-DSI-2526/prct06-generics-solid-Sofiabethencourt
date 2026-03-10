import { Repository } from "../interfaces/Repository";
import {Paso} from "../clases/pasos"

export class PasoRepository implements Repository<Paso, string> {
    public saved_pasos: Paso[] = [];
     
    add(item: Paso): void {
        this.saved_pasos.push(item);
    }

    remove(id: string): void {
        this.saved_pasos = this.saved_pasos.filter(r => r.nombre !== id);
    }

    getById(id: string): Paso {
        return this.saved_pasos.find(r => r.nombre === id);
    }

    getAll(): Paso[] {
        return this.saved_pasos;
    }
}