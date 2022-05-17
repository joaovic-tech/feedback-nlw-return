// FormattingDate

var currentDate = new Date(),
    hours = currentDate.getHours(),
    minutes = currentDate.getMinutes().toString().padStart(2, '0'),
    day = currentDate.getDay().toString().padStart(2, '0'),
    month = (currentDate.getMonth() + 1).toString().padStart(2, '0'),
    fullYear = currentDate.getFullYear();

export const FormattingDate = {
  date: `${hours}:${minutes} ${day}/${month}/${fullYear}`
}