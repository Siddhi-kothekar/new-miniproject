import React, { useState } from 'react';
import Activities from './Activities';

function App() {
  // This is just a static userId for demonstration
  const [userId, setUserId] = useState('67488a2cd0119a44ea23d7a4'); // Replace with a real user ID

  return (
    <div className="App">
      <h1>Activity Tracker</h1>
      <Act userId={userId} />
    </div>
  );
}

export default App;
