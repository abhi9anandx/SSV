import "./styles/aboutstyle.css";
import ProfileImage from "./resources/display.jpeg";
import LinkedInIcon from "./resources/linkedin.png";
import GitHubIcon from "./resources/github.png";
import InstagramIcon from "./resources/instagram.png";
import TwitterIcon from "./resources/twitter.png";

function About() {
  return (
    <div className="body">
      <h1 className="kn">Know Me</h1>
      <div className="creators mt-4">
        <div className="cards">
          <div className="details">
            <div className="image">
              <div className="img">
                <img src={ProfileImage} alt="" />
              </div>
            </div>
            <div className="data">
              <h3 className="name">
                <span>
                  <h2>Abhinav Anand</h2>
                </span>
              </h3>
              <p className="designation">MERN Developer, JAVA Developer</p>
              <div className="social-media-list">
                <ul>
                  <li>
                    <a target="_blank" href="http://www.linkedin.com/in/abhinav-anand18" rel="noreferrer">
                      <img className="icn" src={LinkedInIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/abhi9anandx" rel="noreferrer">
                      <img className="icn" src={GitHubIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/yoyo.abhi9/" rel="noreferrer">
                      <img className="icn" src={InstagramIcon} alt="" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/ur_abhi9" rel="noreferrer">
                      <img className="icn" src={TwitterIcon} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;