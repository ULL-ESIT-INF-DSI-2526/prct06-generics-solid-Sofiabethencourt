import {test, expect, describe, beforeEach} from 'vitest';
import { BasicGalacticCollection } from "../src/ejercicio-1/clases_abstractas/BasicGalacticCollection";
import { JediMasterCollection } from "../src/ejercicio-1/collections/JediMasterCollection";
import { StarshipCollection } from "../src/ejercicio-1/collections/StarshipCollection";
import { JediMaster } from "../src/ejercicio-1/clases/JediMaster";
import { StarShip } from "../src/ejercicio-1/clases/StarShip";
import { GalacticRegistry } from "../src/ejercicio-1/interfaces/GalacticRegistry";
import { SearchByAffiliation } from "../src/ejercicio-1/interfaces/SearchByAffiliation";
import { SearchByOriginalPlanet } from "../src/ejercicio-1/interfaces/SearchByOriginalPlanet";
import { SearchByPower } from "../src/ejercicio-1/interfaces/SearchByPower";
import { SearchByYear } from "../src/ejercicio-1/interfaces/SearchByYear";
import { Holocron} from "../src/ejercicio-1/clases/Holocron";
import { HolocronCollection } from "../src/ejercicio-1/collections/HolocronCollection";


describe('GalacticRegistry', () => {
    let jediCollection: JediMasterCollection;
    let starshipCollection: StarshipCollection;
    let holocronCollection: HolocronCollection;

    let jedi: JediMaster;
    let starship: StarShip;
    let holocron: Holocron;

    beforeEach(() => {
        jediCollection = new JediMasterCollection();
        starshipCollection = new StarshipCollection();
        holocronCollection = new HolocronCollection();
        jedi = new JediMaster('Luke Skywalker', 'Tatooine', 9000, 2000, 'Light Side');
        starship = new StarShip('Millennium Falcon', 'Corellian Engineering Corporation', 1000, 'Dark Side');
        holocron = new Holocron('Ancient Holocron', 5000, 'Planet X');
    });

    test('should add and retrieve a Jedi Master', () => {
        jediCollection.addItem(jedi);
        const retrievedJedi = jediCollection.getItems()[0];
        expect(retrievedJedi).toEqual(jedi);
    });

    test('should add and retrieve a Starship', () => {
        starshipCollection.addItem(starship);
        const retrievedStarship = starshipCollection.getItems()[0];
        expect(retrievedStarship).toEqual(starship);
    });

    test('should add and retrieve a Holocron', () => {
        holocronCollection.addItem(holocron);
        const retrievedHolocron = holocronCollection.getItems()[0];
        expect(retrievedHolocron).toEqual(holocron);
    });

    test ('should search for a Jedi Master by name', () => {
        jediCollection.addItem(jedi);
        const foundJedi = jediCollection.searchByName('Luke Skywalker');
        expect(foundJedi).toEqual(jedi);
    });
    
    test ('should search for a Starship by name', () => {
        starshipCollection.addItem(starship);
        const foundStarship = starshipCollection.searchByName('Millennium Falcon');
        expect(foundStarship).toEqual(starship);
    }); 

    test ('should search for a Holocron by name', () => {
        holocronCollection.addItem(holocron);
        const foundHolocron = holocronCollection.searchByName('Ancient Holocron');
        expect(foundHolocron).toEqual(holocron);
    });

    test('should remove a Jedi Master', () => {
        jediCollection.addItem(jedi);
        jediCollection.removeItem(jedi);
        expect(jediCollection.getItems()).toEqual([]);
    });

    test('should remove a Starship', () => {
        starshipCollection.addItem(starship);
        starshipCollection.removeItem(starship);
        expect(starshipCollection.getItems()).toEqual([]);
    });

    test('should remove a Holocron', () => {
        holocronCollection.addItem(holocron);
        holocronCollection.removeItem(holocron);
        expect(holocronCollection.getItems()).toEqual([]);
    });

});

describe('SearchByAffiliation', () => {
    let jediCollection: JediMasterCollection;
    let starshipCollection: StarshipCollection;
    let holocronCollection: HolocronCollection;

    let jedi: JediMaster;
    let starship: StarShip;
    let holocron: Holocron;

    beforeEach(() => {
        jediCollection = new JediMasterCollection();
        starshipCollection = new StarshipCollection();
        holocronCollection = new HolocronCollection();  
        jedi = new JediMaster('Luke Skywalker', 'Tatooine', 9000, 2000, 'Light Side');
        starship = new StarShip('Millennium Falcon', 'Corellian Engineering Corporation', 1000, 'Dark Side');
        holocron = new Holocron('Ancient Holocron', 5000, 'Planet X');
    });

    test('should search for a Jedi Master by affiliation', () => {
        jediCollection.addItem(jedi);
        const foundJedi = jediCollection.searchByAffiliation('Tatooine');
        expect(foundJedi).toEqual([jedi]);
    });

    test('should search for a Starship by affiliation', () => {
        starshipCollection.addItem(starship);
        const foundStarship = starshipCollection.searchByAffiliation('Corellian Engineering Corporation');
        expect(foundStarship).toEqual([starship]);
    });

    test('should search for a Holocron by affiliation', () => {
        holocronCollection.addItem(holocron);
        expect(() => holocronCollection.searchByAffiliation('Any Affiliation')).toThrow("No hay afiliación para los holocrones");
    });
});

describe('SearchByOriginalPlanet', () => {
    let jediCollection: JediMasterCollection;
    let starshipCollection: StarshipCollection;
    let holocronCollection: HolocronCollection;

    let jedi: JediMaster;
    let starship: StarShip;
    let holocron: Holocron;

    beforeEach(() => {
        jediCollection = new JediMasterCollection();
        starshipCollection = new StarshipCollection();
        holocronCollection = new HolocronCollection();
        jedi = new JediMaster('Luke Skywalker', 'Tatooine', 9000, 2000, 'Light Side');
        starship = new StarShip('Millennium Falcon', 'Corellian Engineering Corporation', 1000, 'Dark Side');
        holocron = new Holocron('Ancient Holocron', 5000, 'Planet X');
    });

    test('should search for a Jedi Master by original planet', () => {
        jediCollection.addItem(jedi);
        const foundJedi = jediCollection.searchByOriginalPlanet('Light Side');
        expect(foundJedi).toEqual([jedi]);
    });

    test('should search for a Holocron by original planet', () => {
        holocronCollection.addItem(holocron);
        const foundHolocron = holocronCollection.searchByOriginalPlanet('Planet X');
        expect(foundHolocron).toEqual([holocron]);
    });

    test('should search for a Starship by original planet', () => {
        starshipCollection.addItem(starship);
        const foundStarship = starshipCollection.searchByOriginalPlanet('Dark Side');
        expect(foundStarship).toEqual([starship]);
    });
});

describe('SearchByYear', () => {
    let jediCollection: JediMasterCollection;
    let starshipCollection: StarshipCollection;
    let holocronCollection: HolocronCollection;

    let jedi: JediMaster;
    let starship: StarShip;
    let holocron: Holocron;

    beforeEach(() => {
        jediCollection = new JediMasterCollection();
        starshipCollection = new StarshipCollection();
        holocronCollection = new HolocronCollection();
        jedi = new JediMaster('Luke Skywalker', 'Tatooine', 9000, 2000, 'Light Side');
        starship = new StarShip('Millennium Falcon', 'Corellian Engineering Corporation', 1000, 'Dark Side');
        holocron = new Holocron('Ancient Holocron', 5000, 'Planet X');
    });

    test('should search for a Jedi Master by year', () => {
        jediCollection.addItem(jedi);
        const foundJedi = jediCollection.searchByYear(2000);
        expect(foundJedi).toEqual([jedi]);
    });

    test('should search for a Starship by year', () => {
        starshipCollection.addItem(starship);
        const foundStarship = starshipCollection.searchByYear(1000);
        expect(foundStarship).toEqual([starship]);
    });

    test('should search for a Holocron by year', () => {
        holocronCollection.addItem(holocron);
        const foundHolocron = holocronCollection.searchByYear(5000);
        expect(foundHolocron).toEqual([holocron]);
    });
});

describe('SearchByPower', () => {
    let jediCollection: JediMasterCollection;
    let starshipCollection: StarshipCollection;
    let holocronCollection: HolocronCollection;

    let jedi: JediMaster;
    let starship: StarShip;
    let holocron: Holocron;

    beforeEach(() => {
        jediCollection = new JediMasterCollection();
        starshipCollection = new StarshipCollection();
        holocronCollection = new HolocronCollection();
        jedi = new JediMaster('Luke Skywalker', 'Tatooine', 9000, 2000, 'Light Side');
        starship = new StarShip('Millennium Falcon', 'Corellian Engineering Corporation', 1000, 'Dark Side');
        holocron = new Holocron('Ancient Holocron', 5000, 'Planet X');
    });

    test('should search for a Jedi Master by power level', () => {
        jediCollection.addItem(jedi);
        const foundJedi = jediCollection.searchByPower(9000);
        expect(foundJedi).toEqual([jedi]);  
    });

    test('should search for a Starship by power level', () => {
        starshipCollection.addItem(starship);
        expect(() => starshipCollection.searchByPower(1000)).toThrow("No hay nivel de poder para las naves espaciales");
    });

    test('should search for a Holocron by power level', () => {
        holocronCollection.addItem(holocron);
        expect(() => holocronCollection.searchByPower(5000)).toThrow("No hay nivel de poder para los holocrones");

    });
});

describe