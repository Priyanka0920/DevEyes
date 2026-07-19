const storage = require("../storage/storageManager");

const KEY = "activityHistory";

function getActivities() {

    return storage.get(KEY, []);

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

    storage.update(KEY, history);

}

function reset() {

    storage.update(KEY, []);

}

module.exports = {

    getActivities,
    addActivity,
    reset

};