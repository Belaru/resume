import './Skills.css';
import './fonts.css';
import React from 'react';
import Python from '../icons/python.png';
import CSharp from '../icons/c-sharp.png';
import HTML5 from '../icons/html5.png';
import CSS3 from '../icons/css3.png';
import Javascript from '../icons/js.png';
import ReactJs from '../icons/react.png';
import NodeJs from '../icons/node.png';
import ExpressJs from '../icons/express.png';
import Kotlin from '../icons/kotlin.png';
import Java from '../icons/java.png';
import MongoDB from '../icons/mongodb.png';
import SQL from '../icons/sql.png';
import Docker from '../icons/docker.png';
import Bash from '../icons/bash.png';
import Git from '../icons/git.png';

function Skills() {
    return (
      <div className="Skills" data-section="skills">
        <div id="skills-desc" className='about-section Playfair-font'>
            <span className="heading-meta">My Speciality</span>
            <h2 className="colorlib-heading">My Skills</h2>
        </div>
        <div id="skills-row">
            <div className="skill-div">
              <img src={Python} alt="Python Logo" className="skill-icon"/>
              <p className="skill-name">Python</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={CSharp} alt="C Sharp Logo" />
              <p className="skill-name">C#</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={HTML5} alt="HTML5 Logo" />
              <p className="skill-name">HTML5</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={CSS3} alt="CSS3 Logo" />
              <p className="skill-name">CSS3</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={Javascript} alt="Javascript Logo" />
              <p className="skill-name">Javascript</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={ReactJs} alt="React Logo" />
              <p className="skill-name">ReactJs</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={NodeJs} alt="NodeJs Logo" />
              <p className="skill-name">NodeJs</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={ExpressJs} alt="ExpressJs Logo" />
              <p className="skill-name">ExpressJs</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={Kotlin} alt="Kotlin Logo" />
              <p className="skill-name">Kotlin</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={SQL} alt="SQL Logo" />
              <p className="skill-name">SQL</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={Java} alt="Java Logo" />
              <p className="skill-name">Java</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={MongoDB} alt="MongoDB Logo" />
              <p className="skill-name">MongoDB</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={Docker} alt="Docker Logo" />
              <p className="skill-name">Docker</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={Git} alt="Git Bash" />
              <p className="skill-name">Git</p>
            </div>
            <div className="skill-div">
              <img className="skill-icon" src={Bash} alt="Docker Bash" />
              <p className="skill-name">Bash</p>
            </div>
        </div>
        <hr style={{ marginTop: '30px' }}/>
      </div>
    );
  }

function Education() {
  const educationData = [
    {
        school: 'Dawson College',
        description: 'DEC in Computer Science (3 years), Graduated June 2024',
    },
    {
        school: 'Collège de Montréal',
        description: 'High School Diploma (Galas Meritas), Graduated June 2021',
    }
  ];
  return (
    <div className="Education" data-section="education">
      <div id="education-desc" className='about-section Playfair-font'>
          <span className="heading-meta">Education</span>
          <h2 className="colorlib-heading">Education</h2>
      </div>
      <div id="education-list">
        <table style={{ width: '90%', borderCollapse: 'collapse', border: '2px solid #45433d', marginBottom: '20px' }}>
              {educationData.map((item, index) => (
                  <React.Fragment key={index}>
                      <tr style={{ backgroundColor: '#f0f0f0' }}>
                          <td style={{ padding: '10px', fontWeight: 'bold', color: '#333' }}>{item.school}</td>
                      </tr>
                      <tr>
                          <td style={{ padding: '10px', color: '#666' }}>{item.description}</td>
                      </tr>
                  </React.Fragment>
              ))}
          </table>
        </div>
    <hr/>
    </div>
  );
}
  
export { Skills, Education };
