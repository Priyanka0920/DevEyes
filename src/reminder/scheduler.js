let timer = null;

function start(callback, minutes) {

    stop();

    const interval = Number(minutes) || 20;

    timer = setInterval(() => {

        callback();

    }, interval * 60 * 1000);

}

function stop() {

    if (timer) {

        clearInterval(timer);
        timer = null;

    }

}

function isRunning() {

    return timer !== null;

}

function getRemainingStatus() {

    return {

        running: isRunning()

    };

}

module.exports = {

    start,
    stop,
    isRunning,
    getRemainingStatus

};