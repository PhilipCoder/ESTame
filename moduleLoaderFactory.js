/**
 * Factory to load ESTame dependency modules.
 * @param {string} nameSpace 
 * @param {object} containerInstance 
 */
module.exports = (nameSpace, containerInstance) => {
    let moduleName = nameSpace.indexOf("/") > -1 ? nameSpace.substring(nameSpace.lastIndexOf("/") + 1) : nameSpace;
    try {
        let container = require(`estame.${moduleName}`);
        if (container.nameSpaces[nameSpace]){
            container.init(moduleName, containerInstance);
        }
    } catch (e) { }
};
