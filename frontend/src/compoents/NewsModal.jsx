import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

function NewsModal(value) {
  let text =value;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <button variant="primary" className="btn btn-success" onClick={handleShow}>
          View more
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src='aaa.jpg'></img>
            <br/>
            {text.value}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default NewsModal

