const storage = require("../storage/storageManager");

const SETTINGS_KEY = "deveyes.settings";

class SettingsManager {

    constructor() {

        this.settings = storage.load(SETTINGS_KEY, {
            reminderInterval: 20,
            motivationalTips: true,
            streakTracking: true
        });

    }

    getReminderInterval() {
        return this.settings.reminderInterval;
    }

    setReminderInterval(minutes) {

        this.settings.reminderInterval = Number(minutes);

        storage.save(SETTINGS_KEY, this.settings);

    }

    getSettings() {
        return this.settings;
    }

    saveSettings(settings) {

        this.settings = settings;

        storage.save(SETTINGS_KEY, settings);

    }

}

module.exports = new SettingsManager();