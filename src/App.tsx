import React, {useState} from 'react';
import './App.css';

function App() {

    function getState(): Array<Array<Boolean>> {
        const grid: Array<Array<Boolean>> = [];
        for (let i: number = 0; i < 50; i++) {
            grid[i] = [];
            for (let j: number = 0; j < 50; j++) {
                grid[i][j] = Math.random() >= 0.5;
            }
        }
        return grid;
    }

    function getStatus(gridElementElement: Boolean, liveNeighbours: number) {
        if (gridElementElement) {
            if (liveNeighbours < 2) {
                return false;
            }
            return liveNeighbours <= 3;

        }
        return liveNeighbours === 3;
    }

    function updateGrid(grid: Array<Array<Boolean>>, setGrid: (value: (((prevState: Array<Array<Boolean>>) => Array<Array<Boolean>>) | Array<Array<Boolean>>)) => void) {
        const newGrid: Array<Array<Boolean>> = [];
        grid.forEach((row: Boolean[], i: number) => {
            row.forEach((val: Boolean, j: number) => {
                let liveNeighbours: number = 0;
                if (i > 0) {
                    grid[i - 1][j] && liveNeighbours++;
                    if (j > 0) {
                        grid[i - 1][j - 1] && liveNeighbours++;
                    }
                    if (j < 49) {
                        grid[i - 1][j + 1] && liveNeighbours++;
                    }
                }
                if (j > 0) {
                    grid[i][j - 1] && liveNeighbours++;
                    if (i < 49) {
                        grid[i + 1][j - 1] && liveNeighbours++;
                    }
                }
                if (i < 49) {
                    grid[i + 1][j] && liveNeighbours++;
                    if (j < 49) {
                        grid[i + 1][j + 1] && liveNeighbours++;
                    }
                }
                if (j < 49) {
                    grid[i][j + 1] && liveNeighbours++;
                }
                newGrid[i] = newGrid[i] || [];
                console.log("updating");
                debugger;
                newGrid[i][j] = getStatus(grid[i][j], liveNeighbours);
            })
        });
        setGrid(newGrid);
    }

    const [grid, setGrid] = useState(getState());

    const gridElements = grid.map((row: Array<Boolean>, i: number) => {
        const rows = row.map((val: Boolean, j: number) => {
            return <td key={i + "" + j} className={val ? "black_back" : "white_back"}/>
        });
        return <tr>{rows}</tr>
    });

    setTimeout(() => updateGrid(grid, setGrid), 1000);
    return (
        <div className="App">
            <table>
                <tbody>
                {gridElements}
                </tbody>
            </table>
        </div>
    );
}

export default App;
