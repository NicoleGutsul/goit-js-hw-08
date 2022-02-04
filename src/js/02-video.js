import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', throttle(function () {
    player.getCurrentTime().then(function (seconds) {
        console.log(seconds);
        localStorage.setItem('videoplayer-current-time', `${seconds}`)
    }).catch(function (error) {
        console.log(error);
    });
}, 1000));

let timeItem = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(timeItem).then(function (seconds) { }).catch(function (error) { });
