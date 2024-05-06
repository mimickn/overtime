import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import customParseFormat from "dayjs/plugin/customParseFormat"
import "dayjs/locale/ja"

dayjs.extend(weekday)
dayjs.extend(customParseFormat)
dayjs.locale("ja")

export default dayjs
