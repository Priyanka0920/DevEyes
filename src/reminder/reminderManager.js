const scheduler = require("./scheduler");
const notification = require("./notificationManager");

function startReminder() {

    scheduler.start(() => {

        notification.showReminder();

    }, 0.33);

}

function stopReminder() {

    scheduler.stop();

}

module.exports = {
    startReminder,
    stopReminder
};