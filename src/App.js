// App.js
import React from "react";
import { Navbar, Container, Nav, Card, Button } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Your App Name</Navbar.Brand>
            <Nav className="me-auto">{/* Add your navbar items here */}</Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1>Welcome to Your App</h1>

        {/* Cards */}
        <Card>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>This is the content of Card 1.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>This is the content of Card 2.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>This is the content of Card 3.</Card.Text>
          </Card.Body>
        </Card>

        {/* Button */}
        <Button variant="primary">Click me</Button>
      </div>
    </>
  );
}

export default App;
