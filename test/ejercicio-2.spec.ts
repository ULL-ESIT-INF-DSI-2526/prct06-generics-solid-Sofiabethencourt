import {test, describe, expect, beforeEach} from "vitest";
import {Chef} from "../src/ejercicio-2/clases/chef";
import {ChefRepository} from "../src/ejercicio-2/colecciones/ChefRepository";
import {SearchChef} from "../src/ejercicio-2/Busquedas/SeachChef";
import {SearchReceta} from "../src/ejercicio-2/Busquedas/SearchReceta";
import {SearchPaso} from "../src/ejercicio-2/Busquedas/SearchPaso";
import {Paso} from "../src/ejercicio-2/clases/pasos";
import {PasoConHerramienta} from "../src/ejercicio-2/Herramientas/PasoConHerramienta";
import {PasoConTemperatura} from "../src/ejercicio-2/Herramientas/PasoConTemperatura";
import {PasoRepository} from "../src/ejercicio-2/colecciones/PasosRepository";
import {Receta} from "../src/ejercicio-2/clases/receta";
import {RecetaRepository} from "../src/ejercicio-2/colecciones/RecetaRepository";
import {RecipeTimeEstimator} from "../src/ejercicio-2/Servicios/recipeTimeEstimator";
import {TablePresenter} from "../src/ejercicio-2/Servicios/tablePresenter";
import { Presenter } from "../src/ejercicio-2/interfaces/TablePresenter";
import { Repository } from "../src/ejercicio-2/interfaces/Repository";


describe ("Chef", () => {
    let chef: Chef;
    let chef2: Chef;
    let chefRepository: ChefRepository;
    let searchChef: SearchChef;

    beforeEach(() => {
        chef = new Chef("Gordon Ramsay", 1000000, []);
        chefRepository = new ChefRepository();
        searchChef = new SearchChef(chefRepository);
        chef2 = new Chef("Chicote", 30000, []);
    });

    test("Debería crear un chef con nombre,seguidores y recetario", () => {
        expect(chef.nombre).toBe("Gordon Ramsay");
        expect(chef.seguidores).toBe(1000000);
        expect(chef.recetario).toEqual([]);
    });

    test("Deberia poder añadir a chefs en un chefRepository", () => {
        chefRepository.add(chef);
        expect(chefRepository.getAll()).toEqual([chef]);
    });

    test("Deberia poder eliminar chefs en un chefRepository", () => {
        chefRepository.add(chef);
        chefRepository.remove("Gordon Ramsay");
        expect(chefRepository.getAll()).toEqual([]);
    });

    test("Deberia poder obtener un chef por su nombre en un chefRepository", () => {
        chefRepository.add(chef);
        const foundChef = chefRepository.getById("Gordon Ramsay");
        expect(foundChef).toEqual(chef);
    });

    test("Deberia poder filtrar chefs por nombre", () => {
        chefRepository.add(chef);
        chefRepository.add(chef2);
        const founded = searchChef.findByName("Chicote");
        expect(founded).toEqual([chef2]);
    });

    test("Deberia poder filtrar chefs por seguidores", () => {
        chefRepository.add(chef);
        chefRepository.add(chef2);
        const founded = searchChef.findByFollowers(1000);
        expect(founded).toEqual([chef, chef2]);
    });
});

describe ("Receta", () => {
    let receta: Receta;
    let receta2: Receta;
    let recetaRepository: RecetaRepository;
    let searchReceta: SearchReceta;

    beforeEach(() => {
        receta = new Receta("Pasta Carbonara", 2002, []);
        receta2 = new Receta("Pasta Boloñesa", 2006, []);
        recetaRepository = new RecetaRepository();
        searchReceta = new SearchReceta(recetaRepository);
    });

    test("Debería crear una receta con nombre, fecha de estreno y pasos", () => {
        expect(receta.nombre).toBe("Pasta Carbonara");
        expect(receta.fechaEstreno).toBe(2002);
        expect(receta.pasos).toEqual([]);
    });

    test("Deberia poder añadir recetas en un recetaRepository", () => {
        recetaRepository.add(receta);
        expect(recetaRepository.getAll()).toEqual([receta]);
    });

    test("Deberia poder eliminar recetas en un recetaRepository", () => {
        recetaRepository.add(receta);
        recetaRepository.remove("Pasta Carbonara");
        expect(recetaRepository.getAll()).toEqual([]);
    });

    test("Deberia poder obtener una receta por su nombre en un recetaRepository", () => {
        recetaRepository.add(receta);
        const foundReceta = recetaRepository.getById("Pasta Carbonara");
        expect(foundReceta).toEqual(receta);
    });

    test("Deberia poder filtrar recetas por nombre", () => {
        recetaRepository.add(receta);
        recetaRepository.add(receta2);
        const founded = searchReceta.findByName("Pasta carbonara");
        expect(founded).toEqual([receta]);
    });

    test("Deberia poder filtrar recetas por año de estreno", () => {
        recetaRepository.add(receta);
        recetaRepository.add(receta2);
        const founded = searchReceta.findByYearRange(2002);
        expect(founded).toEqual([receta]);
    });
});

describe ("Paso", () => {
    let step: Paso;
    let step2: Paso;
    let pasoRepository: PasoRepository;
    let searchPaso: SearchPaso;

    beforeEach(() => {
        step = new Paso("cortar", 4, ["cocina"], 2, false);
        step2 = new Paso("pelar", 5, [], 6, true);
        pasoRepository = new PasoRepository();
        searchPaso = new SearchPaso(pasoRepository);
    });

    test("Debería crear una Paso con nombre, duracion, tags, veces completado y paso opcional", () => {
        expect(step.nombre).toBe("cortar");
        expect(step.duracion).toBe(4);
        expect(step.tags).toEqual(["cocina"]);
        expect(step.veces_completado).toBe(2);
        expect(step.paso_opcional).toBe(false);
    });

    test("Deberia poder añadir Pasos en un PasoRepository", () => {
        pasoRepository.add(step);
        expect(pasoRepository.getAll()).toEqual([step]);
    });

    test("Deberia poder eliminar Pasos en un PasoRepository", () => {
        pasoRepository.add(step);
        pasoRepository.remove("cortar");
        expect(pasoRepository.getAll()).toEqual([]);
    });

    test("Deberia poder obtener una Paso por su nombre en un PasoRepository", () => {
        pasoRepository.add(step);
        const foundPaso = pasoRepository.getById("cortar");
        expect(foundPaso).toEqual(step);
    });

    test("Deberia poder filtrar Pasos por nombre", () => {
        pasoRepository.add(step);
        pasoRepository.add(step2);
        const founded = searchPaso.findByName("cortar");
        expect(founded).toEqual([step]);
    });

    test("Deberia poder filtrar Pasos por tags", () => {
        pasoRepository.add(step);
        pasoRepository.add(step2);
        const founded = searchPaso.findByTags(["cocina"]);
        expect(founded).toEqual([step]);
    });

    test ("Deberia poder filtrar Pasos por opcionalidad", () => {
        pasoRepository.add(step);
        pasoRepository.add(step2);
        const founded = searchPaso.findByOpcionality(true);
        expect(founded).toEqual([step2]);
    });

    test ("Deberia poder crear una instancia de paso con temperatura", () => {
        const pasot = new PasoConTemperatura("pelar", 5, [], 6, 35, true);
        expect(pasot.nombre).toBe("pelar");
        expect(pasot.duracion).toBe(5);
        expect(pasot.tags).toEqual([]);
        expect(pasot.veces_completado).toBe(6);
        expect(pasot.paso_opcional).toBe(true);
        expect(pasot.temperatura).toBe(35);
    });

    test ("Deberia poder crear una instancia de paso con herramienta", () => {
        const pasohr = new PasoConHerramienta("pelar", 5, [], 6, "pelador", true);
        expect(pasohr.nombre).toBe("pelar");
        expect(pasohr.duracion).toBe(5);
        expect(pasohr.tags).toEqual([]);
        expect(pasohr.veces_completado).toBe(6);
        expect(pasohr.paso_opcional).toBe(true);
        expect(pasohr.herramienta).toBe("pelador");
    });

});

describe ("RecipeTimeEstimator", () => {
    let receta: Receta;
    let recipeTimeEstimator: RecipeTimeEstimator;

    beforeEach(() => {
        receta = new Receta("Pasta Carbonara", 2002, []);
        receta.pasos.push(new Paso("cortar", 4, ["cocina"], 2, false));
        receta.pasos.push(new Paso("pelar", 5, [], 6, true));
        recipeTimeEstimator = new RecipeTimeEstimator();
    });
    
    test("Debería calcular el número total de pasos de una receta", () => {
        const numPasos = recipeTimeEstimator.numPasos(receta);
        expect(numPasos).toBe(2);
    });

    test("Deberia calcular el tiempo minimo y maximo de una recet", () => {
        const tiempo = recipeTimeEstimator.estimateTime(receta);
        expect(tiempo).toEqual([4, 9]);
    });
});


describe("TablePresenter", () => {

    test("Debería mostrar un array con elementos", () => {
        const presenter = new TablePresenter<Chef>();

        const chefs = [
            new Chef("Gordon Ramsay", 1000000, []),
            new Chef("Chicote", 30000, [])
        ];
        presenter.mostrarTabla(chefs);
        expect(chefs.length).toBe(2);
    });

    test("Debería manejar un array vacío", () => {
        const presenter = new TablePresenter<Chef>();
        const chefs: Chef[] = [];
        presenter.mostrarTabla(chefs);
        expect(chefs.length).toBe(0);
    });

});