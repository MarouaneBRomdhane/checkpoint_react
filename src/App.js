// App.js
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Card,
  Button,
  NavDropdown,
} from "react-bootstrap";

function App() {
  return (
    <>
      {/* fragmant{} */}
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">cards checkpoint </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>{" "}
              <Nav.Link href="#link">cards</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1>Welcome to cards app</h1>

        {/* Cards */}
        <Card>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>This is the content of Card 1.</Card.Text>
            <Button variant="primary">Go to card1</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>This is the content of Card 2.</Card.Text>
            <Button variant="primary">Go to card2</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>This is the content of Card 3.</Card.Text>
            <Button variant="primary">Go to card3</Button>
          </Card.Body>
        </Card>

        {/* Button */}
        <Button variant="primary">Click me</Button>
      </div>
    </>
  );
}

export default App;
