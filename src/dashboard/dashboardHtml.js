const { renderPage } = require("../ui/layout");

function getDashboardHtml(stats, streak) {

    const total =
        stats.completed +
        stats.snoozed +
        stats.skipped;

    const percentage =
        total === 0
            ? 0
            : Math.round((stats.completed / total) * 100);

    const goal = 10;
    const goalProgress = Math.min(stats.completed, goal);

    const body = `

<div class="page-header">

    <div class="page-title">

        DevEyes Dashboard

    </div>

    <div class="page-subtitle">

        Stay consistent. Healthy eyes improve productivity.

    </div>

</div>

<div class="summary-grid">

<div class="summary-card">

<div class="summary-label">

Completed

</div>

<div class="summary-number">

${stats.completed}

</div>

</div>

<div class="summary-card">

<div class="summary-label">

Snoozed

</div>

<div class="summary-number">

${stats.snoozed}

</div>

</div>

<div class="summary-card">

<div class="summary-label">

Skipped

</div>

<div class="summary-number">

${stats.skipped}

</div>

</div>

</div>

<div class="card">

<div class="section-title">

Today's Progress

</div>

<div class="progress">

<div
class="progress-fill"
style="width:${percentage}%">

</div>

</div>

<p class="progress-text">

${percentage}% Completed Today

</p>

</div>

<div class="card">

<div class="section-title">

Daily Goal

</div>

<div class="metric">

<span>

Completed Reminders

</span>

<span class="metric-value">

${goalProgress} / ${goal}

</span>

</div>

<div class="progress">

<div
class="progress-fill"
style="width:${(goalProgress/goal)*100}%">

</div>

</div>

</div>

<div class="card">

<div class="section-title">

Streak

</div>

<div class="metric">

<span>

Current Streak

</span>

<span class="metric-value">

${streak.currentStreak} Day${streak.currentStreak===1?"":"s"}

</span>

</div>

<div class="metric">

<span>

Best Streak

</span>

<span class="metric-value">

${streak.bestStreak} Day${streak.bestStreak===1?"":"s"}

</span>

</div>

</div>

<div class="card">

<div class="section-title">

Recent Activity

</div>

<div class="activity-item">

Reminder Completed

</div>

<div class="activity-item">

Reminder Snoozed

</div>

<div class="activity-item">

Reminder Skipped

</div>

</div>

<div class="card">

<div class="section-title">

Eye Care Tip

</div>

<p class="tip-text">

Follow the <b>20-20-20 Rule</b>.

Take a 20-second break every 20 minutes and focus on something approximately 20 feet away.

Small habits can make a big difference over long coding sessions.

</p>

</div>

<div class="footer">

DevEyes v1.0.0

</div>

`;

    return renderPage(
        "DevEyes Dashboard",
        body
    );

}

module.exports = {
    getDashboardHtml
};