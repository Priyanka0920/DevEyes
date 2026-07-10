let timer = null;

function start(callback, minutes = 20) {

    stop();

    timer = setInterval(() => {
        callback();
    }, minutes * 60 * 1000);

}

function stop() {

    if (timer) {
        clearInterval(timer);
        timer = null;
    }

}

module.exports = {
    start,
    stop
};