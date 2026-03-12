import {test, describe, expect, beforeEach} from "vitest";
import {Elaborable} from "../src/ejercicio-PE/interfaces/iElaborable";
import {Salty} from "../src/ejercicio-PE/clases/Salty";
import {Sweet} from "../src/ejercicio-PE/clases/Sweet";
import {Dessert} from "../src/ejercicio-PE/clases/Dessert";
import  {CookBook} from "../src/ejercicio-PE/claseGenerica/CookBook";


describe ("Salty", () => {
    let salty: Salty;

    beforeEach(() => {
        salty = new Salty("Tortilla", "España", 40, "Principal");
    });

    test ("Debería poder crear un plato Salty", () => {
        expect(salty.name).toBe("Tortilla");
        expect(salty.country).toBe("España");
        expect(salty.time_dish).toBe(40);
        expect(salty.dish).toBe("Principal");
    });

    test ("Deberia poder acceder a la función desc", () => {
        const info: string = salty.desc();
        expect(info).toEqual("Nombre: Tortilla, pais: España, tiempo en minutos: 40");
    });

    test ("Deberia poder saber cual es el tiempo total con time", () => {
        const total_time: number = salty.time();
        expect(total_time).toEqual(40);
    });
});

describe ("Sweet", () => {
    let sweet: Sweet;

    beforeEach(() => {
        sweet = new Sweet("Coulant", 8, 20, 30, 100);
    });

    test ("Debería poder crear un plato Sweet", () => {
        expect(sweet.name).toBe("Coulant");
        expect(sweet.difficulty).toBe(8);
        expect(sweet.time_preparation).toBe(20);
        expect(sweet.time_oven).toBe(30);
        expect(sweet.time_fridge).toBe(100);
    });

    test ("Deberia poder acceder a la función desc", () => {
        const dessert: Dessert = sweet.desc();
        expect(dessert.name).toBe("Coulant");
        expect(dessert.difficulty).toBe(8);
    });

    test ("Deberia poder saber cual es el tiempo total con time", () => {
        const total_time: number = sweet.time();
        expect(total_time).toEqual(150);
    });
});

describe ("CookBook", () => {
    let cookbook: CookBook<(Salty|Sweet)>;
    let dish1: Salty;
    let dish2: Sweet;

    beforeEach(() => {
        cookbook = new CookBook();
        dish1 = new Salty("Tortilla", "España", 40, "Principal");
        dish2 = new Sweet("Coulant", 8, 20, 30, 100);
    });

    test("Se pueden añadir elementos al recetario", () => {
        cookbook.add(dish1);
        expect(cookbook.size()).toEqual(1);
        expect(cookbook.get(0)).toEqual(dish1);
    });

    test("Se puede eliminar un elemento del recetario", () => {
        cookbook.add(dish1);
        cookbook.add(dish2);
        cookbook.remove(1);
        expect(cookbook.size()).toEqual(1);
    });

    test("Se puede saber el tamaño total del recetario", () => {
        cookbook.add(dish1);
        expect(cookbook.size()).toEqual(1);
        cookbook.add(dish2);
        expect(cookbook.size()).toEqual(2);
        cookbook.remove(1);
        expect(cookbook.size()).toEqual(1);
        cookbook.remove(0);
        expect(cookbook.size()).toEqual(0);
    });

    test ("Se puede obtener un elemento dependiendo de su indice", () => {
        cookbook.add(dish1);
        expect(cookbook.get(0)).toEqual(dish1);
    });

    test("Se pueden filtrar los platos por un predicado", () => {
        cookbook.add(dish1);
        cookbook.add(dish2);
        let filtrado: CookBook<(Salty|Sweet)>;
        const filtrada = cookbook.filter((item:(Salty|Sweet)) => item.time() < 50);
        
        let cookbook_dish1: CookBook<(Salty|Sweet)>;
        cookbook_dish1 = new CookBook();
        cookbook_dish1.add(dish1);
        expect(filtrada).toEqual(cookbook_dish1);
    });

    test("Se puede obtener el tiempo medio de todos los platos del recetario", () => {
        cookbook.add(dish1);
        cookbook.add(dish2);

        const average: number = cookbook.avgTime();
        expect(average).toEqual(95);
    });

    test("Se puede obtener el tiempo medio = 0 si el recetario esta vacio", () => {
        const average: number = cookbook.avgTime();
        expect(average).toEqual(0);
    });

})