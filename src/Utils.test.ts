import {getStatus} from './Utils';

it('getStatus', () => {
    expect(getStatus(true, 1)).toBeFalsy();
    expect(getStatus(true, 2)).toBeTruthy();
    expect(getStatus(true, 4)).toBeFalsy();
    expect(getStatus(false, 1)).toBeFalsy();
    expect(getStatus(false, 4)).toBeFalsy();
    expect(getStatus(false, 3)).toBeTruthy();
});
