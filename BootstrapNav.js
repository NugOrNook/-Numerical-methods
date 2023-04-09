import { Navbar, Container ,Nav} from 'react-bootstrap';
import './BootstrapNav.css';

function Bootnav() {
  return (
    <>
      <Navbar id='Nav' class='nav nav pills nav-fill' bg="dark" variant="dark">
        <Container id='Nav2'>
          <Navbar.Brand href="/">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Bisection">Bisection</Nav.Link>
            <Nav.Link href="/FalsePosition">FalsePosition</Nav.Link>
            <Nav.Link href="/OnePoint">OnePoint</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Bootnav;                                                 