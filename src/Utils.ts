export function updateGrid(grid: Array<Array<Boolean>>, actualSize:number=50): Array<Array<Boolean>> {
    const size = actualSize -1;
    const newGrid: Array<Array<Boolean>> = [];
    grid.forEach((row: Boolean[], i: number) => {
        row.forEach((val: Boolean, j: number) => {
            let liveNeighbours: number = 0;
            if (i > 0) {
                grid[i - 1][j] && liveNeighbours++;
                if (j > 0) {
                    grid[i - 1][j - 1] && liveNeighbours++;
                }
                if (j < size) {
                    grid[i - 1][j + 1] && liveNeighbours++;
                }
            }
            if (j > 0) {
                grid[i][j - 1] && liveNeighbours++;
                if (i < size) {
                    grid[i + 1][j - 1] && liveNeighbours++;
                }
            }
            if (i < size) {
                grid[i + 1][j] && liveNeighbours++;
                if (j < size) {
                    grid[i + 1][j + 1] && liveNeighbours++;
                }
            }
            if (j < size) {
                grid[i][j + 1] && liveNeighbours++;
            }
            newGrid[i] = newGrid[i] || [];
            newGrid[i][j] = getStatus(grid[i][j], liveNeighbours);
        })
    });
    return newGrid;
}

export function getStatus(gridElement: Boolean, liveNeighbours: number): Boolean {
    if (gridElement) {
        if (liveNeighbours < 2) {
            return false;
        }
        return liveNeighbours <= 3;
    }
    return liveNeighbours === 3;
}

export function getGridState(): Array<Array<Boolean>> {
    const grid: Array<Array<Boolean>> = [];
    for (let i: number = 0; i < 50; i++) {
        grid[i] = [];
        for (let j: number = 0; j < 50; j++) {
            grid[i][j] = Math.random() >= 0.5;
        }
    }
    return grid;
}



