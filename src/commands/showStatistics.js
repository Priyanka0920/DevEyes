const vscode = require("vscode");
const statistics = require("../statistics/statisticsManager");

function registerShowStatistics() {

    return vscode.commands.registerCommand(
        "deveyes.showStatistics",
        () => {

            const stats = statistics.getStatistics();

            vscode.window.showInformationMessage(

                `👀 Completed : ${stats.completed}
😴 Snoozed : ${stats.snoozed}
❌ Skipped : ${stats.skipped}`

            );

        }

    );

}

module.exports = registerShowStatistics;