import React from 'react';
import './App.css';
import Calendar from './calendar';

const App = () => {
  return (
    <div className="App">
      <h2>Itinerary for 7 Days in Indianapolis 🏙</h2>
      <h3>Greetings from Race City, Ken! Take a look at this calendar to explore the city and see all the sights during your stay.</h3>
      <Calendar />
    </div>
  );
};

export default App;
