export function gmtToday() {
  let today = new Date();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday'];
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let day = days[today.getUTCDay()];
  let date = today.getUTCDate();
  let month = months[today.getUTCMonth()];
  let year = today.getUTCFullYear();

  return { day, date, month, year };
}
