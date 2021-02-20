const iocContainer = require("estame.di").container;
const moduleLoaderFactory = require("./moduleLoaderFactory.js");

/**
 * The core ESTame class
 */
class estame {
    static new() {
        const container = new iocContainer([moduleLoaderFactory]);
        container.addSingleton("estame", estame);
        return container.get("estame");
    }
}

module.exports = estame.new();