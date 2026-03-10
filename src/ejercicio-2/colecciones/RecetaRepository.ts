import { Repository } from "../interfaces/Repository";
import {Receta} from "../clases/receta"

export class RecetaRepository implements Repository<Receta, string> {
    public saved_recetas: Receta[] = [];
     
    add(item: Receta): void {
        this.saved_recetas.push(item);
    }

    remove(id: string): void {
        this.saved_recetas = this.saved_recetas.filter(r => r.nombre !== id);
    }

    getById(id: string): Receta {
        return this.saved_recetas.find(r => r.nombre === id);
    }

    getAll(): Receta[] {
        return this.saved_recetas;
    }
}