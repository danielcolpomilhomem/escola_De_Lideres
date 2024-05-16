import React from "react";
import { MainContainer } from "./styles";

const EventsCalendar = () => {
  const data = [
    {
      day: "11, Abril",
      events: [
        { time: "09:30 - 10:30", name: "Evento 1" },
        { time: "11:00 - 12:00", name: "Evento 2" },
        { time: "14:00 - 15:00", name: "Evento 3" },
      ],
    },
    {
      day: "14, Abril",
      events: [
        { time: "10:00 - 11:00", name: "Evento 4" },
        { time: "13:00 - 14:00", name: "Evento 5" },
        { time: "15:30 - 16:30", name: "Evento 6" },
      ],
    },
    {
      day: "15, Abril",
      events: [
        { time: "08:00 - 09:00", name: "Evento 7" },
        { time: "10:30 - 11:30", name: "Evento 8" },
        { time: "12:00 - 13:00", name: "Evento 9" },
      ],
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
                <span className="hours">{event.time} </span> -{" "}
                <span className="time">{event.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MainContainer>
  );
};

export default EventsCalendar;
