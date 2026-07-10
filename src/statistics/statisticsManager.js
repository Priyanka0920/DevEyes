const storage = require("../storage/storageManager");

const STORAGE_KEY = "deveyes.statistics";

class StatisticsManager {

    constructor() {

        this.statistics = storage.load(STORAGE_KEY, {
            completed: 0,
            snoozed: 0,
            skipped: 0
        });

    }

    save() {
        storage.save(STORAGE_KEY, this.statistics);
    }

    complete() {

        this.statistics.completed++;

        this.save();

    }

    snooze() {

        this.statistics.snoozed++;

        this.save();

    }

    skip() {

        this.statistics.skipped++;

        this.save();

    }

    getStatistics() {

        return this.statistics;

    }

    reset() {

        this.statistics = {
            completed: 0,
            snoozed: 0,
            skipped: 0
        };

        this.save();

    }

}

module.exports = new StatisticsManager();