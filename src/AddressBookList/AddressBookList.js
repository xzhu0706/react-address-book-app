import React from 'react';
import { Card } from 'react-bootstrap';

const AddressBookList = (props) => {
	const addressBook = [...props.addressBook];
	const addressBookComponent = addressBook.map(item => 
		<Card key={item.key}>
      <span
        className="text-right"
        onClick={props.onDelete.bind(null,item.key)}
      >
        {'\u274e'}
      </span>
			<Card.Body>
				<p>FirstName: {item.FirstName}</p>
				<p>LastName: {item.LastName}</p>
				<p>Birthday: {item.Birthday}</p>
				<p>Telephone: {item.Telephone}</p>
			</Card.Body>
		</Card>
	)
	return addressBookComponent;
}

export default AddressBookList;