import React, { useEffect, useState,useRef } from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import Body from "./Background";

function Navbar() {
    const [IsMobile, setIsMobile] = useState(false);
    const [IsOptions, setIsOptions] = useState(false);

    const setOptions = () => {
        setIsOptions(!IsOptions);
    };
    // const offOptions = () => {
    //     setIsOptions(false);
    // };
    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const skillsRef = useRef(null);
    
    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
        }
      };

    return (
        <div>
            {IsMobile ? (
                <div>
                    <div className="navbar-box">
                        <div className="navbar-logo">
                            <h3 className=" navbar-logo "> NS</h3>
                        </div>
                        <div className="text-white  hamburger">
                            <button onClick={setOptions}>
                                {IsOptions?(
                                  <FaTimes />
                                ):(
                                  <FaBars  />
                                )}
                                
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            {IsOptions ? (
                                <div className="mobile-navbar">
                                    <a href="#">
                                        <h4 className="my-4 nav-link" onClick={()=>scrollToSection(aboutRef)} >About</h4>
                                    </a>
                                    <a href="#">
                                        <h4 className="my-4 nav-link" onClick={()=>scrollToSection(skillsRef)}>
                                            Skills
                                        </h4>
                                    </a>
                                    <a href="#">
                                        <h4 className="my-4 nav-link" onClick={()=>scrollToSection(contactRef)}>
                                            Contact
                                        </h4>
                                    </a>
                                   
                                    <a href="">
                                        <h4 className="my-4 nav-link" >
                                            Resume
                                        </h4>
                                    </a>
                                    <Body aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef} ></Body>
                                </div>
                                
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="navbar-box">
                    <div className="navbar-logo">
                        <h3 className=" navbar-logo"> NS</h3>
                    </div>

                    {/* <div className="navbar-logo">
          <h3 className='mx-3 logo'><b>ns</b></h3>
      </div> */}
                    <div className="navbar">
                        <a href="">
                            <h4 className="mx-3 nav-link">Home</h4>
                        </a>
                        <a href="">
                            <h4 className="mx-3 nav-link">About</h4>
                        </a>
                        <a href="">
                            <h4 className="mx-3 nav-link">Contact</h4>
                        </a>
                        <a href="">
                            <h4 className="mx-3 nav-link">Resume</h4>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
