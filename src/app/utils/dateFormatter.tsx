import dayjs, * as dayJs from "dayjs"

export interface DateFormatter {
  dateTimeWithDay: string
  toDateTimeWithDay: (input: Date) => string
}

const dateTimeWithDay = 'ddd DD MMMM YYYY HH:mm';

export const DateHelper: DateFormatter = {
  dateTimeWithDay,
  toDateTimeWithDay(input) {
    return dayjs(input).format(dateTimeWithDay);
  }
} 