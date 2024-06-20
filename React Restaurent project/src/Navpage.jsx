import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useNavigate} from 'react-router-dom'
// import navimg from '../src/assets/LOGO.png'
import logo from '../src/assets/SwLogo.jpg'

function Navpage() {
  
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" style={{position:'sticky',top:'0',zIndex:'100'}}>
      <Container fluid style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Navbar.Brand href="#">
            <img src={logo} style={{height:'50px',width:'110px'}}></img>
            {/* <h7>Dream Catchers Touring</h7> */}
            {/* <span>Dream Catchers Touring</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to="/" style={{textDecorationStyle:'none',textDecorationLine:'none',color:'white'}}>Home</Link></Nav.Link>
            <Nav.Link href="#action4">
            <Link to="/About" style={{textDecorationLine:'none',color:'white'}}>About</Link>
            </Nav.Link>
            <Nav.Link href="#action2"><Link to="/Products" style={{textDecorationLine:'none',color:'white'}}>Products</Link></Nav.Link>
            <Nav.Link href="#action5">
            <Link to="/Review" style={{textDecorationLine:'none',color:'white'}}>Review</Link>
            </Nav.Link>
            <Nav.Link href="#action3">
            <Link to="/Contacts" style={{textDecorationLine:'none',color:'white'}}>Contact</Link>
            </Nav.Link>
            
           
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{backgroundColor:'#fe9e0d',color:'white'}}>Search</Button>
            <Button variant="outline-success" style={{backgroundColor:'#fe9e0d',color:'white'}}><Link to="/FormPage" style={{textDecorationLine:'none',color:'white'}}>SignIn</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navpage