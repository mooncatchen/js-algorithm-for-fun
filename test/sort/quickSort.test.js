var quickSort = require('../../src/sort/quickSort');
describe("test quickSort suite", function () {
    it('failed when list is null', function () {
        expect(null).toEqual(quickSort(null));
    });
    it('failed when list is undefined', function () {
        expect(undefined).toEqual(quickSort(undefined));
    });
    it('failed when list is empty', function () {
        expect([]).toEqual(quickSort([]));
    });
    it('failed when list with only one element', function () {
        expect([22]).toEqual(quickSort([22]));
    });
    it('not sort correctly', function () {
        expect([1, 4, 5]).toEqual(quickSort([1, 5, 4]));
        expect([ 1, 2, 3, 4, 22, 23, 33, 44, 55, 55 ]).toEqual(quickSort([22, 44, 3, 23, 55, 4, 1, 2, 33, 55]));
    });
});
