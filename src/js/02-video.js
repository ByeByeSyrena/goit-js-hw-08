import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";


const onPlay = function(data) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
};

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedTime = JSON.parse(savedTime);


player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(parsedTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});