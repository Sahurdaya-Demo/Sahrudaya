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
  // const toggleCardBody = (id) => {
  //   setRecords(prevItems =>
  //     prevItems.map(record =>
  //       record.id === id ? { ...record, showCardBody: !record.showCardBody } : record
  //     )
  //   );
  // };
  return (
    <>
      <link rel='stylesheet' type='text/css' href='../../../empcss/styles.css'></link>
          <div className='counsellors'>
           <div className="row-12 p-0 d-flex flex-wrap justify-content-center flex-sm-row flex-column">

            {Records.map(record=>
            <div className="card mb-3 m-3 " style={{maxWidth: "580px"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="../assets/team/team-1.JPG" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body " style={{padding:"3.5px"}}>
                    <h5 className="card-title text-uppercase text-success">{record.name}</h5>
                    <hr></hr>
                    <p className="card-text text-success">Age : <small className="text-body-secondary text-dark">{record.age}</small></p>
                    <p className="card-text text-success">Email : <small className="text-body-secondary text-dark">{record.email}</small></p>
                    <p className="card-text text-success">Phone No. : <small className="text-body-secondary text-dark">{record.phone}</small></p>
                    <p className="card-text text-success">Qualification : <small className="text-body-secondary text-dark">{record.qualification}</small></p>
                  <button type="button" className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Submissions
              </button>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item">Today : {record.age}</p></li>
                <li><p className="dropdown-item">Yesterday : {record.age}</p></li>
                <li><p className="dropdown-item">Last Week : {record.age}</p></li>
              </ul>
                  </div>
                </div>
              </div>
            </div>)}

{/* <div className="col-12 p-0 d-flex flex-wrap justify-content-center flex-sm-row flex-column"> */}

              <div className="mb-0 m-0 " >
                  <Card className="Card credentialing" onClick={handleShow} style={{ width: "12.2rem", height: "12.2rem",}}>
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
