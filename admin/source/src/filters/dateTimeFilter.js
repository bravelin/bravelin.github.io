import { formatTime } from '../utils/helper'
export default function (date, format = 'yyyy-MM-dd hh:mm:ss') {
    return formatTime(new Date(date), format)
}
