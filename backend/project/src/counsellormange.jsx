import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, CardBody } from "reactstrap";

function Manage() {
  const [items, setItems] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleClose();
    addItem();
  }

  const addItem = () => {
    setItems(prevItems => [
      ...prevItems,
      {
        id: prevItems.length,
        showCardBody: false // Initialize showCardBody to false for each item
      }
    ]);
  };

  const toggleCardBody = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, showCardBody: !item.showCardBody } : item
      )
    );
  };

  return (
    <>
    <link rel='stylesheet' type='text/css' href='../../../managecss/styles.css'></link>
    
      <section id="counsellors" className="counsellors">
        <header className="section-header">
          <h2>Registration</h2>
          <p>Add new Counsellor</p>
        </header>

        <div className="container">
          <div className="row">
            {items.map(item => (
              <div className="col-lg-3 col-md-3 col-sm-6  p-3" key={item.id}>
                <div className="card align-items-center" style={{ width: "18rem", height: "29rem" }}>
                <img src="assets/team/team-1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <button className="btn btn-primary" onClick={() => toggleCardBody(item.id)}>Toggle Card Body</button>
                    {item.showCardBody && (
                      <div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <button className="btn btn-primary">abcd</button>
                      </div>
                    )}
                    
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-3 col-md-3 col-sm-6 p-3">
              <Card className="Card" onClick={handleShow} style={{ width: "18rem", height: "29rem"}}>
              <CardBody  className="card-body"><p style={{paddingTop:"180px"}}>+</p></CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register Counsellor</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-2'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmpassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Add image</Form.Label>
              <Form.Control
                type="file"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClick} className='btn-primary' variant='primary'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Manage;



