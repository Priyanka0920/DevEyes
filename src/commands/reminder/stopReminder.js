const vscode = require("vscode");
const reminderManager = require("../../reminder/reminderManager");

function registerStopReminder() {

    return vscode.commands.registerCommand(
        "deveyes.stopReminder",
        () => {

            reminderManager.stopReminder();

            vscode.window.showInformationMessage(
                "🛑 DevEyes Reminder Stopped"
            );

        }
    );

}

module.exports = registerStopReminder;