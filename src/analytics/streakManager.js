const storage = require("../storage/storageManager");

const STREAK_KEY = "deveyes.streak";

class StreakManager {

    constructor() {

        this.data = storage.load(STREAK_KEY, {
            currentStreak: 0,
            bestStreak: 0,
            lastCompletedDate: null
        });

    }

    save() {
        storage.save(STREAK_KEY, this.data);
    }

    updateStreak() {

        const today = new Date().toDateString();

        // Already completed today
        if (this.data.lastCompletedDate === today) {
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (this.data.lastCompletedDate === yesterday.toDateString()) {

            this.data.currentStreak++;

        } else {

            this.data.currentStreak = 1;

        }

        this.data.lastCompletedDate = today;

        if (this.data.currentStreak > this.data.bestStreak) {

            this.data.bestStreak = this.data.currentStreak;

        }

        this.save();

    }

    getStreak() {
        return this.data;
    }

    reset() {

        this.data = {
            currentStreak: 0,
            bestStreak: 0,
            lastCompletedDate: null
        };

        this.save();

    }

}

module.exports = new StreakManager();