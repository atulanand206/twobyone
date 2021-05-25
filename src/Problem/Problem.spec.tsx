import * as chai from 'chai';
import { repeat } from './Problem';

describe('Problem', function () {
    it('should call a', () => {
        const a = repeat({ top: 1, bottom: 0, left: 1, right: 4 });
        console.log(a);
        console.log(a.blocks[1][1]);
    });
});