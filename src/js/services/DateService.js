class DateService {
  static format(date) {
    date = new Date(date);

    return date.getMonth() +
          '/' + date.getDate() +
          '/' + date.getFullYear();
  }
}

export default DateService;
