import React from "react";
import { MainContainer } from "./styles";

const EventsCalendar = () => {
  const data = [
    {
      day: "11, Abril",
      events: ["Evento 1", "Evento 2", "Evento 3"],
    },
    {
      day: "14, Abril",
      events: ["Evento 4", "Evento 5", "Evento 6"],
    },
    {
      day: "15, Abril",
      events: ["Evento 7", "Evento 8", "Evento 9"],
    },
  ];

  return (
    <MainContainer>
      <div className="title-container">
        <h2>Eventos</h2>
        <button>Novo evento</button>
      </div>
      
      {data.map((item, index) => (
        <div className="days-container" key={index}>
          <h3>{item.day}</h3>
          <div className="hours-container">
            {item.events.map((event, eventIndex) => (
              <div className="event" key={eventIndex}>
                {event}
              </div>
            ))}
          </div>
        </div>
      ))}
    </MainContainer>
  );
};

export default EventsCalendar;

