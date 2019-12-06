import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    @import url("https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap");
    font-family: 'Roboto Mono', monospace !important;
    box-sizing: border-box;
  }
`

export const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Calendar = styled.div`
  max-width: 480px;
  width: inherit;
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const CalendarHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  text-transform: uppercase;
  color: #575757;
  border-bottom: 1px solid #e7e7e7;
  padding: 0 10px;
`

export const CalendarWeekdays = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  > span {
    font-size: 13px;
    padding: 2px;
    color: #989898;
    text-transform: uppercase;
    text-align: center;
  }
`

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  div:nth-child(1) {
    grid-column: ${(props) => props.columnStart};
  }
`

export const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 10px 0;
  font-weight: ${(props) => props.bold};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 20px;
    font-size: 13px;
    background: #eeeeee;
    border-radius: 5px;
    cursor: pointer;
  }

  &.--holiday div {
    background: pink;
  }
`
