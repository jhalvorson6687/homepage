import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import Fade from "react-reveal";
import "./css/about.css";

class About extends Component {
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

          {/* Open Graph Meta Tags */}
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </head>
        <body>
          {/* NavBar */}
          <NavBar />
          <div id="about-page">
            <div class="row">
              <Fade>
                <div id="about-title">About</div>
              </Fade>
            </div>
            <div id="about-main">
              <div class="row">
                <div class="col-md-7">
                  <div class="row paragraph">
                    <Fade>
                      Hello, my name is Jacob Halvorson. I am a Computer Engineering
                      student at the Univeristy of California, Riverside (UCR). I am graduating from UCR in December 2020 and 
                      currently searching for software engineering positions.
                      
                    </Fade>
                  </div>

                  <div class="row paragraph">
                    <Fade>
                      My passion for software engineering started with a love for solving problems. 
                      Math was always a subject I thoroughly enjoyed, and I got great satisfaction out of solving complex problems.  
                      Soon into college, I discovered programming and knew immediately this was the field for me.
                      Software engineering provides me the opportunity to solve some of the most difficult problems 
                      there are, while also making a serious impact on people lives.

                    </Fade>
                  </div>
                  <div class="row paragraph">
                    <Fade>
                      I am particularly interested in Internet of Things (IoT) and embedded software development. I enjoy working with microcontrollers
                      and other hardware to build cool and useful devices, or "blinky boys" as I like to say. I have worked on multiple embedded systems projects using
                      C/C++ and Python where I utilized tools such as Flask, AWS, RESTful APIs, and Travis CI. I am also interested in web and mobile application development. I have worked on two websites now where I gained 
                      experience in React JS, jQuery, and Bootstrap.
                    </Fade>
                  </div>
                  <div class="row paragraph">
                    <Fade>
                      I have many hobbies and interests that I actively pursue.
                      When I am not developing or studying, you can probably find me playing 
                      a game of pickup basketball or watching a history documentary.
                      I have also recently started learning how to customize Linux environments 
                      and spend a lot of time figuring out new ways I can personalize and optimize
                      my system.
                    </Fade>
                  </div>
                  <div class="row paragraph">
                    <Fade>
                      If you would like to connect, please feel free to contact me using the links below :)
                    </Fade>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="row justify-content-center">
                    <Fade>
                      <img
                        id="about-profile-pic"
                        src={require("../Images/me.png")}
                        alt="profile"
                      />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media Bar */}
          <Social />
        </body>
      </div>
    );
  }
}

export default About;
