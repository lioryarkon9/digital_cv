import {getRandomBool} from './utils';

export class SingleCell {
    constructor (isStoreExist = false, Coordinates = null, neighbours = null, isRandomise = false) {
        this.isStoreExist = isStoreExist;
        if (isRandomise) {
            this.isStoreExist = getRandomBool();
        }
        this.Coordinates = Coordinates;
        this.neighbours = neighbours ? neighbours : [];
        this.id = Coordinates ? JSON.stringify(Coordinates) : '';
    }
}

export class SingleStep {
    constructor () {
        this.AllLocations = []; // all the cells
        this.next = null;
        this.prev = null;
    }
}