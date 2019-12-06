import React, { useState, useEffect } from "react"
import moment from "moment/min/moment-with-locales"

import holidays from "./data/holidays"

import * as S from "./styles"

const App = ({ locale }) => {
  const INITIAL_STATE = { month: "", weekdays: [] }
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    moment.locale(locale || "pt-br")

    const now = moment()
    // const now = moment("2019-06-25")
    const weekdays = moment.weekdaysShort()
    const month = now.format("MMMM")
    const monthNumber = now.format("MM")
    const daysInMonth = parseInt(now.daysInMonth())
    const currentDayOfTheMonth = parseInt(now.format("DD"))

    const firstDay = moment(now)
      .startOf("month")
      .format("d")

    setState({ ...state, weekdays, month, firstDay, daysInMonth, currentDayOfTheMonth, monthNumber })
  }, [])

  const { month, weekdays, firstDay, daysInMonth, currentDayOfTheMonth, monthNumber } = state

  return (
    <>
      <S.GlobalStyle />
      <S.App>
        <S.Calendar>
          <S.CalendarHeader>{month}</S.CalendarHeader>
          <S.CalendarWeekdays>
            {weekdays.map((weekday) => (
              <span>{weekday}</span>
            ))}
          </S.CalendarWeekdays>
          <S.CalendarDays columnStart={parseInt(firstDay) + 1}>
            {[...Array(daysInMonth).keys()].map((day) => {
              day = day + 1

              return (
                <S.Day
                  className={holidays.find((d) => d === `${monthNumber}-${day}`) ? "--holiday" : ""}
                  bold={day === currentDayOfTheMonth ? "bold" : "normal"}
                >
                  <div>{day.toString()}</div>
                </S.Day>
              )
            })}
          </S.CalendarDays>
        </S.Calendar>
      </S.App>
    </>
  )
}

export default App
