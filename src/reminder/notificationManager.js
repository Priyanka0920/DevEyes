const vscode = require("vscode");
const { getRandomExercise } = require("./eyeExercises");
const statistics = require("../statistics/statisticsManager");

function showReminder() {

    const message = getRandomExercise();

    vscode.window.showInformationMessage(
        message,
        "✅ Done",
        "😴 Snooze",
        "❌ Skip"
    ).then(selection => {

        switch (selection) {

            case "✅ Done":

                statistics.complete();

                vscode.window.showInformationMessage(
                    "🎉 Great Job!"
                );

                break;

            case "😴 Snooze":

                statistics.snooze();

                vscode.window.showInformationMessage(
                    "😴 Reminder Snoozed"
                );

                break;

            case "❌ Skip":

                statistics.skip();

                vscode.window.showInformationMessage(
                    "❌ Reminder Skipped"
                );

                break;

        }

        console.log(statistics.getStatistics());

    });

}

module.exports = {
    showReminder
};