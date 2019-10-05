import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Dialog = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
        {props.title ? <Modal.Header><Modal.Title>{props.title}</Modal.Title></Modal.Header> : null}

        <Modal.Body>{props.message}</Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={props.confirmAction}>Yes</Button>
          <Button variant="secondary" onClick={props.rejectAction}>No</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default Dialog;