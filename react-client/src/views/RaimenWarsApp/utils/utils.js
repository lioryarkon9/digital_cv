export function handleGridItemId (itemId, numItems) {
    if (itemId < numItems) {
        itemId++;
    } else {
        itemId = 0;
    }

    return itemId;
}

function getNumOfNeighboursByCoordinates (coordinates, numCellsInRow, numRows) {
    // {x: 0, y: 0}
    let ret = 8; // default cell has 8 neighbours
    const X = coordinates.x;
    const Y = coordinates.y;
    const FINAL_CELL_IN_ROW = numCellsInRow - 1; 
    const FINAL_ROW = numRows - 1;
    if (X === 0 || X === FINAL_CELL_IN_ROW) {
        ret -= 3;
    } 
    if (Y === 0 || Y === FINAL_ROW) {
        ret -= 3;
    }
    if (ret < 3) {
        //one of the above overlaps in case of corner location - cannot have less than 3 neighbouring cells
        ret = 3;
    } 
    
    return ret;
}

export function getNeighborsCoordinatesByOwn (coordinates, numCellsInRow, numRows) {
    // getting a cells neighbors' coordinates 
    let ret = [];
    const MyCoordinates = coordinates; // the current cell's coordinates
    const NumOfNeighbours = getNumOfNeighboursByCoordinates(MyCoordinates, numCellsInRow, numRows);
    // {x: 0, y: 0}
    let xPos = MyCoordinates.x, yPos = MyCoordinates.y;
    for (let i = 0; i < NumOfNeighbours; i++) {
        
    }
}