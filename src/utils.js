import dayjs from 'dayjs';

export function formatFullData(data) {
  return dayjs(data).format('DD/MM/YY HH:mm');
}

export function formatDayData(data) {
  return dayjs(data).format('DD MMM');
}

export function formatTime(data) {
  return dayjs(data).format('HH:mm');
}

export function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomNumber(multiplier) {
  return (Math.floor(Math.random() * multiplier + 1));
}
