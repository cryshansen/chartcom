import { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import "./calendar.css"; // Optional if you have styles

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const years = Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i);

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [showMonths, setShowMonths] = useState(false);
  const [showYears, setShowYears] = useState(false);

  const toggleMonths = () => setShowMonths(!showMonths);
  const toggleYears = () => setShowYears(!showYears);

  const handleMonthSelect = (index: number) => {
    setCurrentMonth(index);
    setShowMonths(false);
  };

  const handleYearSelect = (year: number) => {
    setCurrentYear(year);
    setShowYears(false);
  };

  const renderCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty" />);
    }

    for (let d = 1; d <= totalDays; d++) {
      days.push(<div key={d} className="day">{d}</div>);
    }

    return days;
  };

  return (
    <div className="calendar" id="calendar">
      <div className="calendar-header d-flex align-items-center justify-content-between">
        <div className="calendar-btn btn btn-primary month-btn" onClick={toggleMonths}>
          <span>{months[currentMonth]}</span>
          {showMonths && (
            <div className="months dropdown">
              {months.map((month, index) => (
                <div key={month} onClick={() => handleMonthSelect(index)}>
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>

        <FaCalendar className="fa-3x turquois mx-3" />

        <div className="calendar-btn btn btn-primary year-btn" onClick={toggleYears}>
          <span>{currentYear}</span>
          {showYears && (
            <div className="years dropdown">
              {years.map((year) => (
                <div key={year} onClick={() => handleYearSelect(year)}>
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="calendar-dates mt-3">
        <div className="days">
          {["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"].map((day) => (
            <div key={day} className="day label">{day}</div>
          ))}
        </div>

        <div id="calendarDays" className="days">
          {renderCalendarDays()}
        </div>
      </div>

      {/* Optional Modal / Alert box */}
      <div id="container">
        <div id="alertbox2" className="alertbox hide">
          <p id="msg">
            Great to see you're exploring! Our booking system will be coming very soon!<br />
            Call for now at: <strong>819-213-5681</strong>
          </p>
          <input id="btnClose2" type="button" value="OK" onClick={() => {
            document.getElementById("alertbox2")?.classList.add("hide");
          }} />
        </div>
      </div>
    </div>
  );
}
