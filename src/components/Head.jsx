import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Head() {
  return (
    <div className="w-100" style={{backgroundColor:'#FFF1DA',height:'70px', color:'black'}}>
 <Navbar >
        <Container>
          <Navbar.Brand  >
           <h2> <sapan style={{color:'#fc9803'}}>T</sapan>ravel <sapan style={{color:'#fc9803'}}>L</sapan>og</h2>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    // </div>
  )
}

export default Head