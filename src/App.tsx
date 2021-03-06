import React, {useEffect, useState} from 'react';
import {updateGrid, getGridState} from "./Utils";
import './App.css';

function App() {
    const [grid, setGrid] = useState(getGridState());

    const gridElements = grid.map((row: Array<Boolean>, i: number) => {
        const rows = row.map((val: Boolean, j: number) => {
            return <td key={i + "" + j} className={val ? "black_back" : "white_back"}/>
        });
        return <tr key={i}>{rows}</tr>
    });

    useEffect(
        () => {
            const id = setInterval(() => setGrid(prevGrid => updateGrid(prevGrid)), 400);
            return () => clearInterval(id);
        }, []);
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
