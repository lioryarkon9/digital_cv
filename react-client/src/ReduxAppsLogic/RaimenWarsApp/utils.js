function isWithinRange (value, min, max) {
    let ret = true;
    if (value < min || value >= max) {
        ret = false;
    }
    
    return ret;
}

export function getCellNeighbours (xPos, yPos, xMax, yMax) {
    // This function takes the current SingleCell object's coordinates and their max possible
    // values (the min. is 0) and returns an array of its neigbours' coordinates.

    // The assumption is that every cell has max 8 neighbours (think of an Excel sheet cell)
    // and if it is near the borders (e.g. the first or last in row/col then it has less) 

    const XPlus1 = xPos + 1;
    const YPlus1 = yPos + 1;
    const XMinus1 = xPos - 1; 
    const YMinus1 = yPos - 1;
    
    const Opt1 = {x: xPos, y: YPlus1};
    const Opt2 = {x: xPos, y: YMinus1};
    const Opt3 = {x: XPlus1, y: yPos};
    const Opt4 = {x: XMinus1, y: yPos};
    const Opt5 = {x: XPlus1, y: YPlus1};
    const Opt6 = {x: XMinus1, y: YMinus1};
    const Opt7 = {x: XPlus1, y: YMinus1};
    const Opt8 = {x: XMinus1, y: YPlus1};

    let neighbours = [Opt1, Opt2, Opt3, Opt4, Opt5, Opt6, Opt7, Opt8];

    neighbours = neighbours.filter(item => { 
        // filtering out the coordinates which aren't in proper range
        if (!isWithinRange(item.x, 0, xMax)) {
            return false;
        }
        if (!isWithinRange(item.y, 0, yMax)) {
            return false;
        }

        return true;
    });

    return neighbours;
}

export function getRandomBool () {
    const RandZeroOrOne = Math.floor(Math.random() * 2);
    if (RandZeroOrOne) return true;
    else return false;
}

export function getNumNeighboursWithRaimen (neighboursCoordinates, allLocations) {
    return neighboursCoordinates.reduce((acc, cur) => {
        const CurNeighbour = allLocations.find(obj => obj.id === JSON.stringify(cur));
        if (CurNeighbour.isStoreExist) {
            acc++;
        }

        return acc;
    }, 0);
}