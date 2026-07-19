const vscode = require("vscode");
const { getRandomExercise } = require("./eyeExercises");

const statistics = require("../statistics/statisticsManager");
const streakManager = require("../analytics/streakManager");
const activityManager = require("../analytics/activityManager");

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

                streakManager.updateStreak();

                activityManager.addActivity(
                    "Completed Reminder"
                );

                vscode.window.showInformationMessage(
                    "🎉 Great Job!"
                );

                break;

            case "😴 Snooze":

                statistics.snooze();

                activityManager.addActivity(
                    "Snoozed Reminder"
                );

                vscode.window.showInformationMessage(
                    "😴 Reminder Snoozed"
                );

                break;

            case "❌ Skip":

                statistics.skip();

                activityManager.addActivity(
                    "Skipped Reminder"
                );

                vscode.window.showInformationMessage(
                    "❌ Reminder Skipped"
                );

                break;

        }

        console.log(
            statistics.getStatistics()
        );

    });

}

module.exports = {
    showReminder
};