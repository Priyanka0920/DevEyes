const vscode = require("vscode");
const statistics = require("../statistics/statisticsManager");
const { getDashboardHtml } = require("./dashboardHtml");
const streakManager = require("../analytics/streakManager");

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

const streak = streakManager.getStreak();

panel.webview.html = getDashboardHtml(stats, streak);

}

module.exports = {
    openDashboard
};