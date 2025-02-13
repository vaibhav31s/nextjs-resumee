import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

export default function Experience() {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2021 - Present
                </span>
              </h5>
              <h3>Software Engineer</h3>
              <h4>Petwer private limited</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Software Development using Salesforce products</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>UI, app, and API Development</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Backend NodeJS development</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
