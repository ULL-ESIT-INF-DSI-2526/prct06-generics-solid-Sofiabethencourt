import { Repository } from "../interfaces/Repository";
import {Chef} from "../clases/chef"

export class ChefRepository implements Repository<Chef, string> {
    public saved_chefs: Chef[] = [];

    constructor(){}

    add(item: Chef): void{
        this.saved_chefs.push(item);
    }

    remove(id: string): void {
        this.saved_chefs = this.saved_chefs.filter(c => c.nombre != id);
    }

    getById(id: string): Chef {
        return this.saved_chefs.find(c => c.nombre === id);
    }

    getAll(): Chef[] {
        return this.saved_chefs;
    }
}