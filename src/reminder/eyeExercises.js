const exercises = [
    "👀 Look 20 feet away for 20 seconds.",
    "😉 Blink slowly 20 times.",
    "🙈 Close your eyes for 20 seconds.",
    "🔄 Roll your eyes clockwise 10 times.",
    "🔁 Roll your eyes anti-clockwise 10 times.",
    "🌿 Look outside the window for a while.",
    "😊 Relax your shoulders and blink gently.",
    "☕ Take a short screen break.",
    "🧘 Take a deep breath and relax your eyes.",
    "💧 Drink some water and blink naturally."
];

function getRandomExercise() {
    const index = Math.floor(Math.random() * exercises.length);
    return exercises[index];
}

module.exports = {
    getRandomExercise
};