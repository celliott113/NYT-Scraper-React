(function (modules) {

    // The module cache
    var installedModules = {};

    // The require function
    function __web_require__(moduleId) {

        // Check if module is cached
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;

        // Create a new module
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
        };

        // Execute the module function
        modules[moduleId].call(module.exports, module, module.exports, __web_require__);

        // Flag the module as loaded
        module.loaded = true;

        // Return the exports of the module
        return module.exports;
    }

    // Modules object (web modules)
    __web_require__.m = modules;

    // Module cache
    __web_require__.c = installedModules;

    // The web public path
    __web_require__.p = "";

    // Load entry module and return exports
    return __web_require__(0);
})

([
    function (module, exports, __web_require__) {

        (function webMissingModule() {
            throw new Error("Cannot find module: \"./app/app.js\"");
        }());
        (function webMissingModule() {
            throw new Error("Cannot find module: \"./app.js\"");
        }());
        (function webMissingModule() {
            throw new Error("Cannot find module: \"/d/GitHub/NewsScraperNYT/public/bundle.js\"");
        }());
    }
]);