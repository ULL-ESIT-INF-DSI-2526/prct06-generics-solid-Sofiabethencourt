/**
 * Interfaz genérica para modelar el almacenamiento de entidades en las recetas
 */
export interface Repository<T, K> {
    add(item: T): void;
    remove(id: K): void;
    getById(id: K): T | undefined;
    getAll(): T[];
}