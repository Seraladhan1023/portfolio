import React from "react";
import { useRef } from "react";
import "./Background.css";
import { Button, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


function Name(formData){
    const name=formData.get("name");
    const email=formData.get("email");
    const message=formData.get("message");
    console.log({name},{email},{message});
}
function Body({aboutRef, skillsRef,contactRef }) {
    // const aboutRef=useRef(null);
    return (
        <div className="container">
            <div className="body section-1">
                <div className="sm-links">
                    <a href="">
                        <h4 className="text-white my-3 sm-linkedin">
                            <p>LinkedIn</p>
                            <FaLinkedin />
                        </h4>
                    </a>
                    <a href="">
                        {" "}
                        <h4 className="text-white my-3 sm-github">
                            <p>GitHub</p>
                            <FaGithub />
                        </h4>
                    </a>
                    <a href="">
                        <h4 className="text-white my-3 sm-instagram">
                            <p>Instagram</p>
                            <FaInstagram />
                        </h4>
                    </a>
                    <a href="">
                        <h4 className="text-white my-3 sm-gmail">
                            <p>Gmail</p>
                            <FaGoogle />
                        </h4>
                    </a>
                </div>
                <div className=" body-box  w-50 ">
                    <div className="body-container">
                        <h2 className=" mt-5 body-title-1">
                            Hello, My Name is
                        </h2>
                    </div>
                    <div className="body-container mt-2">
                        <h1 className=" body-title-2">Seraladhan</h1>
                    </div>
                    <div className="body-container mt-2">
                        <h1 className=" body-title-2">
                            I'm a Full Stack Developer,
                        </h1>
                    </div>
                    <div>
                        <p className="text-white">
                            Currently harnessing my skills to architect and
                            develop impactful web applications. Let's bring your
                            ideas to life with cutting-edge solutions!
                        </p>
                    </div>
                </div>
            </div>
            <div ref={aboutRef} className="about-me section-2" >
                <div className="about-me-title">
                    <p className="text-white">About Me</p>
                </div>
                <div className="about-me-details">
                    <div className="about-me-section1">
                        <h2 className="text-white">
                            <b>Hey. I'm Seraladhan,</b>{" "}
                        </h2>
                        <h2 className="text-white">
                            <b> nice to meet you.</b>{" "}
                        </h2>
                        <h2 className="text-white">
                            <b>Please take a look around. </b>
                        </h2>
                    </div>
                    <div className="about-me-section2">
                        <p className="text-white">
                            As a Full-Stack Web Developer, I'm passionate about
                            creating exceptional web experiences through
                            end-to-end development. My expertise spans from
                            resolving bugs to implementing feature additions and
                            enhancements. With a keen eye for detail and a
                            passion for crafting seamless digital solutions, I
                            am dedicated to delivering engaging user interfaces
                            and implementing robust server-side functionality.
                            Let's transform ideas into captivating web realities
                            together.
                        </p>
                    </div>
                </div>
            </div>
            <div  ref={skillsRef} className="section-3">
                <h4 className="text-white section-3-title my-3">Experience</h4>
                <p className="text-white">
                    These are the technologies I've worked with
                </p>
                <div className="row">
                    <div className="section-3-logos col-md-2 col-xs-2">
                        <img src="/images/html-log-3.png"></img>
                        <div className="section-3-logo-des">
                            <p className="text-white">HTML</p>
                        </div>
                    </div>
                    <div className="section-3-logos  col-md-2 col-xs-2">
                        <img src="/images/css-logo.png"></img>
                        <div className="section-3-logo-des">
                            <p className="text-white">CSS</p>
                        </div>
                    </div>
                    <div className="section-3-logos  col-md-2 col-xs-2">
                        <img src="/images/js-logo.png"></img>
                        <div className="section-3-logo-des">
                            <p className="text-white">JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className="section-3-logos  col-md-2 col-xs-2">
                        <img src="/images/react-logo.png"></img>
                        <div className="section-3-logo-des">
                            <p className="text-white">REACT</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="section-3-logos col-2">
                        <img src="/images/php-logo.png"></img>
                        <div className="section-3-logo-des">
                            <p className="text-white">PHP</p>
                        </div>
                    </div>
                    <div className="section-3-logos  col-2">
                        <img src="/images/mysql-logo.png"></img>
                        <div className="section-3-logo-des">
                            <p className="text-white">MYSQL</p>
                        </div>
                    </div>
                    <div className="section-3-logos  col-2">
                        <img src="/images/laravel-logo.png"></img>
                        <div className="section-3-logo-des">
                            <p className="text-white">LARAVEL</p>
                        </div>
                    </div>
                    <div className="section-3-logos  col-2">
                        <img src="/images/github-logo.png"></img>
                        <div className="section-3-logo-des">
                            <p className="text-white">GITHUB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={contactRef} className="section-4">
                <div className="contact-me-title">
                    <h4 className="text-white">Contact Me</h4>
                </div>
                <div className="contact-me-sections row">
                    <div className="contact-me-section1 col-3">
                        <h2 className="text-white">
                            <b>Hey. Let's Chat,</b>{" "}
                        </h2>
                        <h2 className="text-white">
                            <b> Tell me about your</b>{" "}
                        </h2>
                        <h2 className="text-white">
                            <b>PROJECT. </b>
                        </h2>
                    </div>
                    <div className="contact-me-section2 col-9 ">
                        <form className="my-3" action="Register">
                            <div class="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Fullname"
                                ></input>
                                <small
                                    id="emailHelp"
                                    class="form-text text-muted"
                                >
                                    We'll never share your email with anyone
                                    else.
                                </small>
                            </div>
                            <div class="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Enter valid email"
                                ></input>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <textarea
                                    class="form-control"
                                    name="message"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Enter Message"
                                ></textarea>
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-success">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
