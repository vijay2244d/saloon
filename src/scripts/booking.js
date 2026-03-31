function initializeBookingForm() {
  if (typeof VanillaCalendar === 'undefined') {
    console.error('FATAL: Vanilla Calendar library did not load correctly.');
    return;
  }

  const dateDisplay = document.getElementById('date-display');
  const timeDisplay = document.getElementById('time-display');
  const hiddenDate = document.getElementById('selected-date');
  const hiddenTime = document.getElementById('selected-time');
  const dateModal = document.getElementById('date-modal');
  const timeModal = document.getElementById('time-modal');
  const timeSlotsContainer = document.getElementById('time-slots-container');

  // --- DATE PICKER LOGIC ---
  const calendar = new VanillaCalendar('#calendar-container', {
    actions: {
      clickDay(event, self) {
        const selectedDate = self.selectedDates[0];
        if (selectedDate) {
          const date = new Date(selectedDate);
          dateDisplay.value = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
          hiddenDate.value = selectedDate;
          closeModal(dateModal);
          setTimeout(() => openModal(timeModal), 100);
        }
      },
    },
    settings: {
      range: { disablePast: true },
      selection: { day: 'single' },
    }
  });
  calendar.init();

  dateDisplay.addEventListener('click', () => openModal(dateModal));

  // --- TIME PICKER LOGIC ---
  const availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  timeSlotsContainer.innerHTML = availableTimes.map(time =>
    `<button type="button" class="time-slot text-center p-3 rounded-lg border cursor-pointer hover:bg-fiery-terracotta hover:text-white hover:shadow-md transition">${time}</button>`
  ).join('');

  timeSlotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-slot')) {
      const selectedTime = e.target.textContent;
      timeDisplay.value = selectedTime;
      hiddenTime.value = selectedTime;
      closeModal(timeModal);
    }
  });

  timeDisplay.addEventListener('click', () => openModal(timeModal));

  // --- MODAL ACCESSIBILITY --- 
  let lastFocusedElement;

  function openModal(modal) {
    lastFocusedElement = document.activeElement;
    modal.classList.remove('hidden');
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if(focusableElements.length > 0) {
      focusableElements[0].focus();
    }
    document.addEventListener('keydown', trapFocus);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  }

  function closeModal(modal) {
    modal.classList.add('hidden');
    if(lastFocusedElement) {
      lastFocusedElement.focus();
    }
    document.removeEventListener('keydown', trapFocus);
  }

  function trapFocus(e) {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('[role="dialog"]:not(.hidden)');
      if(openModal) {
        closeModal(openModal);
      }
    }
    if (e.key === 'Tab') {
      const openModal = document.querySelector('[role="dialog"]:not(.hidden)');
      if(openModal) {
        const focusableElements = openModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  }
}

initializeBookingForm();
