import {getStatus, getGridState, updateGrid} from './Utils';

it('test getStatus', () => {
    expect(getStatus(true, 1)).toBeFalsy();
    expect(getStatus(true, 2)).toBeTruthy();
    expect(getStatus(true, 4)).toBeFalsy();
    expect(getStatus(false, 1)).toBeFalsy();
    expect(getStatus(false, 4)).toBeFalsy();
    expect(getStatus(false, 3)).toBeTruthy();
});

it('test getGridState', () => {
    expect(getGridState().length).toBe(50);
    expect(getGridState()[0].length).toBe(50);
});

it('test updateGrid Any live cell with fewer than two live neighbours dies (underpopulation).', () => {
    expect(updateGrid([[false, false], [true, true]], 2)).toEqual([[false, false], [false, false]]);
});

it('test updateGrid Any live cell with two or three live neighbours lives on to the next generation.', () => {
    expect(updateGrid([[false, true], [true, true]], 2)).toEqual([[true, true], [true, true]]);
    expect(updateGrid([[true, true], [true, true]], 2)).toEqual([[true, true], [true, true]]);
});

it('test updateGrid Any live cell with more than three live neighbours dies (overcrowding)', () => {
    expect(updateGrid([[true, true, true], [true, true, true], [true, true, true]], 3))
        .toEqual([[true, false, true], [false, false, false], [true, false, true]]);
});

it('test updateGrid Any dead cell with exactly three live neighbours becomes a live cell (reproduction).', () => {
    expect(updateGrid([[false, true, true], [true, true, true], [true, true, true]], 3))
        .toEqual([[true, false, true], [false, false, false], [true, false, true]]);
});

it('test updateGrid example', () => {
    // 00000           00000
    // 00000           00100
    // 01110 - tick -> 00100
    // 00000           00100
    // 00000           00000

    expect(updateGrid([
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, true, true, true, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ],
        5))
        .toEqual([
            [false, false, false, false, false],
            [false, false, true, false, false],
            [false, false, true, false, false],
            [false, false, true, false, false],
            [false, false, false, false, false]
        ]);
});
