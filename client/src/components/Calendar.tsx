import { useState, useEffect } from "react";
import { useLoading } from "../context/LoadingContext";
import "./calendar.css";

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [bookedDates, setBookedDates] = useState<{ [key: string]: number }>({});
  const { showLoader, hideLoader } = useLoading();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const yearRange = Array.from({ length: 2 }, (_, i) => today.getFullYear() + i);
    useEffect(() => {
      const year = currentYear;
      const month = currentMonth + 1; // JS is 0-based
/**
 * NODE:  fetch(`/api/bookings/month?year=${year}&month=${month}`)
 * PHP see readme link to github for package
 */
      showLoader();
      fetch(`https://crystalhansenartographic.com/api/index-booking.php/booking/month?year=${year}&month=${month}`)
        .then(res => res.json())
        .then(data => setBookedDates(data))
        .catch((err) => console.error('Failed to fetch bookings:', err))
        .finally(hideLoader);
    }, [currentMonth, currentYear]);


  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const handleDayClick = (day: number, month: number, year: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(dateStr);
    setModalVisible(true);
  };


/**
 * Modify the calendar days to switch months with 'full calendar' view of days previous month next month leading for complete calendar rows
 * in addition:
 * Pad the calendar with previous and next month's days so the grid is complete

✅ Disable and gray out any dates before today's month

✅ Style non-current-month dates with a light grey background
* Dates from previous month are non clickable and greyed out. 
*Dates from next month that are greater than today are clickable and styled normal
*
*/   
const renderCalendarDays = () => {
  const days = [];
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const totalDays = daysInMonth(currentMonth, currentYear);
  const startDay = firstDayOfMonth.getDay(); // 0 = Sunday

  // Get date values for previous/next month
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const prevMonthDays = daysInMonth(prevMonth, prevYear);

  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  
  // ➤ PREVIOUS MONTH padding
  for (let i = startDay - 1; i >= 0; i--) {
    const day = prevMonthDays - i;
    const isBeforeThisMonth = currentYear < today.getFullYear() ||
      (currentYear === today.getFullYear() && currentMonth < today.getMonth());

    days.push(
      <div
        key={`prev-${day}`}
        className={`day other-month ${isBeforeThisMonth ? 'disabled' : 'clickable'}`}
        onClick={!isBeforeThisMonth ? () => handleDayClick(day,prevMonth, prevYear) : undefined}
        aria-disabled={isBeforeThisMonth}
      >
        {day}
      </div>
    );
  }

  // ➤ CURRENT MONTH days
  for (let d = 1; d <= totalDays; d++) {
    const date = new Date(currentYear, currentMonth, d);
    const isToday =
      d === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();
    const isPast =
      date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

    const bookingCount = bookedDates[dateStr] || 0;
    let className = "day";
    if (bookingCount >= 4) className += " heavy-booked";     // red
    else if (bookingCount >= 2) className += " medium-booked"; // orange
    else if (bookingCount === 1) className += " light-booked"; // green
    else className += " available";

    if (isPast) className += " disabled";
    else className += " clickable";
    if (isToday) className += " today";

    days.push(
      <div
        key={`current-${d}`}
        className={className}
        onClick={!isPast ? () => handleDayClick(d,currentMonth, currentYear) : undefined}
        aria-disabled={isPast}
      >
        {d}
      </div>
    );
  }

  // ➤ NEXT MONTH padding
  const totalSlots = days.length;
  const nextDaysToFill = totalSlots % 7 === 0 ? 0 : 7 - (totalSlots % 7);

  for (let i = 1; i <= nextDaysToFill; i++) {
    days.push(
      <div
        key={`next-${i}`}
        className="day other-month clickable"
        onClick={() => handleDayClick(i, nextMonth,nextYear)}
      >
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
          {/* Month Selector disable months that are previous for this year */}
          <select
            className="form-select w-auto calendar-btn btn btn-primary month-btn px-5"
            value={currentMonth}
            onChange={(e) => setCurrentMonth(Number(e.target.value))}
          >
            {months.map((month, i) => {
              const isPastMonth =
                currentYear === today.getFullYear() && i < today.getMonth();

              return (
                <option key={month} value={i} disabled={isPastMonth}>
                  {month}
                </option>
              );
            })}
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
      <div className="calendar-legend container mt-5">
        <h6 className="mb-2">Booking Status Legend:</h6>
        <ul className="list-inline">
          <li className="list-inline-item">
            <span className="legend-box  bg-white border pe-2 me-2"></span> Empty / Available
          </li>
          <li className="list-inline-item">
            <span className="legend-box light-booked pe-2 me-2"></span> Lightly Booked
          </li>
          <li className="list-inline-item">
            <span className="legend-box heavy-booked  text-white pe-2 me-2"></span> Heavily Booked
          </li>
          <li className="list-inline-item">
            <span className="legend-box disabled text-white pe-2 me-2"></span> Past Month Day
          </li>
        </ul>
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
