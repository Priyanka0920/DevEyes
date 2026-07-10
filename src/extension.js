const vscode = require("vscode");

const registerStartReminder = require("./commands/reminder/startReminder");
const registerStopReminder = require("./commands/reminder/stopReminder");
const storage = require("./storage/storageManager");
const registerOpenDashboard = require("./commands/dashboard/openDashboard");

function activate(context) {

    console.log("🚀 DevEyes Activated");

    storage.initialize(context);

    vscode.window.showInformationMessage(
        "👀 Welcome to DevEyes!"
    );

    context.subscriptions.push(

    registerStartReminder(),
    registerStopReminder(),
    registerOpenDashboard()

);

}

function deactivate() {
    console.log("👋 DevEyes Deactivated");
}

module.exports = {
    activate,
    deactivate
};