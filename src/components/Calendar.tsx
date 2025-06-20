import React, { useState } from "react";
import "./calendar.css";

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const handleDayClick = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(dateStr);
    setModalVisible(true);
  };

  const renderCalendarDays = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const days = [];

    // Empty slots before the first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty" />);
    }

    for (let d = 1; d <= totalDays; d++) {
      const dayDate = new Date(currentYear, currentMonth, d);
      const isPast = dayDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isToday =
        d === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      let className = "day";
      if (isPast) className += " disabled";
      else className += " clickable";
      if (isToday) className += " today";

      days.push(
        <div
          key={d}
          className={className}
          onClick={!isPast ? () => handleDayClick(d) : undefined}
          aria-disabled={isPast}
        >
          {d}
        </div>
      );
    }
    return days;
  };

  return (
    <>
      <div className="calendar" id="calendar">
        <div className="calendar-header d-flex align-items-center justify-content-between">
          <div className="calendar-btn btn btn-primary month-btn">
            <span>{months[currentMonth]}</span>
          </div>
          <div className="calendar-btn btn btn-primary year-btn">
            <span>{currentYear}</span>
          </div>
        </div>

        <div className="calendar-dates mt-3">
          <div className="days">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
              <div key={day} className="day label">{day}</div>
            ))}
          </div>

          <div id="calendarDays" className="days">
            {renderCalendarDays()}
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      {/* Bootstrap 5 Modal */}
      {modalVisible && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Great to see you're exploring!</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setModalVisible(false)}
                />
              </div>
              <div className="modal-body">
                <p>Our on-line booking system will be coming very soon! </p>
                <p className="text-muted">You chose: <strong>{selectedDate}</strong><br />
                  No worries, please call us at: <strong>123-456-7891</strong>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setModalVisible(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
