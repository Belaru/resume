import './Projects.css';
import './fonts.css';
import StuddyBuddy from '../icons/StuddyBuddy-App.png';
import ReleaseApt from '../icons/ReleaseApt-Web.png';
import VisitPage from '../icons/icon-visit-page.png';
import CompManager from '../icons/Manager-Web.png';

function Projects() {
  return (
    <div className="Projects" data-section="projects">
        <div id="projects-desc" className='about-section Playfair-font'>
            <span class="heading-meta">My Work</span>
            <h2 class="colorlib-heading">Projects</h2>
            <div class="animate-box" data-animate-effect="fadeInLeft">
                <div>
                    <div class="project-entry">
                        <div className="image-frame">
                            <img src={StuddyBuddy} className="img-responsive" alt="Studdy App" />
                        </div>
                        <div class="desc">
                            <h3>Study App</h3>
                            <span><small>Mar-May 2023 </small> | <small> App Development </small> </span>
                            
                            <p className='Quicksand-font'>Created a C# app using Avalonia, in a team of 3, that allows students to subscribe 
                                to study group events they want to attend. Made the user able to search, join, 
                                create, edit, and delete a study event.
                            </p>
                            <ul className='desc-list Quicksand-font'>
                                <li >Developed features allowing users to search, join, create, edit, and delete study events.</li>
                                <li>Programmed backend logic for message editing, filtering, deletion, read status, and sending.</li>
                                <li>Implemented backend logic for inbox filtering and opening messages.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="project-entry">
                            <div className="image-frame">
                                <img src={ReleaseApt} className="img-responsive" alt="Realease Apt" />
                            </div>
                            <div class="desc">
                                <h3>Release Website <a href='https://release-your-apt.azurewebsites.net/' target='_blank' rel="noreferrer"> 
                                <img src={VisitPage} alt='link icon' style={{ height: 20, marginLeft: 5 }} /> </a></h3>

                                <span><small>Jan-Mar 2024 </small> | <small> Web Development </small> </span>
                                
                                <p className='Quicksand-font'>Created an application in Python, in a team of 3, providing a system for members to create, 
                                delete, and modify courses and competencies.  
                                </p>
                                <ul className='desc-list Quicksand-font'>
                                    <li>Specialized in MongoDB connections and functions for efficient listing management.</li>
                                    <li>Developed APIs to handle lease transactions and streamline operational processes.</li>
                                    <li>Integrated advanced features such as auto-complete for addresses and a self-read text button.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="project-entry">
                            <div className="image-frame">
                                <img src={CompManager} className="img-responsive" alt="Management Web" />
                            </div>
                            <div class="desc">
                                <h3>Courses and Competencies Manager</h3>
                                <span><small>Mar-May 2023 </small> | <small> Web Development </small> </span>
                                
                                <p className='Quicksand-font'>Created an application in Python, in a team of 3, providing a system for 
                                    members to create, delete, and modify courses and competencies.
                                </p>
                                <ul className='desc-list Quicksand-font'>
                                    <li>Developed a REST API to handle data between the database and Python objects.</li>
                                    <li>Created forms for managing courses and competencies with restricted access based on 
                                    user roles.</li>
                                    <li>Utilized Python, Flask, Jinja, and SQL to streamline course management and enhance data 
                                    security and user experience.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{ marginTop: '30px' }}/>
    </div>);
}

export default Projects;