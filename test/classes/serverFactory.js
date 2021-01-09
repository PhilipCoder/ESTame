const serverFactory = (nameSpace, containerInstance) => {
    containerInstance.add("server", require("./server.js"));
    containerInstance.add("server/service", require("./service.js"));
};

module.exports = serverFactory;