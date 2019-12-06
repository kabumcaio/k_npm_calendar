import moment from "moment"

const now = moment()
const year = now.format("YYYY")

const getEaster = (props) => {
  const x = 24
  const y = 5
  const a = year % 19
  const b = year % 4
  const c = year % 7
  const d = (19 * a + x) % 30
  const e = (2 * b + 4 * c + 6 * d + y) % 7

  let easter = ""
  let easterDay = ""
  let easterMonth = ""
  if (d + e > 9) {
    easterDay = `${d + e - 9}`
    easterMonth = "04"
    easter = `${year}-${easterMonth}-${easterDay}`
  } else {
    easterDay = `${d + e + 22}`
    easterMonth = "03"
    easter = `${year}-${easterMonth}-${easterDay}`
  }

  easter = moment(easter)
  return easter
}

const easter = getEaster()
const carnival = moment(easter).subtract(47, "days")
const goodFriday = moment(easter).subtract(2, "days")
const corpusChristi = moment(easter).add(60, "days")

export default [
  "01-01",
  `${carnival.format("MM")}-${carnival.format("DD")}`, // carnival
  `${goodFriday.format("MM")}-${goodFriday.format("DD")}`, // good friday
  `${easter.format("MM")}-${easter.format("DD")}`, // easter
  `${corpusChristi.format("MM")}-${corpusChristi.format("DD")}`, // corpus christi
  "04-21",
  "05-01",
  "06-12",
  "07-09",
  "07-16",
  "09-07",
  "10-12",
  "11-02",
  "11-15",
  "12-24",
  "12-25",
  "12-31"
]
