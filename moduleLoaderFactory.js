/**
 * Factory to load ESTame dependency modules.
 * @param {string} nameSpace 
 * @param {object} containerInstance 
 */
module.exports = (nameSpace, containerInstance) => {
    if (nameSpace.indexOf("/") === -1) {
        try { require(`estame.${nameSpace}`)(nameSpace, containerInstance)} catch (e) {}
    }
};
