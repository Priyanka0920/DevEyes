const vscode = require("vscode");
const statistics = require("../statistics/statisticsManager");
const { getDashboardHtml } = require("./dashboardHtml");

function openDashboard() {

    const panel = vscode.window.createWebviewPanel(
        "deveyesDashboard",
        "👀 DevEyes Dashboard",
        vscode.ViewColumn.One,
        {
            enableScripts: true
        }
    );

    const stats = statistics.getStatistics();

    panel.webview.html = getDashboardHtml(stats);

}

module.exports = {
    openDashboard
};