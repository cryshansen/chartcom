import { useState } from "react";
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
  
  const yearRange = Array.from({ length: 2 }, (_, i) => today.getFullYear() + i);


  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const handleDayClick = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(dateStr);
    setModalVisible(true);
  };
/**
 * Modify the calendar days to switch months with 'full calendar' view of days previous month next month leading for complete calendar rows
*/   
const renderCalendarDays = () => {
  const days = [];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startDay = firstDayOfMonth.getDay(); // Sunday = 0
  const totalDays = daysInMonth(currentMonth, currentYear);

  // Previous month
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const daysInPrevMonth = daysInMonth(prevMonth, prevYear);

  // Add previous month's trailing days
  for (let i = startDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    days.push(
      <div key={`prev-${day}`} className="day other-month">
        {day}
      </div>
    );
  }

  // Add current month's days
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
        key={`current-${d}`}
        className={className}
        onClick={!isPast ? () => handleDayClick(d) : undefined}
        aria-disabled={isPast}
      >
        {d}
      </div>
    );
  }

  // Add next month's leading days to complete the grid
  const totalSlots = days.length;
  const nextDaysToFill = totalSlots % 7 === 0 ? 0 : 7 - (totalSlots % 7);

  for (let i = 1; i <= nextDaysToFill; i++) {
    days.push(
      <div key={`next-${i}`} className="day other-month">
        {i}
      </div>
    );
  }

  return days;
};
  


  /** handle the existing contactModal to send a form request instead of a phone call. */
const openBootstrapModal = (modalId: string) => {
  const modalEl = document.getElementById(modalId);
  if (modalEl) {
    const modal = new (window as any).bootstrap.Modal(modalEl);
    modal.show();
  } else {
    console.error("Modal not found:", modalId);
  }
};
  return (
    <>
      <div className="calendar" id="calendar">
        <div className="calendar-header d-flex align-items-center justify-content-between">
          {/* Month Selector */}
          <select
            className="form-select w-auto calendar-btn btn btn-primary month-btn px-5"
            value={currentMonth}
            onChange={(e) => setCurrentMonth(Number(e.target.value))}
          >
            {months.map((month, i) => (
              <option key={month} value={i}>{month}</option>
            ))}
          </select>

          {/* Year Selector */}
          <select
            className="form-select w-auto calendar-btn btn btn-primary year-btn px-5"
            value={currentYear}
            onChange={(e) => setCurrentYear(Number(e.target.value))}
          >
            {yearRange.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
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
                <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#contactModal"
                      onClick={() => {
                        // Close the current alert/modal manually (if needed)
                        setModalVisible(false);

                        // Open the real contact modal
                        openBootstrapModal("contactModal");
                      }}
                     >
                      Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
