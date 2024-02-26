import React from "react";
import { Link } from "react-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";
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
            <p className="text-dark logo">Kofi</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          id="navbar-toggle"
          aria-controls="responsive-navbar-nav"
          onFocus={(e) => e.target.blur()}
          style={{ border: "0px", margin: "0px" }}
        >
          <span>
            <HiMenuAlt3
              className="toggleIcon"
              // style={{
              //   width: "1.6em",
              //   height: "1.6em",
              // }}
            />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="about-me"
              smooth
              offset="-30px"
              duration={500}
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
            >
              About Me
            </Link>
            <Link
              to="skills"
              smooth={true}
              offset={-80}
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
              smooth
              duration={500}
              onClick={handleLinkClick}
              className="m-2 navlink text-light text-decoration-none"
            >
              Testimonial
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-90}
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
