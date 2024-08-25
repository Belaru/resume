import './SideBar.css';
import './fonts.css';
import React from 'react';
import linkedinIcon from '../icons/linkedin.png';

function SideBar ({ activeSection, setActiveSection }){

    const handleNavClick = (section) => {
        setActiveSection(section);
        const sectionElement = document.querySelector(`[data-section="${section}"]`);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openLinkedIn = (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        const appUrl = 'linkedin://in/anastasia-bondarenko-342a0b2a8';
        const webUrl = 'https://www.linkedin.com/in/anastasia-bondarenko-342a0b2a8';
    
        // Attempt to open the LinkedIn app
        window.location.href = appUrl;
    
        // Open LinkedIn in a new tab if the app is not installed
        setTimeout(() => {
          window.open(webUrl, '_blank', 'noopener,noreferrer');
        }, 500); // Adjust timeout as needed
    };

    // Handle click on a navigation item
    // const handleNavClick = (section, event) => {
    //     event.preventDefault(); // Prevent default link behavior
    //     const targetElement = document.querySelector(`[data-section="${section}"]`);
    //     if (targetElement) {
    //         targetElement.scrollIntoView({ behavior: 'smooth' });
    //         setActiveSection(section);
    //     } else {
    //         console.error(`Section with data-section="${section}" not found.`);
    //     }
    // };

  return (
    <div className="Side-bar">
        <aside id="colorlib-aside" className="border js-fullheight">
			<div className="text-center">
				<h1 id="colorlib-logo" className="Playfair-font">Anastasia Bondarenko</h1>
                <span className="position, Playfair-font"><b>Web/Software Developer</b> <br/>in Québec, Canada</span>
			</div>
			<nav id="colorlib-main-menu" role="navigation" className="navbar">
				<div id="navbar" class="collapse">
					<ul>
                        <li className={activeSection === 'home' ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleNavClick('home', e)} data-nav-section="home">Home</a>
                        </li>
                        <li className={activeSection === 'about' ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleNavClick('about',e)} data-nav-section="about">About</a>
                        </li>
                        <li className={activeSection === 'projects' ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleNavClick('projects',e)} data-nav-section="projects">Projects</a>
                        </li>
                        <li className={activeSection === 'skills' ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleNavClick('skills',e)} data-nav-section="skills">Skills</a>
                        </li>
                        <li className={activeSection === 'education' ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleNavClick('education',e)} data-nav-section="education">Education</a>
                        </li>
                        <li className={activeSection === 'experience' ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleNavClick('experience',e)} data-nav-section="experience">Experience</a>

                        </li>
                        <li className={activeSection === 'languages' ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleNavClick('languages',e)} data-nav-section="languages">Languages</a>

                        </li>
                        <li className={activeSection === 'contact' ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleNavClick('contact',e)} data-nav-section="contact">Contact</a>
                        </li>
					</ul>
				</div>
			</nav>

			<div id="colorlib-footer">
				<ul>
					<li><a href="#" onClick={openLinkedIn}>
                        <img id="linkedin-icon" src={linkedinIcon} alt="Visit My LinkedIn Page"/>
                    </a></li>
				</ul>
			</div>
            
		</aside>
    </div>
  );
}

export default SideBar;
