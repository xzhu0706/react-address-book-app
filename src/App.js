import React, { useState } from 'react';
import './App.css';
import {Container, Form, Button, Card} from 'react-bootstrap';

function App() {
  const [addressBook, setAddressBook] = useState([
    {
      FirstName: "Cathy" ,
      LastName: "Pierce",
      Birthday: "9/14/1996",
      Telephone: "200-910-8132"
    },
    {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
    },
    {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday:  "8/3/1970",
        Telephone: "200-661-9407"
    },
    {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
    },
    {
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
    },
    {
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
    }
  ]);

  const addressBookComponent = addressBook.map(info => {
    return (
      <Card>
        <Card.Body>
          <p>FirstName: {info.FirstName}</p>
          <p>LastName: {info.LastName}</p>
          <p>Birthday: {info.Birthday}</p>
          <p>Telephone: {info.Telephone}</p>
        </Card.Body>
      </Card>
    )
  })

  return (
    <div className="App">
      <Container>
        <h1 className="text-left">React Address Book</h1>
        {addressBookComponent}
        <h1 className="text-left">Add New</h1>
        <Form className="text-left">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter first name" />
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter last name" />
            <Form.Label>Birthday</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter birthday" />
            <Form.Label>Telephone</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter telephone" />
          </Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
