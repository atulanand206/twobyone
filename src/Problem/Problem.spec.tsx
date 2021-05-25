import * as chai from 'chai';
import { repeat } from './Problem';

describe('Problem', function () {

    const grid = [
        [
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
        ],
        [
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
        ],
        [
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
            { top: 1, bottom: 0, left: 1, right: 4 },
        ],
    ]

    it('should call a', () => {
        const a = repeat();
        chai.expect(a.blocks).deep.equal(grid);
    });
});