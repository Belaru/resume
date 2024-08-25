
import './About.css';
import './fonts.css';
import bulb from '../icons/bulb.png';
import web from '../icons/internet.png';
import microservice  from '../icons/cube.png';
import mobile from '../icons/mobile-app.png';
function About() {
  return (
    <div className="About" data-section="about">
        <div id="about-desc" className='about-section Playfair-font'>
            <span class="heading-meta">About Me</span>
            <h2 class="colorlib-heading">Who Am I?</h2>
            <p className="Quicksand-font">
            <b>Hi, I'm Anastasia Bondarenko</b> Web/Software Developer | Passionate Technologist | Collaborative Problem-Solver
            </p>
            <p className="Quicksand-font">
            I am a Computer Science graduate from Dawson College with 3 years of experience in 
            programming, highly motivated to enter the dynamic field of technology and computers. 
            Throughout my journey, I've gained valuable insights 
            into the industry and have had the privilege of working on several fantastic team projects.
            </p>
            <p className="Quicksand-font">
                I love building innovative and user-friendly applications, and I'm always eager 
                to learn more about the latest technologies and best practices. 
            </p>
            <p className="Quicksand-font">
            I possess a strong passion for technology and programming. 
            I excel in collaborating within teams to achieve results and bring strong learning abilities, 
            exceptional problem-solving skills, and keen attention to detail to every project. 
            I am committed to continuous improvement and delivering high-quality, scalable solutions.
            </p>
        </div>
        <div className="about-row">
            <div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                <div class="services color-1">
                    <span class="icon2"><img src={bulb} alt='bulb'/></span>
                    <h3>Creative</h3>
                </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
                <div class="services color-2">
                    <span class="icon2"><img src={web} alt='worldwide web'/></span>
                    <h3>Web</h3>
                </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
                <div class="services color-3">
                    <span class="icon2"><img src={microservice} alt='software'/></span>
                    <h3>Software</h3>
                </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                <div class="services color-4">
                    <span class="icon2"><img src={mobile} alt='mobile app'/></span>
                    <h3>Application</h3>
                </div>
            </div>
        </div>
        <hr style={{ marginTop: '30px' }}/>
    </div>);
}

export default About;
