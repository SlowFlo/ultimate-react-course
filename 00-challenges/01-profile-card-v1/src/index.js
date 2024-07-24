import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Skill name="JavaScript" emoji="👑" color="yellow" />
      <Skill name="Python" emoji="🐍" color="green" />
      <Skill name="TDD" emoji="💉" color="red" />
      <Skill name="Japanese" emoji="🗾" color="antiquewhite" />
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
