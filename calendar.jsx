import React from 'react';
import Event from './event';

const eventData = {
    "Sunday": [
      { time: '9 am', title: 'Morning Yoga 🧘', color: 'silver', location: '801 W Washington St, Indianapolis' },
      { time: '12 pm', title: 'Lunch at The Eagle 🍔', color: 'blue', location: '310 Massachusetts Ave, Indianapolis' },
    ],
    "Monday": [
      { time: '10 am', title: 'Coffee Break ☕', color: 'blue', location: '335 W 9th St, Indianapolis' },
      { time: '1 pm', title: 'Eiteljorg Museum 🖼️', color: 'purple', location: '500 W Washington St, Indianapolis' },
      { time: '5 pm', title: 'Evening Stroll 🌇', color: 'silver', location: 'Indianapolis Canal Walk' },
    ],
    "Tuesday": [
      { time: '8 am', title: 'Monument Circle Run 🏃‍♂️', color: 'silver', location: '1 Monument Cir, Indianapolis' },
      { time: '1 pm', title: 'Lunch at Milktooth 🥞', color: 'blue', location: '534 Virginia Ave, Indianapolis' },
    ],
    "Wednesday": [
      { time: '2 pm', title: 'IMAX Movies 🍿', color: 'silver', location: '650 W Washington St, Indianapolis' },
      { time: '5 pm', title: 'Dinner at Bluebeard 🍽️', color: 'blue', location: '653 Virginia Ave, Indianapolis' },
    ],
    "Thursday": [
      { time: '12 pm', title: 'Indiana State Capitol Tour 🏛️', color: 'purple', location: '200 W Washington St #220, Indianapolis' },
    ],
    "Friday": [
      { time: '9 am', title: 'Cultural Trail Bike Ride 🚴', color: 'silver', location: 'Indianapolis Cultural Trail' },
      { time: '1 pm', title: 'Bazbeaux Pizza 🍕', color: 'blue', location: '333 Massachusetts Ave, Indianapolis' },
    ],
    "Saturday": [
      { time: '10 am', title: 'City Market Farmers Market 🌽', color: 'green', location: '222 E Market St, Indianapolis' },
      { time: '3 pm', title: 'Coffee at Calvin Fletcher\'s ☕', color: 'blue', location: '647 Virginia Ave, Indianapolis' },
      { time: '5 pm', title: 'The Jazz Kitchen Live 🎷', color: 'purple', location: '5377 N College Ave, Indianapolis' },
    ],
  };
  

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const times = ['8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map(time => (
            <tr key={time}>
              <td className="time">{time}</td>
              {daysOfWeek.map(day => {
                const event = eventData[day]?.find(event => event.time === time);
                return (
                  <td key={day}>
                    {event ? <Event {...event} /> : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
