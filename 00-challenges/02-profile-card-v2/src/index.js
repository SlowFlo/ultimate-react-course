import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Python",
    level: "advanced",
    color: "green",
  },
  {
    skill: "TDD",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "Japanese",
    level: "intermediate",
    color: "antiquewhite",
  },
  {
    skill: "React",
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
          name={skill.skill}
          emoji={
            skill.level === "advanced"
              ? "💪"
              : skill.level === "intermediate"
                ? "👍"
                : "👶"
          }
          color={skill.color}
          index={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
