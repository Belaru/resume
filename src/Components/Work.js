import './Work.css';
import './fonts.css';
import suitcase from '../icons/suitcase.png';
import workplace from '../icons/workplace.png';

function Work() {
    return (
      <div className="Work" data-section="experience">
        <div id="work-desc" className='work-section Playfair-font'>
            <span className="heading-meta">Experience</span>
            <h2 className="colorlib-heading">My Work Experience</h2>
        </div>
        <div id="work-list">
            <div className="animate-box">
                <div className="timeline-item">
                    <div className="timeline-icon" style={{ backgroundColor: '#007BFF' }}>
                        <img className="icon-suitcase" src={suitcase} alt="suitcase"/>
                    </div>
                    <div className="timeline-content">
                        <h3>Developer (internship)  <span>April 2024 – June 2024</span></h3>
                        <h4><img className="workplace-icon" src={workplace} alt='workplace'/>L’Original Gallery </h4>
                        <ul>
                            <li>Developed and maintained WordPress websites, ensuring robust performance 
                                and excellent user experience.</li>       
                            <li>Applied SEO techniques, used Hotjar to track and analyze user behavior, 
                                and managed web hosting.
                            </li>
                            <li>Improved website performance by 30% by transitioning nameservers to Cloudflare.</li>
                            <li>Developed comprehensive documentation to facilitate seamless handoff to other 
                                team members.
                            </li>
                            <li>Contributed ideas and suggestions in team meetings and delivered updates on deadlines, 
                                 designs, and enhancements.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon" style={{ backgroundColor: '#1e8221' }}>
                        <img className="icon-suitcase" src={suitcase} alt="suitcase"/>
                    </div>
                    <div className="timeline-content">
                        <h3>Math Tutor<span>August 2018 - May 2020</span></h3>
                        <h4><img className="workplace-icon" src={workplace} alt='workplace'/>Lycée Russe</h4>
                        <ul>
                            <li>Explained math concepts in caring and encouraging environment to help kids thrive and 
                            learn.</li>
                            <li>Monitored student progress and provided timely feedback on performance reports to 
                            assist with goal-setting.</li>
                            <li>Assisted students in developing study skills and strategies.</li>
                            <li>Used variety of teaching methods to successfully help wide range of students.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon" style={{ backgroundColor: '#751B6E' }}>
                        <img className="icon-suitcase" src={suitcase} alt="suitcase"/>
                    </div>
                    <div className="timeline-content">
                        <h3>Sales Consultant<span>January 2022 - Juy 2023</span></h3>
                        <h4><img className="workplace-icon" src={workplace} alt='workplace'/>Linen Chest</h4>
                        <ul>
                            <li>Achieved personal sales objectives and promoted store promotions effectively.</li>
                            <li>Conducted comprehensive product demonstrations for clients, resulting in increased 
                            understanding of features and benefits.</li>
                            <li>Used consultative sales techniques to understand customer needs and recommend 
                            relevant products and services.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon" style={{ backgroundColor: '#b01740' }}>
                        <img className="icon-suitcase" src={suitcase} alt="suitcase"/>
                    </div>
                    <div className="timeline-content">
                        <h3>Sales Member<span>June 2022 - September 2023</span></h3>
                        <h4><img className="workplace-icon" src={workplace} alt='workplace'/>Ardene</h4>
                        <ul>
                            <li>Worked well with teammates and accepted coaching from management team.</li>
                            <li>Improved customer satisfaction by providing friendly and efficient service at the register.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{ marginTop: '30px' }}/>
    </div>
    );
}

export default Work;