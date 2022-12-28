


import './App.css';
import {Navbar, Container, Nav, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Home from './Components/Home'
import AmbuDetailsUI from './Components/AmbuDetailsUI';
import HospiDetailsUI from './Components/HospiDetailsUI';
import { Routes, Route, Link } from 'react-router-dom';
import "./Components/Intee.css";

function App() {
  
  return (
    <div className='intee'>

      {/* Creating the Navbar */} 
      <Navbar collapseOnSelect expand="lg" className='bg-dark' variant="dark" style={{zIndex: "1"}}>
        <Container>
          <Navbar.Brand href="/" className='text-white'>
            <b style={{fontFamily: "monospace", fontSize: "xx-large"}}> Life Networks</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link href="/" className='home text-white'>Home</Nav.Link>
              <Nav.Link href="/ambudetails" className='collab text-white'>Ambulance Services</Nav.Link>
              <Nav.Link href="/hospitaldetails" className='forum text-white'>Hospital Services</Nav.Link>
              
                
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* These are the routes for moving across the pages */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/ambudetails" element={<AmbuDetailsUI/>} />
        <Route path="/hospitaldetails" element={<HospiDetailsUI />} />
        
      </Routes>
    </div>
  );
}

export default App;


