import React from "react";
import Screen from "./styles";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import TrackStudyMacro from "../../components/TrackStudyMacro/TrackStudyMacro";
import TrackStudyGeneral from '../../components/TrackStudyGeneral/TrackStydyGeneral'
import EventsCalendar from "../../components/EventsCalendar/EventsCalendar";

const Dashboard = () => {
  return (
    <Screen>
      <AsideMenu />
      <div className="content-side">
        <TrackStudyMacro />
              <TrackStudyGeneral />
              <EventsCalendar/>
      </div>
    </Screen>
  );
};

export default Dashboard;
