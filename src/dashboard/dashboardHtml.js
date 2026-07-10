const { getDashboardStyles } = require("./dashboardStyles");
const { getDashboardScript } = require("./dashboardScript");

function getDashboardHtml(stats){

    const total =
        stats.completed +
        stats.snoozed +
        stats.skipped;

    const percentage =
        total===0
        ?0
        :Math.round((stats.completed/total)*100);

    return`

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>DevEyes</title>

<style>

${getDashboardStyles()}

</style>

</head>

<body>

<div class="container">

<div class="header">

<h1>👀 DevEyes</h1>

<p>Smart Eye Care for Developers</p>

</div>

<div class="cards">

<div class="card">

<h2>👀 Completed</h2>

<div class="number">

${stats.completed}

</div>

</div>

<div class="card">

<h2>😴 Snoozed</h2>

<div class="number">

${stats.snoozed}

</div>

</div>

<div class="card">

<h2>❌ Skipped</h2>

<div class="number">

${stats.skipped}

</div>

</div>

</div>

<div class="section">

<h2>📊 Today's Progress</h2>

<div class="progress">

<div
class="progress-bar"
style="width:${percentage}%">
</div>

</div>

<p class="percentage">

${percentage}% Completed

</p>

</div>

<div class="section">

<div class="streak">

<h2>🔥 Current Streak</h2>

<h1>0 Days</h1>

</div>

</div>

<div class="section">

<div class="tip">

<h2>💡 Eye Care Tip</h2>

<p>

Remember the 20-20-20 Rule:
Every 20 minutes,
look 20 feet away
for 20 seconds.

</p>

</div>

</div>

<div class="footer">

DevEyes © 2026

</div>

</div>

<script>

${getDashboardScript()}

</script>

</body>

</html>

`;

}

module.exports={
    getDashboardHtml
};