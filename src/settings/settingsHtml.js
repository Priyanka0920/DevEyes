const { renderPage } = require("../ui/layout");
const { getSettingsScript } = require("./settingsScript");

function intervalButton(value, current) {

    return `
        <button
            class="chip ${current == value ? "active" : ""}"
            data-value="${value}">
            ${value} min
        </button>
    `;

}

function getSettingsHtml(settings) {

    const body = `

<div class="page-header">

    <div class="page-title">
        DevEyes Settings
    </div>

    <div class="page-subtitle">
        Configure reminder behaviour and manage your data.
    </div>

</div>

<div class="card">

    <div class="section-title">
        Reminder Interval
    </div>

    <div class="chip-group">

        ${intervalButton(5,settings.reminderInterval)}
        ${intervalButton(10,settings.reminderInterval)}
        ${intervalButton(20,settings.reminderInterval)}
        ${intervalButton(30,settings.reminderInterval)}
        ${intervalButton(45,settings.reminderInterval)}
        ${intervalButton(60,settings.reminderInterval)}

    </div>

</div>

<div class="card">

    <div class="section-title">
        Data Management
    </div>

    <div class="setting-row">

        <div>

            <div class="setting-title">
                Reset Statistics
            </div>

            <div class="setting-description">
                Clear completed, snoozed and skipped reminders.
            </div>

        </div>

        <button
            id="resetStatsBtn"
            class="secondary-small">

            Reset

        </button>

    </div>

    <div class="setting-row">

        <div>

            <div class="setting-title">
                Reset Streak
            </div>

            <div class="setting-description">
                Reset current and best streak.

            </div>

        </div>

        <button
            id="resetStreakBtn"
            class="secondary-small">

            Reset

        </button>

    </div>

    <div class="setting-row">

        <div>

            <div class="setting-title">
                Delete All Data
            </div>

            <div class="setting-description">
                Remove all DevEyes progress.

            </div>

        </div>

        <button
            id="resetAllBtn"
            class="danger-small">

            Delete

        </button>

    </div>

</div>

<button
    id="saveBtn"
    class="primary-btn">

    Save Changes

</button>

<div class="footer">

    DevEyes v1.0

</div>

`;

    return renderPage(
        "DevEyes Settings",
        body,
        getSettingsScript()
    );

}

module.exports = {
    getSettingsHtml
};