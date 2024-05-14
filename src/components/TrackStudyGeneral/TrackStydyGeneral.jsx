import React from "react";
import {
  Container,
  InnerContainer,
  MiddleCircle,
  ProgressSpinner,
} from "./styles";

const TrackStydyGeneral = () => {
  const percentage = 20;

  const angle = (percentage / 100) * 360;

  const gradient = `
    transparent ${angle}deg,
    #fff 0 ${angle}deg
  `;

  return (
    <Container>
      <div className="title">
        <h2>Blocos para o <br/> nível 3</h2>
      </div>
      <InnerContainer>
        <MiddleCircle>
          <h2>{percentage}</h2>
        </MiddleCircle>
        <ProgressSpinner gradient={gradient} />
      </InnerContainer>
      <p>Blocos</p>
    </Container>
  );
};

export default TrackStydyGeneral;
