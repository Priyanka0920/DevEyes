const vscode = require("vscode");

const settingsManager = require("./settingsManager");
const reminderManager = require("../reminder/reminderManager");
const statistics = require("../statistics/statisticsManager");
const streakManager = require("../analytics/streakManager");
const activityManager = require("../analytics/activityManager");

const { getSettingsHtml } = require("./settingsHtml");

function openSettingsPanel() {

    const panel = vscode.window.createWebviewPanel(

        "deveyesSettings",

        "DevEyes Settings",

        vscode.ViewColumn.One,

        {
            enableScripts: true
        }

    );

    panel.webview.html = getSettingsHtml(
        settingsManager.getSettings()
    );

    panel.webview.onDidReceiveMessage(async message => {

        switch (message.command) {

            case "saveSettings":

                settingsManager.setReminderInterval(
                    message.interval
                );

                if (reminderManager.isReminderRunning()) {

                    reminderManager.stopReminder();
                    reminderManager.startReminder();

                }

                vscode.window.showInformationMessage(
                    "✅ Settings Saved Successfully"
                );

                break;

            case "resetStatistics": {

                const answer = await vscode.window.showWarningMessage(

                    "Reset all reminder statistics?",

                    { modal: true },

                    "Reset"

                );

                if (answer === "Reset") {

                    statistics.reset();

                    vscode.window.showInformationMessage(
                        "🗑 Statistics Reset Successfully"
                    );

                }

                break;

            }

            case "resetStreak": {

                const answer = await vscode.window.showWarningMessage(

                    "Reset your streak history?",

                    { modal: true },

                    "Reset"

                );

                if (answer === "Reset") {

                    streakManager.reset();

                    vscode.window.showInformationMessage(
                        "🔥 Streak Reset Successfully"
                    );

                }

                break;

            }

            case "resetAll": {

                const answer = await vscode.window.showWarningMessage(

                    "Delete all DevEyes data? This action cannot be undone.",

                    { modal: true },

                    "Delete"

                );

                if (answer === "Delete") {

                    statistics.reset();

                    streakManager.reset();

                    activityManager.reset();

                    vscode.window.showInformationMessage(
                        "🧹 All DevEyes Data Deleted"
                    );

                }

                break;

            }

        }

    });

}

module.exports = {
    openSettingsPanel
};