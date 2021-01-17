const init = (nameSpace, containerInstance) => {
    containerInstance.add("server", require("./server.js"));
    containerInstance.add("server/service", require("./service.js"));
};

const nameSpaces = {
    "server" : true,
    "server/service" : true
};

module.exports = {init ,nameSpaces};