import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return <div className="card">
        <Avatar/>
        <div className="data">
            <Intro/>
            <SkillList/>
        </div>
    </div>
}

function Avatar() {
    return <img className="avatar" src="avatar.jpg" alt="Me in Japan"/>
}

function Intro() {
    return <div>
        <h1>Florian Bautry</h1>
        <p>Futur full-stack developper with Django and React. Building apps with TDD magic from Japan.</p>
    </div>
}

function SkillList() {
    return <div className="skill-list">
        <Skill name="JavaScript" emoji="👑" backgroundColor="yellow"/>
        <Skill name="Python" emoji="🐍" backgroundColor="green"/>
        <Skill name="TDD" emoji="💉" backgroundColor="red"/>
        <Skill name="Japanese" emoji="🗾" backgroundColor="antiquewhite"/>
    </div>
}

function Skill(props) {
    return <span className="skill" style={{backgroundColor: props.backgroundColor}}>{props.name}{props.emoji}</span>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);
