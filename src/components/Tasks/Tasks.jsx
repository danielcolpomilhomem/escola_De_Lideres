import React from "react";
import { TasksContainer } from "./styles";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";

const Tasks = () => {
  const data = [
    { id: 1, title: "Tarefa 1", tag: "Em dia" },
    { id: 2, title: "Tarefa 2", tag: "Atrasada" },
    { id: 3, title: "Tarefa 3", tag: "Em dia" },
    { id: 4, title: "Tarefa 4", tag: "Atrasada" },
    { id: 5, title: "Tarefa 5", tag: "Em dia" },
    { id: 6, title: "Tarefa 6", tag: "Em dia" },
  ];

  return (
    <TasksContainer>
      <h2>Tarefas</h2>
      {data.map((task) => (
        <div key={task.id} className="taskContainer">
          <div className="titleTask">
            <h3>{task.title}</h3>
            <button><BsArrowsAngleExpand></BsArrowsAngleExpand></button>
          </div>
          <div className={`tag ${task.tag === "Atrasada" ? "late" : "onTime"}`}>
            <CgSandClock></CgSandClock>
            {task.tag}
          </div>
        </div>
      ))}
    </TasksContainer>
  );
};

export default Tasks;
