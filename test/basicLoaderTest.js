const assert = require("chai").assert;
describe('factory tests', function () {
    it("ioc container test", function () {
        require('module-alias/register');
        const estame = require("../estame.js");
        estame.$mainServer.server;
        estame.mainServer.$myService.service;
        assert(estame.mainServer.myService.name === "service", "Wrong result value");
    });
});