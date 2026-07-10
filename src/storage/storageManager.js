let context = null;

function initialize(extensionContext) {
    context = extensionContext;
}

function save(key, value) {

    if (!context) {
        return;
    }

    return context.globalState.update(key, value);
}

function load(key, defaultValue) {

    if (!context) {
        return defaultValue;
    }

    return context.globalState.get(key, defaultValue);
}

module.exports = {
    initialize,
    save,
    load
};