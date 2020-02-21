import {getStatus, getGridState} from './Utils';

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
