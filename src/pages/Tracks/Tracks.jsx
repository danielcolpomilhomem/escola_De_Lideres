import React, { useState } from "react";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import MainInfoTrack from "../../components/MainInfoTrack/MainInfoTrack";
import TrackStydyGeneral from "../../components/TrackStudyGeneral/TrackStydyGeneral";
import { AiOutlineDownload } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import Screen from "./styles";

const Tracks = () => {
  const [expandedActivities, setExpandedActivities] = useState([]);

  const data = {
    title: "Trilha 1",
    instructor: "Instrutor",
    activities: [
      { name: "Atividade 1", completed: false },
      { name: "Atividade 2", completed: true },
      { name: "Atividade 3", completed: false },
      { name: "Atividade 4", completed: false },
    ],
    supportMaterials: ["Material 1", "Material 2", "Material 3", "Material 4"],
  };

  const toggleActivity = (index) => {
    if (expandedActivities.includes(index)) {
      setExpandedActivities(
        expandedActivities.filter((item) => item !== index)
      );
    } else {
      setExpandedActivities([...expandedActivities, index]);
    }
  };

  return (
    <Screen>
      <AsideMenu />

      <div className="content-side-tracks">
        <div className="title-container">
          <h2>{data.title}</h2>
          <p>{data.instructor}</p>
        </div>
        <MainInfoTrack />

        <div className="bottom-div">
          <div className="bottom-div-left">
            <div className="ativity-projects">
              <h3 className="title">Atividades e projetos</h3>

              <div className="ativity-container">
                {data.activities.map((activity, index) => (
                  <div className="main-container" key={index}>
                    <div className="actvity">
                      {activity.name}
                      <button
                        onClick={() => toggleActivity(index)}
                        className={
                          expandedActivities.includes(index) ? "expanded" : ""
                        }
                      >
                        <MdKeyboardArrowDown
                          className={
                            expandedActivities.includes(index) ? "rotated" : ""
                          }
                        />
                      </button>
                    </div>
                    {expandedActivities.includes(index) && (
                      <span className="text-span">
                        {activity.completed
                          ? "Atividades entregue."
                          : "Atividade não entregue."}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <TrackStydyGeneral />
          </div>

          <div className="bottom-div-right">
            <div className="suport-material">
              <h3 className="title">Materiais de Apoio</h3>

              <div className="suport-container">
                {data.supportMaterials.map((material, index) => (
                  <div className="suport" key={index}>
                    <AiOutlineDownload /> {material}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default Tracks;
