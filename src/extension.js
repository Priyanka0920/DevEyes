const vscode = require('vscode');

let reminderInterval = null;

// Change this value while testing
const REMINDER_INTERVAL = 20 * 60 * 10000; // 10 seconds
// const REMINDER_INTERVAL = 20 * 60 * 1000; // 20 minutes

const eyeExercises = [
    {
        title: "👀 20-20-20 Rule",
        message: "Look at something 20 feet away for 20 seconds."
    },
    {
        title: "😉 Blink Exercise",
        message: "Blink your eyes slowly 15 times."
    },
    {
        title: "🙈 Close Your Eyes",
        message: "Close your eyes for 20 seconds."
    },
    {
        title: "🔄 Eye Rotation",
        message: "Rotate your eyes clockwise 5 times and anti-clockwise 5 times."
    },
    {
        title: "🪟 Distance Focus",
        message: "Look outside your window and focus on a distant object."
    },
    {
        title: "😊 Palming Exercise",
        message: "Rub your hands together and gently place them over your closed eyes."
    },
    {
        title: "🧘 Relax",
        message: "Take a deep breath and relax your eye muscles."
    },
    {
        title: "💡 Screen Brightness",
        message: "Reduce your screen brightness if your eyes feel strained."
    },
    {
        title: "🚶 Mini Walk",
        message: "Stand up and walk for one minute."
    }
];

function getRandomExercise() {
    return eyeExercises[Math.floor(Math.random() * eyeExercises.length)];
}

function showReminder() {

    const exercise = getRandomExercise();

    vscode.window.showInformationMessage(
        `${exercise.title}\n\n${exercise.message}`,
        "✅ Done",
        "😴 Snooze 5 min",
        "🛑 Stop Reminder"
    ).then(selection => {

        switch (selection) {

            case "✅ Done":
                vscode.window.showInformationMessage(
                    "👏 Great! Keep taking care of your eyes."
                );
                break;

            case "😴 Snooze 5 min":

                if (reminderInterval) {
                    clearInterval(reminderInterval);
                }

                vscode.window.showInformationMessage(
                    "😴 Reminder Snoozed for 5 minutes."
                );

                setTimeout(() => {
                    reminderInterval = startReminder();
                }, 5 * 60 * 1000);

                break;

            case "🛑 Stop Reminder":

                if (reminderInterval) {
                    clearInterval(reminderInterval);
                    reminderInterval = null;
                }

                vscode.window.showInformationMessage(
                    "🛑 DevEyes Reminder Stopped."
                );

                break;
        }

    });

}

function startReminder() {

    return setInterval(() => {
        showReminder();
    }, REMINDER_INTERVAL);

}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    vscode.window.showInformationMessage(
        "👀 DevEyes Activated!"
    );

    const startCommand = vscode.commands.registerCommand(
        "deveyes.startReminder",
        () => {

            if (reminderInterval) {
                clearInterval(reminderInterval);
            }

            reminderInterval = startReminder();

            vscode.window.showInformationMessage(
                "✅ DevEyes Started!"
            );

        }
    );

    const stopCommand = vscode.commands.registerCommand(
        "deveyes.stopReminder",
        () => {

            if (reminderInterval) {

                clearInterval(reminderInterval);
                reminderInterval = null;

                vscode.window.showInformationMessage(
                    "🛑 DevEyes Stopped."
                );

            } else {

                vscode.window.showInformationMessage(
                    "DevEyes is not running."
                );

            }

        }
    );

    context.subscriptions.push(startCommand);
    context.subscriptions.push(stopCommand);

}

function deactivate() {

    if (reminderInterval) {
        clearInterval(reminderInterval);
    }

}

module.exports = {
    activate,
    deactivate
};