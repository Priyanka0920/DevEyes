const vscode = require("vscode");
const dashboard = require("../../dashboard/dashboardPanel");

function registerOpenDashboard() {

    return vscode.commands.registerCommand(
        "deveyes.openDashboard",
        () => {

            dashboard.openDashboard();

        }
    );

}

module.exports = registerOpenDashboard;