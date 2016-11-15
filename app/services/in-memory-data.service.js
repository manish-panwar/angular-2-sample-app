"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice', age: 31 },
            { id: 12, name: 'Narco', age: 31 },
            { id: 13, name: 'Bombasto', age: 31 },
            { id: 14, name: 'Celeritas', age: 31 },
            { id: 15, name: 'Magneta', age: 31 },
            { id: 16, name: 'RubberMan', age: 31 },
            { id: 17, name: 'Dynama', age: 31 },
            { id: 18, name: 'Dr IQ', age: 31 },
            { id: 19, name: 'Magma', age: 31 },
            { id: 20, name: 'Tornado', age: 31 }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map