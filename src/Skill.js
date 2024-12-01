import React from 'react'
import cplusplus from './../assets/cplusplus.png';
import html from './../assets/html.png';
import css3 from './../assets/css3.png';
import js from './../assets/js.png';
import react from './../assets/react.png';
import java from './../assets/java.png';
import mysql from './../assets/mysql.png';
import sql from './../assets/sql.png';
import git from './../assets/git.png';


const skills = [
    { name: "c++", img: cplusplus,},
    { name: "HTML 5", img: html },
    { name: "CSS3", img: css3 },
    { name: "JavaScript", img: js },
    { name: "ResctJS", img: react },
    { name: "Java", img: java },
    { name: "SQL", img: sql },
    { name: "MySQL", img: mysql },
    { name: "Git", img: git },
];

const Skill = () => {
  return (
    <section id="skills" className="skills-section">
        <h2>Skils and Technologies</h2>
        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
            {skills.map((skill, index) => {
                return <div className='skill'>
                    <img src={skill.img} style={{width: '44px'}}/>
                    <div>{skill.name}</div>
                </div>
            })}
        </div>
    </section>
  )
}

export default Skill