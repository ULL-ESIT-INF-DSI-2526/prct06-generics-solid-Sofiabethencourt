export interface GalacticRegistry<T> {
    addItem(item: T): void;
    removeItem(item: T): void;
    getItems(): T[];
}