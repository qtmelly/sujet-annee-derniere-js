function dateToSeconds(days, hours, minutes, seconds) {
  return days * 86400 + hours * 3600 + minutes * 60 + seconds;
}
console.log(dateToSeconds(0, 1, 3, 2));
console.log(dateToSeconds(1, 68, 2, 87));
