import React from 'react';

const Calendar = ({ selectedDate, onDateChange, moods, onMoodSelect }) => {
  const emojiOptions = ['😊', '😔', '😡', '😢', '😂', '😐'];

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    onDateChange(newDate);
  };

  const handleEmojiSelect = (emoji) => {
    onMoodSelect(selectedDate, emoji);
  };

  return (
    <div className="calendar-container">
      <h2>Select a Date</h2>
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={handleDateChange}
        className="calendar-input"
      />
      <h2>Select a Mood</h2>
      <div className="emoji-selection">
        {emojiOptions.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleEmojiSelect(emoji)}
            className="emoji-button"
          >
            {emoji}
          </button>
        ))}
      </div>
      <div>
        <h3>Mood for {selectedDate.toDateString()}:</h3>
        <p>{moods[selectedDate.toDateString()] || 'No mood selected yet.'}</p>
      </div>
    </div>
  );
};

export default Calendar;
