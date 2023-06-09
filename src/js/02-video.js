import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo(document.querySelector('#vimeo-player'));

const saveCurrentTime = () => {
  player.getCurrentTime().then(time => {
    localStorage.setItem('videoplayer-current-time', time);
  });
};

const loadCurrentTime = () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

loadCurrentTime();
