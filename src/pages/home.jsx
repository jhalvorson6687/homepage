import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';
import FadeIn from 'react-fade-in';
import { HashLink } from "react-router-hash-link";
import NavBar from "../components/navbar.jsx";
import Proj from "../data/projects.json";
import { Link } from "react-scroll";
import Fade from "react-reveal";
import "./css/home.css";

function AddProject() {
  return (
    <div class="text-box-projects">
      {Proj.Projects.map((project) => {
        return (
          <FadeInSection>
          <div class="project-brief-section">
            <div class="project-brief-box shadow">
              <div class="container">
                <div class="row">
                  <div class="project-brief-title project-brief-text">
                    {project.title}
                  </div>
                  <div class="project-brief-text project-brief-body">
                    {project.descriptionbrief}
                  </div>
                  <div class="project-brief-text align-right">
                    <HashLink
                      class="nav-link project-link"
                      to={"/projects#" + project.section}
                    >
                      Project Page
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>
        );
      })}
    </div>
  );
}

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const tmpDomRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(tmpDomRef);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />

          <meta property="og:title" content="Jacob Halvorson: Portfolio Website" />
          <meta property="og:type" content="website" />
          <meta
            name="image"
            property="og:image"
            content="./websiteimg.png"
          ></meta>
          <meta property="og:url" content="//jacobhalvorson.me" />
          <meta name="author" content="Jacob Halvorson"></meta>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </head>
        <body>
          {/* NavBar */}
          <div id="nav-bar"></div>
          <NavBar />
          {/* Main Section */}
          <div id="main-page">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <Fade>
                    <div id="profile-circle">
                    <img
                      class="profile-pic" /*shadow*/
                      src={require("../Images/jacob.png")}
                      alt="Me"
                    />
                    </div>
                  </Fade>
                </div>
                <div class="col-md-8">
                  <Fade class="container">
                    <div class="row">
                      <div class="title-text-1">
                        <ReactTypingEffect className="typingeffect" text={['Hello! I\'m Jacob.']} speed={75} typingDelay={100} eraseDelay={100000000}/>
                      </div>
                    </div>
                    <div class="row">
                      <FadeIn delay={1100}>
                      <div class="body-text-1">
                        An enthusiastic and motivated Software Engineer. Deeply passionate
                        about creating high quality software and products that will have a positive impact
                        on others!
                      </div>
                      </FadeIn>
                    </div>
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="scroll-button">
                          <Link
                            activeClass="active"
                            to="skills-brief"
                            spy={true}
                            smooth={true}
                            duration={1400}
                          >
                            <div class="button-dark-orange">Learn More</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          {/* Skills set */}
          <div id="skills-brief">
          
            <div class="container">
            <FadeInSection>
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <div class="container">
                    <div class="row justify-content-center">
                     <div class="title-text-2">My Stack.</div>
                    </div>
                    <div class="row justify-content-center">
                      <div id="skills-tools-box">
                        <div class="row justify-content-center">
                          <div class="title-text-3 ">Tools</div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="row ">
                              <div class="body-text-1-onyx">React JS</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">Bootstrap</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">Node JS</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">RESTful API</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">Flask</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">PostgreSQL</div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="row">
                              <div class="body-text-1-onyx">Git</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">JSON</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">Verilog</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">Embedded Systems</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">
                                Arduino/Raspberry Pi
                              </div>
                            </div>
                            <div class="row">
                              <div class="body-text-1-onyx">AVR Microcontrollers</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="container">
                    <div id="skills-col-2" class="row justify-content-center">
                      <div class="col-md-6">
                        <div class="container">
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-c++-480.png")}
                              alt="C++"
                            />
                            <div class="skills-icon-name">C++</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-python-480.png")}
                              alt="Python"
                            />
                            <div class="skills-icon-name">Python</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-c-programming-480.png")}
                              alt="C"
                            />
                            <div class="skills-icon-name">C</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="container">
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-html-5-480.png")}
                              alt="HTML"
                            />
                            <div class="skills-icon-name">HTML</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-css3-480.png")}
                              alt="CSS"
                            />
                            <div class="skills-icon-name">CSS</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-javascript-480.png")}
                              alt="Javascript"
                            />
                            <div class="skills-icon-name">Javascript</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="scroll-button-2">
                    <Link
                      activeClass="active"
                      to="projects-brief"
                      spy={true}
                      smooth={true}
                      duration={1400}
                    >
                      <div class="button-dark-orange-2">Check out my projects!</div>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>
            </div>
          </div>
          {/* Short summary about projects */}
          <div id="projects-brief">
            <FadeInSection>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="title-text-4">Projects</div>
                </div>
                <div class="row">
                  <AddProject />
                </div>
              </div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="scroll-button-3">
                    <Link
                      activeClass="active"
                      to="nav-bar"
                      spy={true}
                      smooth={true}
                      duration={1400}
                    >
                      <div class="button-dark-orange">Back to top</div>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
          {/* Contact Info */}
          <div id="contact-info">
            <div class="row">
              <div class="col text-center">
                <div class="title-text-4-contact">Let's connect!</div>
                <div class="container">
                  <div class="row justify-content-center icon-center">
                    <div id="contact-info-bar">
                      <div class="row justify-content-center">
                        <div class="col-md-2">
                          <a
                            id="email-link"
                            href="mailto: jhalvorson6687@gmail.com"
                          >
                            <img
                              src={require("../Images/Icons/social/mail.png")}
                              class="home-handle-icon"
                              alt="mail"
                            />
                          </a>
                        </div>
                        <div class="col-md-2">
                          <a
                            class="social"
                            href="https://www.linkedin.com/in/jacob-halvorson/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={require("../Images/Icons/social/linkedin.png")}
                              class="home-handle-icon"
                              alt="linkedin"
                            />
                          </a>
                        </div>
                        <div class="col-md-2">
                          <a
                            class="social"
                            href="https://github.com/jhalvorson6687"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={require("../Images/Icons/social/github.png")}
                              class="home-handle-icon"
                              alt="github"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Home;
