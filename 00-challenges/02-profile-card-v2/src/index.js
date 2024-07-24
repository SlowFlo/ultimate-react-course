import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    name: "JavaScript",
    level: "intermediate",
    color: "yellow",
  },
  {
    name: "Python",
    level: "advanced",
    color: "green",
  },
  {
    name: "TDD",
    level: "intermediate",
    color: "red",
  },
  {
    name: "Japanese",
    level: "intermediate",
    color: "antiquewhite",
  },
  {
    name: "React",
    level: "beginner",
    color: "blue",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Me in Japan" />;
}

function Intro() {
  return (
    <div>
      <h1>Florian Bautry</h1>
      <p>
        Futur full-stack developper with Django and React. Building apps with
        TDD magic from Japan.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          level={skill.level}
          color={skill.color}
          key={skill.name}
        />
      ))}
    </div>
  );
}

function Skill({ name, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
