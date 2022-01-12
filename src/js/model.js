import * as config from './config.js';
import { localeObject } from './config.js';

setInterval(function () {
  const now = new Date();
  const options = {
    second: 'numeric',
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    weekday: 'long',
  };
  document.querySelector('.time-display').textContent = Intl.DateTimeFormat(
    localeObject.locale,
    options
  ).format(now);
}, 1000);

export const users = [config.user1, config.user2];

users.forEach(function (user) {
  user.username = user.name
    .toLowerCase()
    .split(' ')
    .map(word => (config.exceptions.includes(word) ? '' : word))
    .map(init => init[0])
    .join('');

  user.usernameLong = user.name.toLowerCase().split(' ');
  user.usernameLong = [
    user.usernameLong[0],
    user.usernameLong[user.usernameLong.length - 1],
  ].join('.');
});
