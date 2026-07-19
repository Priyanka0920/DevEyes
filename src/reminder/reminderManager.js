const scheduler = require("./scheduler");
const notification = require("./notificationManager");
const settingsManager = require("../settings/settingsManager");

function startReminder() {

    const interval =
        settingsManager.getReminderInterval();

    scheduler.start(() => {

        notification.showReminder();

    }, interval);

}

function stopReminder() {

    scheduler.stop();

}

function isReminderRunning() {

    return scheduler.isRunning();

}

module.exports = {

    startReminder,
    stopReminder,
    isReminderRunning

};