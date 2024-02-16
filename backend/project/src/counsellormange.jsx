import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      <div className="col-3 p-3" key={prevItems.length}>
        <div className="card" style={{ width: "18rem", height: "29rem" }}>
          <img src="assets/team/team-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">abcd</button>
          </div>
        </div>
      </div>
    ]);
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
           {items.map(item => item)}
           <div className="col-3 p-3">
            <div className="card align-items-center" style={{ width: "18rem", height: "29rem" }}>
              <div className="card-body">
              
                <button className="btn btn-primary " onClick={handleShow}>++++</button>
              </div>
            </div>
            </div>
          </div>

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
          <Button  onClick={handleClick} className='btn-primary ' variant='primary'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      
        </div>
      </section>
    </>
  );
}

export default Manage;
