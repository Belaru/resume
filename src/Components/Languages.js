import './Languages.css';
import './fonts.css';
// import suitcase from '../icons/suitcase.png';

function Languages() {
    return (
    <div className="Languages" data-section="languages">
        <div id="work-desc" className='work-section Playfair-font'>
            <span className="heading-meta">My Language Fluency</span>
            <h2 className="colorlib-heading">Languages</h2>
        </div>
        <div id="languages-row">
            <div className="skill">
                <span>English    <b>Advanced</b></span>
                <div className="bar-container">
                    <div className="bar expert" style={{ width: '95%', backgroundColor: '#8a0ba1' }}></div>
                <   span className="percentage"></span>
                </div>
            </div>
            <div className="skill">
                <span>French    <b>Advanced</b></span>
                <div className="bar-container">
                <div className="bar expert" style={{ width: '95%', backgroundColor: '#330ba1' }}></div>
                <span className="percentage"></span>
                </div>
            </div>
            <div className="skill">
                <span>Russian   <b>Advanced</b></span>
                <div className="bar-container">
                    <div className="bar expert" style={{ width: '95%', backgroundColor: '#a10b18' }}></div>
                    <span className="percentage"></span>
                </div>
            </div>
        </div>
        <hr style={{ marginTop: '30px' }}/>
        
    </div>
    );
}

export default Languages;