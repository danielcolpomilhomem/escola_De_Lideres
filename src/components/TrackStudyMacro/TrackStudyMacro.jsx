import React from "react";
import { MainContainer, StudyComponent } from "./styles"; // Certifique-se de que o caminho esteja correto

const TrackStudyMacro = () => {
  const data = [
    { trilha: "Trilha 1", progress: 40, instructor: "João", blocks: 10 },
    { trilha: "Trilha 2", progress: 12, instructor: "Maria", blocks: 20 },
    { trilha: "Trilha 3", progress: 90, instructor: "Pedro", blocks: 30 },
  ];

  return (
    <MainContainer>
      {data.map((item, index) => (
        <StudyComponent key={index} progress={item.progress}>
          <div>
            <h3>Trilha {index + 1}</h3>
            <p>Instrutor</p>
          </div>
          <div className="progress-bar">
            <div className="progress-indicator" />
          </div>
          <div>
            <h2>{item.progress}%</h2>
            <p>{Math.floor(Math.random() * 50)} de 50 blocos</p>
          </div>
        </StudyComponent>
      ))}
    </MainContainer>
  );
};

export default TrackStudyMacro;
