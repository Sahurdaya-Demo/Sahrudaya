import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, CardBody } from "reactstrap";
import axios from 'axios';
function Employee() {
  // const [items, setItems] = useState([]);
  // let empdetails
  const [Records,setRecords]=useState([])
  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[email,setemail]=useState('')
  useEffect(()=>{
  
  retrieve()
  },[])
  const retrieve=async()=>{
    const response= await fetch(`http://127.0.0.1:8000/api/`)
    const jsonData = await response.json();
   //  strr=JSON.stringify(res.data)
    setRecords(jsonData)
    // console.log(Res)
   }

 const handleClick = async() => {
  let formField = new FormData()
  formField.append('email',email)
  await axios({
    method: 'post',
    url:'http://127.0.0.1:8000/send-resgister-email/',
    data: formField
  }).then(response=>{
    alert('send email')
     handleClose(); 
  })
 
  // addItem();
}
  return (
    <>
      <link rel='stylesheet' type='text/css' href='../../../empcss/styles.css'></link>
          <div className='counsellors'>
           <div className="col-12 p-0 d-flex flex-wrap justify-content-center flex-sm-row flex-column">
              {Records.map(record=>
                <div className="card align-items-center m-3 m-xl-5 card-res" style={{ width: "18rem", height: "29rem",}} key={record.id}>
                <div className="card-body">
                  
                </div>
                </div>
              )}
              <div className=" p-3 align-items-center m-3 m-xl-5 card-res" >
                  <Card className="Card credentialing" onClick={handleShow} style={{ width: "18rem", height: "29rem",}}>
                  <div className='overlay'></div>
                  <div className='circle'>
                <CardBody className="card-body ">
                 
                </CardBody>
                </div>
                <p>Register Counsellors</p>
              </Card>
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
                onChange={(e) => setemail(e.target.value)}
                autoFocus
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
       
    </>
  );
}

export default Employee;
