const vscode = require("vscode");

const registerStartReminder = require("./commands/reminder/startReminder");
const registerStopReminder = require("./commands/reminder/stopReminder");
const registerOpenDashboard = require("./commands/dashboard/openDashboard");
const registerOpenSettings = require("./commands/openSettings");

const storage = require("./storage/storageManager");

function activate(context) {

    console.log("🚀 DevEyes Activated");

    // Initialize global storage
    storage.initialize(context);

    vscode.window.showInformationMessage(
        "👀 Welcome to DevEyes!"
    );

    // Register all commands
    context.subscriptions.push(

        registerStartReminder(),
        registerStopReminder(),
        registerOpenDashboard(),
        registerOpenSettings()

    );

    console.log("✅ DevEyes Commands Registered");

}

function deactivate() {

    console.log("👋 DevEyes Deactivated");

}

module.exports = {

    activate,
    deactivate

};