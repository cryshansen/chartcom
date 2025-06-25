const fs = require('fs');
const path = require('path');

const dataPath = path.join('', 'data', 'bookings.json');

const purposes = ['Portrait', 'Workshop', 'Rehearsal', 'Product Shoot', 'Music Video'];
const names = ['Jay', 'Sophie', 'Elena', 'Noah', 'Marcus', 'Ava', 'Liam', 'Zoe'];

function generateTimeBlocks(startHour = 9, endHour = 19) {
  const blocks = [];
  for (let hour = startHour; hour < endHour; hour++) {
    blocks.push(`${String(hour).padStart(2, '0')}:00`);
  }
  return blocks;
}

function createBookingsForDate(dateStr) {
  const bookings = [];
  const usedTimes = new Set();

  const total = Math.floor(Math.random() * 5) + 1;
  const timeBlocks = generateTimeBlocks();

  for (let i = 0; i < total; i++) {
    const startIndex = Math.floor(Math.random() * (timeBlocks.length - 2));
    const start = timeBlocks[startIndex];
    const end = timeBlocks[startIndex + 1];

    const key = `${start}-${end}`;
    if (usedTimes.has(key)) continue;

    usedTimes.add(key);
    bookings.push({
      name: names[Math.floor(Math.random() * names.length)],
      purpose: purposes[Math.floor(Math.random() * purposes.length)],
      start,
      end,
      studio_id: Math.ceil(Math.random() * 3)
    });
  }

  return bookings;
}

function updateBookings() {
  let existing = {};
  if (fs.existsSync(dataPath)) {
    try {
      const raw = fs.readFileSync(dataPath, 'utf8');
      existing = JSON.parse(raw);
    } catch (err) {
      console.error('Failed to parse existing booking data:', err);
    }
  }

  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];

  if (!existing[dateStr]) {
    existing[dateStr] = createBookingsForDate(dateStr);
    fs.writeFileSync(dataPath, JSON.stringify(existing, null, 2));
    console.log(`✅ Fake bookings created for ${dateStr}`);
  } else {
    console.log(`⚠️ Bookings already exist for ${dateStr}`);
  }
}
function updateInitialBookings(){
  let existing = {};
  if (fs.existsSync(dataPath)) {
    try {
      const raw = fs.readFileSync(dataPath, 'utf8');
      existing = JSON.parse(raw);
    } catch (err) {
      console.error('Failed to parse existing booking data:', err);
    }
  }
  const startDate = new Date(); // today
    const endDate = new Date('2025-07-31'); // end of July

    const current = new Date(startDate);
    while (current <= endDate) {
      const dateStr = current.toISOString().split('T')[0];
      if (!existing[dateStr]) {
        existing[dateStr] = createBookingsForDate(dateStr);
        console.log(`✅ Created bookings for ${dateStr}`);
      } else {
        console.log(`⚠️ Bookings already exist for ${dateStr}`);
      }
      current.setDate(current.getDate() + 1); // next day
    }

    fs.writeFileSync(dataPath, JSON.stringify(existing, null, 2));
    console.log('📁 Booking data updated through end of July');

}

//on initiation, comment this and run the updateInitialBookings first to build a little month of fake studio rentals. flip back after the initial run and the cron will run daily again
module.exports = updateBookings;
//uncomment on initiation of the calendar inclusion in your local site.
//module.exports = updateInitialBookings;