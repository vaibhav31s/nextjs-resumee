import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2019 - 2024
                </span>
              </h5>
              <h3>Bachelor of Engineering</h3>
              <h4>Thadomal Shahani Engineering College, Bandra</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Information Technology Engineering</span>
                </li>
                <li>
                  <span className="colorRed">- </span> <span>CGPA 9.28</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 20016 - 2019
                </span>
              </h5>
              <h3>High School Diploma</h3>
              <h4>Bhausaheb Vartak PolyTechnic Vasai</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span> <span>CGPA 9.64</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
