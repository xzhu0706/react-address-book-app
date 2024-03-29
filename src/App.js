import React, { useState } from 'react';
import './App.css';
import { Container, Form, Button } from 'react-bootstrap';
import AddressBookList from './AddressBookList/AddressBookList';
import Dialog from './Dialog/Dialog';
import { generate } from 'randomstring';

function App() {
  const [addressBook, setAddressBook] = useState([
    {
      key: generate(10),
      FirstName: "Cathy" ,
      LastName: "Pierce",
      Birthday: "9/14/1996",
      Telephone: "200-910-8132"
    },
    {
      key: generate(10),
      FirstName: "Alfonso",
      LastName: "Cooley",
      Birthday: "8/10/1973",
      Telephone: "200-657-9362"
    },
    {
      key: generate(10),
      FirstName: "Victor",
      LastName: "Gordon",
      Birthday:  "8/3/1970",
      Telephone: "200-661-9407"
    },
    {
      key: generate(10),
      FirstName: "Colleen",
      LastName: "Wright",
      Birthday: "10/28/1967",
      Telephone: "200-250-7949"
    },
    {
      key: generate(10),
      FirstName: "James",
      LastName: "Johnston",
      Birthday: "5/11/1972",
      Telephone: "200-645-3176"
    },
    {
      key: generate(10),
      FirstName: "Anna",
      LastName: "Reyes",
      Birthday: "9/10/1975",
      Telephone: "200-707-8670"
    }
  ]);
  const [selectedKey, setSelectedKey] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const closeDialogHandler = () => {
    setShowDialog(false);
  }

  const showDialogHandler = (key) => {
    setSelectedKey(key);
    setShowDialog(true);
  }

  const deleteItemHandler = () => {
    const newAddressBook = [...addressBook];
    const index = newAddressBook.findIndex(item => item.key === selectedKey);
    newAddressBook.splice(index, 1);
    setAddressBook(newAddressBook);
    closeDialogHandler();
  }

  const addItemHandler = (event) => {
    event.preventDefault();
    const newItem = {
      key: generate(10),
      FirstName: event.target.firstName.value,
      LastName: event.target.lastName.value,
      Birthday: event.target.birthday.value,
      Telephone: event.target.telephone.value
    }
    setAddressBook([...addressBook, newItem]);
  }

  const searchHandler = (event) => {
    const keyWord = event.target.value;
    if (keyWord) {
      const filtered = [...addressBook].filter(item => {
        return item.FirstName.toLowerCase().includes(keyWord) || item.LastName.toLowerCase().includes(keyWord)
        || item.Birthday.toLowerCase().includes(keyWord) || item.Telephone.includes(keyWord);
      })
      setSearchResults(filtered);
    } else {
      setSearchResults(null);
    }
  }

  return (
    <div className="App">
      <Container>
        <Dialog
          show={showDialog}
          onHide={closeDialogHandler}
          confirmAction={deleteItemHandler}
          rejectAction={closeDialogHandler}
          title="Warning"
          message="Are you sure you want to delete this?"
        />
        <h1 className="text-left">React Address Book</h1>
        <div className="text-right">
          <input
            type="text" 
            placeholder="Search here"
            id="searchKeyWord"
            onChange={searchHandler} 
          />
        </div>
        {<AddressBookList addressBook={searchResults || addressBook} onDelete={showDialogHandler} />}
        <h1 className="text-left">Add New</h1>
        <Form className="text-left" onSubmit={addItemHandler}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter first name" />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter last name" />
          </Form.Group>
          <Form.Group controlId="birthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter birthday" />
          </Form.Group>
          <Form.Group controlId="telephone">
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
