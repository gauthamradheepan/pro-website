import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect} from "react";
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () =>{
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () =>{
        if (window.scrollY > 50){
            seScrolled (true)
        }
        else{
            seScrolled(false)
        }
    }
    window.addEventListener ("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
    const onUpdateActiveLink =( value) =>{
        setActiveLink(value);
    }
   return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#Logo">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skill" className={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project"className={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className = "navbar-text">
            <div className = "social-icon">
                <a href = "https://www.linkedin.com/in/gautham-radheepan-140b6119b/"><img src={navIcon1} alt=""   rel="noopener noreferrer" target="_blank"/></a>
                {/* <a href = "#"><img src={navIcon2} alt="" /></a>
                <a href = "#"><img src={navIcon3} alt="" /></a> */}
            </div>

            <button href="#contact" className="vvd"  onClick = {() => 'contact'.current?.scrollIntoView()}><span>Let's Connect</span></button>
          
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}