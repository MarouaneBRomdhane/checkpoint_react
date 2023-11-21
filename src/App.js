// App.js
import React from "react";
import { Navbar, Container, Nav, Card, CardDeck } from "react-bootstrap";

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
        <CardDeck>
          <Card>{/* Card 1 content */}</Card>
          <Card>{/* Card 2 content */}</Card>
          <Card>{/* Card 3 content */}</Card>
        </CardDeck>
      </div>
    </>
  );
}

export default App;
