import React from "react";
import { Link } from "react-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PiCodeBold } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";
function Navigation() {
  const handleLinkClick = () => {
    const navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle) {
      navbarToggle.click();
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top navbar-bg">
      <Container>
        <Navbar.Brand href="/">
          <div>
            <p className="text-light logo fw-bold text-uppercase">
              <PiCodeBold size={30} /> Bonney
            </p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          id="navbar-toggle"
          aria-controls="responsive-navbar-nav"
          onFocus={(e) => e.target.blur()}
          style={{ border: "0px", margin: "0px" }}
        >
          <span>
            <HiMenuAlt3 className="toggleIcon" />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="aboutme"
              smooth
              offset={-50}
              duration={500}
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
            >
              About Me
            </Link>
            <Link
              to="skills"
              smooth={true}
              offset={-300}
              duration={500}
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
            >
              Projects
            </Link>
            <Link
              to="clones"
              smooth
              duration={500}
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
            >
              Clones
            </Link>
            <Link
              to="testimonial"
              smooth={true}
              offset={-95}
              duration={500}
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
            >
              Testimonial
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-85}
              duration={500}
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
            >
              Contact
            </Link>
            <Link
              to="faqs"
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
              smooth={true}
              offset={-90}
              duration={500}
            >
              Faqs
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
