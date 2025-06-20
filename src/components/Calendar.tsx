import React, { useState } from "react";
import "./calendar.css"; // Optional if you have styles

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const years = Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i);

export default function Calendar() {
  // State for current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // We won't implement dropdown toggle because you requested no JS outside React
  // So dropdowns will always be visible, or you can remove them if you want.

  // Calculate days in month and first day
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create blank days for padding before first day of month
  const blanks = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    blanks.push(<div key={`blank-${i}`} className="day empty" />);
  }



  const today = new Date();
  // Create days of the month
  const days = [];
  for (let d = 1; d <= daysInMonth; d++) {
      const isToday =
    d === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  let className = "day";
  if (isToday) className += " today";

    days.push(
      <div key={d} className={className}>
        {d}
      </div>
    );
  }

  return (
    <>
    

      <div className="calendar" id="calendar">
        <div
          className="calendar-btn btn-primary month-btn"
          // You can add onClick here later for toggling dropdown
        >
          <span id="curMonth">{months[currentMonth]}</span>
          <div id="months" className="months dropdown">
            {months.map((m, i) => (
              <div
                key={m}
                onClick={() => setCurrentMonth(i)}
                style={{ padding: "2px 5px", cursor: "pointer" }}
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        <i className="fa fa-calendar fa-3x mr-3 turquois" aria-hidden="true" />

        <div
          className="calendar-btn btn-primary year-btn"
          // You can add onClick here later for toggling dropdown
        >
          <span id="curYear">{currentYear}</span>
          <div id="years" className="years dropdown">
            {years.map((y) => (
              <div
                key={y}
                onClick={() => setCurrentYear(y)}
                style={{ padding: "2px 5px", cursor: "pointer" }}
              >
                {y}
              </div>
            ))}
          </div>
        </div>

        <div className="clear"></div>

        <div className="calendar-dates">
          <div className="days">
            {daysOfWeek.map((day) => (
              <div key={day} className="day label">
                {day}
              </div>
            ))}

            <div className="clear"></div>
          </div>

          <div id="calendarDays" className="days">
            {blanks}
            {days}
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div id="container">
        <div id="alertbox2" className="d-none">
          <p id="msg">
            Great to see you're exploring! Our booking system will be coming very soon! Are you
            interested in booking on bookdate? Give me a call for now at: 819-213-5681
          </p>
          <input
            id="btnClose2"
            type="button"
            value="OK"
            onClick={() => {
              const alertBox = document.getElementById("alertbox2");
              if (alertBox) alertBox.classList.add("hide");
            }}
          />
        </div>
      </div>
    </>
  );
}
