import { Storage } from "@plasmohq/storage"
import dayjs from "~lib/dayjs"

const TIME_STAMP_TABLE_INDEX = 15
const WORKING_TIME_ROW_INDEX = 8

const isMfAttendancePage = (): boolean => {
  if (
    location.hostname === "attendance.moneyforward.com" &&
    location.pathname === "/my_page/attendances"
  ) {
    return true
  } else {
    return false
  }
}

const getMonth = (): number => {
  const params = new URLSearchParams(location.search)
  if (params.has("month")) {
    return parseInt(params.get("month"))
  } else {
    return dayjs().month() + 1
  }
}

const convertHhmmToMinutes = (hhmm: string): number => {
  if (hhmm === '') {
    return 0
  }

  const [hour, minute] = hhmm.split(':')

  return parseInt(hour) * 60 + parseInt(minute)
}

const getOvertime = (month: number): number => {
  const timeStampTable = Array.prototype.slice.call(document.getElementsByClassName("att-row")).slice(TIME_STAMP_TABLE_INDEX)

  let totalOvertime = 0
  for (const [index, timeStamp] of Object.entries(timeStampTable)) {
    const workingHourString = (timeStamp.children[WORKING_TIME_ROW_INDEX].textContent as string).replace('h', '').replace('\n', '').trim()
    const overtimeByDay = convertHhmmToMinutes(workingHourString) === 0 ? convertHhmmToMinutes(workingHourString) : convertHhmmToMinutes(workingHourString) - (7.5 * 60)
    console.log('day:', parseInt(index) + 1);
    console.log('overtimeByDay:', overtimeByDay);
    totalOvertime += overtimeByDay
  }

  console.log('month:', month);
  console.log('totalOvertime:', totalOvertime);

  return totalOvertime
}

type ReturnType = {
  overtime: number
}

export const MfAttendance = async (): Promise<ReturnType> => {
  if (!isMfAttendancePage()) return

  const storage = new Storage()

  const overtime = getOvertime(getMonth())

  await storage.set("overtime", overtime)
}
