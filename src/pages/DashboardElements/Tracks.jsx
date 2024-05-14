import React from "react";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import MainInfoTrack from "../../components/MainInfoTrack/MainInfoTrack";
import TrackStydyGeneral from "../../components/TrackStudyGeneral/TrackStydyGeneral";
import { AiOutlineDownload } from "react-icons/ai";

import Screen from "./styles";
const Tracks = () => {
  return (
    <Screen>
      <AsideMenu />

      <div className="content-side-tracks">
        <div className="title-container">
          <h2>Trilha 1</h2>
          <p>Instrutor</p>
        </div>
        <MainInfoTrack />

        <div className="bottom-div">
          <div className="bottom-div-left">
            <div className="ativity-projects">
              <h3 className="title">Atividades e projetos</h3>

              <div className="ativity-container">
                <div className="actvity">Atividade 1</div>
                <div className="actvity">Atividade 1</div>
                <div className="actvity">Atividade 1</div>
                <div className="actvity">Atividade 1</div>
              </div>
            </div>

            <TrackStydyGeneral />
          </div>

          <div className="bottom-div-right">
            <div className="suport-material">
              <h3 className="title">Materiais de Apoio</h3>

              <div className="suport-container">
                <div className="suport">
                  <AiOutlineDownload></AiOutlineDownload>Material 1
                </div>
                <div className="suport">
                  <AiOutlineDownload></AiOutlineDownload>Material 1
                </div>
                <div className="suport">
                  <AiOutlineDownload></AiOutlineDownload>Material 1
                </div>
                <div className="suport">
                  <AiOutlineDownload></AiOutlineDownload>Material 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default Tracks;
