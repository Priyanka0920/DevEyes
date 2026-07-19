const storage = require("../storage/storageManager");

const KEY = "activityHistory";

function getActivities() {

    return storage.load(KEY, []);

}

function addActivity(action) {

    const history = getActivities();

    history.unshift({

        action,
        time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })

    });

    if (history.length > 10) {

        history.pop();

    }

    storage.save(KEY, history);

}

function reset() {

    storage.save(KEY, []);

}

module.exports = {

    getActivities,
    addActivity,
    reset

};