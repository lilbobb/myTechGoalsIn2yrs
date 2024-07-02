document.addEventListener('DOMContentLoaded', () => {
  const updateTimeAndDay = () => {
      const now = new Date();
      const utcTime = now.toUTCString().slice(-12, -4);
      const day = now.toLocaleDateString('en-US', { weekday: 'long' });

      document.getElementById('currentTimeUTC').textContent = utcTime;
      document.getElementById('currentDay').textContent = day;
  };

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});
