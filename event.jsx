import React from 'react';

const Event = ({ title, color, location }) => {
  const eventClass = `Event ${color || 'default'}`; 

  return (
    <td className={eventClass}>
      <h5>{title}</h5> {}
      <h6>{location}</h6>
    </td>
  );
};

export default Event;
