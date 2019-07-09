function isWithinRange (value, min, max) {
    let ret = true;
    if (value < min || value >= max) {
        ret = false;
    }
    
    return ret;
}

export function getCellNeighbours (xPos, yPos, xMax, yMax) {
    // xPos = 0; yPos = 0
    // const MAX_NEIGHBOURS = 8; // a single cell cannot have more than 8 cells around it
    // const MIN_NEIGHBOURS = 2; // a corner cell will have only 3 neighbours

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
        let cond = true;
        if (!isWithinRange(item.x, 0, xMax)) {
            return false;
        }
        if (!isWithinRange(item.y, 0, yMax)) {
            return false;
        }

        return cond;
    });

    return neighbours;
}

export function getRandomBool () {
    const RandZeroOrOne = Math.floor(Math.random() * 2);
    if (RandZeroOrOne) return true;
    else return false;
}