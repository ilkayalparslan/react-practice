import { startOfMonth, endOfMonth, addMonths, getDay, format } from 'date-fns';

export function getWeekDayMondayFirst(date) {
  const day = getDay(date);
  return (day + 6) % 7;
}

export function getMonthData(monthDate) {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);

  const firstDayOffset = getWeekDayMondayFirst(monthStart);
  const daysInMonth = monthEnd.getDate();

  const days = [];
  for (let i = 0; i < daysInMonth; i++) {
    const day = new Date(monthStart);
    day.setDate(i + 1);
    days.push(day);
  }

  return {
    monthLabel: format(monthStart, 'MMMM yyyy'),
    year: monthStart.getFullYear(),
    month: monthStart.getMonth(),
    firstDayOffset,
    daysInMonth,
    days,
  };
}

export function getMonthsList(count) {
  const today = startOfMonth(new Date());
  const months = [];
  for (let i = 0; i < count; i++) {
    months.push(addMonths(today, i));
  }
  return months;
}
