const vscode = require("vscode");
const reminderManager = require("../../reminder/reminderManager");

function registerStartReminder() {

    return vscode.commands.registerCommand(
        "deveyes.startReminder",
        () => {

            reminderManager.startReminder();

            vscode.window.showInformationMessage(
                "👀 DevEyes Reminder Started"
            );

        }
    );

}

module.exports = registerStartReminder;