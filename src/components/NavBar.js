import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.png'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Use refs for scrolling to sections
  const skillsRef = useRef("skill");
  const projectsRef = useRef("Project");
  const homeRef = useRef("home");
  const contactRef = useRef("contact");

  // Detect scroll for changing navbar style
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Update active link
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // Smooth scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link
            as="a"
            href="#home"
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as="a"
            href="#skill"
            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('skills')}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            as="a"
            href="#project"
            className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('project')}
          >
            Projects
          </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gautham-radheepan/">
                <img src={navIcon1} alt="" rel="noopener noreferrer" target="_blank" />
              </a>
            </div>

            <div className="social-icon">
              <a href="https://github.com/gauthamradheepan/pro-website">
                <img src={navIcon3} alt="" rel="noopener noreferrer" target="_blank" />
              </a>
            </div>

            <button
              className="vvd"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
