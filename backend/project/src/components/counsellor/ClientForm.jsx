
import React, { useState } from "react"
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"
import { Form, Button, Row, Col } from 'react-bootstrap';

function Details() { 

	// const navigate=useNavigate();
	// useUnload(e => {
	// 	e.preventDefault();
	// 	e.returnValue = '';
	// 	navigate('/counsellor',{replace:true})
	//   });
	
	const[date,setdate]=useState(null)
	const[place,setplace]=useState("")
	const[name,setname]=useState("")
	const[Age, setage] = useState(0);
	const[Gender, setgender] = useState("");
	const[f_status,setfinstatus]=useState("")
	const[m_status,setmaritalstat]=useState("")
	const[School,setschool]=useState("")
    const[religion,setreligion]=useState("")
	const[f_education,setfeducation]=useState("")
	const[f_occupation,setfoccupation]=useState("")
	const[m_education,setmeducation]=useState("")
    const[m_occupation,setmoccupation]=useState("")
	const[problem,setproblem]=useState("")
	const[history,sethistory]=useState("")
	const[Intervention,setintervention]=useState("")
	const[challenge,setchallenge]=useState(0)
	const[follow_ups,setsession]=useState("")
	const[referral,setreferral]=useState("")
	const[outcome,setoutcome]=useState("")
	const[remarks,setremarks]=useState("")
	const[status,setstatus]=useState("")

	

    const [count1, setCount1] = React.useState(0);
	const [count2, setCount2] = React.useState(0);
	const [count3, setCount3] = React.useState(0);
	const [count4, setCount4] = React.useState(0);
	const [count5, setCount5] = React.useState(0);
	const [count6, setCount6] = React.useState(0);
	const [count7, setCount7] = React.useState(0);

    const probcalculate = e => {
		
		setCount1(e.target.value.length);
		setproblem(e.target.value);	

	  };
	const histcalculate = e => {
		
		setCount2(e.target.value.length);
		sethistory(e.target.value);	

	  };
	  const interventioncalculate = e => {
		
		setCount3(e.target.value.length);
		setintervention(e.target.value);	

	  };
	  const challengecalculate = e => {
		
		setCount4(e.target.value.length);
		setchallenge(e.target.value);	

	  };
	  const referralcalculate = e => {
		
		setCount5(e.target.value.length);
		setreferral(e.target.value);	

	  };
	  const outcomecalculate = e => {
		
		setCount6(e.target.value.length);
		setoutcome(e.target.value);	

	  };
	  const remarkcalculate = e => {
		
		setCount7(e.target.value.length);
		setremarks(e.target.value);	

	  };
	
	  const newdata =async()=>{
		let formField= new FormData()
		formField.append("email",localStorage.getItem('email') )
		formField.append('date',date)
		formField.append('place_of_counselling',place)
		formField.append('name',name)
		formField.append('age',Age)
		formField.append('gender',Gender)
		formField.append('finacial_status',f_status)
		formField.append('marital_status',m_status)
		formField.append('school',School)
		formField.append('religion',religion)
		formField.append('fathers_education',f_education)
		formField.append('fathers_occupation',f_occupation)
		formField.append('mothers_education',m_education)
		formField.append('mothers_occupation',m_occupation)
		formField.append('problem',problem)
		formField.append('history_of_problem',history)
		formField.append('intervention',Intervention)
		formField.append('challenges_by_counsellor',challenge)
		formField.append('number_of_followup_sections',follow_ups)
		formField.append('referral_service',referral)
		formField.append('outcome',outcome)
		formField.append('remarks',remarks)
		formField.append('status',status)

		
		try{
	   await axios({
		   method: 'post',
		   url: 'http://127.0.0.1:8000/formsubmit/',
		   data: formField
	   }).then(response=>{
		  
		   alert('success')
		   
		   
	   })
	}
	catch{}
	   }
	   const [validated, setValidated] = useState(false);
	 const submithandler=(event)=>
	 {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
		  
		  event.stopPropagation();
		}
	
		setValidated(true);
      
	 }

	

	return ( 
		
        
		<Form onSubmit={submithandler} noValidate validated={validated}>
      <br />
      <div className="card" style={{ boxShadow: "10px 8px 0px rgb(42, 38, 38)" }}>
        <div className="card-body">
          <Row>
            <Col md={6}>
              <Form.Group controlId="date" >
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" onChange={(e) => setdate(e.target.value)} required />
				
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="place">
                <Form.Label>Place of Counselling</Form.Label>
                <Form.Control as="select" onChange={(e) => setplace(e.target.value)} required>
                  <option></option>
                  <option>Vypin-Rajagiri Sea Shore School</option>
			               <option>Kakkanad</option>
						   <option>Thevara-SH College(East Campus)</option>
						   <option>Thevara-Higher Secondary School</option>
						   <option>Thevara-SH UP</option>
						   <option>Thevara-SH High School</option>
						   <option>Karukutty-Christ the King monastery Church </option>
						   <option>Kanjoor</option>
						   <option>Eloor-SHJ UP School</option>
						   <option>Kottarapalli-Amala Public School</option>
						   <option>Manappuram-St Teresa's High School</option>
						   <option>Pothy</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </div>
      </div>

      <div className="data-container">
        <div className="card " style={{ boxShadow: "10px 8px 0px rgb(42, 38, 38)" }}>
          <div className="card-header"><h3>Personal Details</h3></div>
          <div className="card-body">
            <Row>
              <Col md={8}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" maxLength={100} onChange={(e) => setname(e.target.value)} required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" onChange={(e) => setage(e.target.value)} required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" onChange={(e) => setgender(e.target.value)} >
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="finStatus">
                  <Form.Label>Family Financial Status</Form.Label>
                  <Form.Control as="select" onChange={(e) => setfinstatus(e.target.value)}>
                    <option></option>
                    <option>APL</option>
                    <option>BPL</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="maritalStatus">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Control as="select" onChange={(e) => setmaritalstat(e.target.value)}>
                    <option></option>
                    <option>Married</option>
                    <option>Unmarried</option>
                    <option>Divorced</option>
                    <option>Separated</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="school">
                  <Form.Label>School</Form.Label>
                  <Form.Control as="select" onChange={(e) => setschool(e.target.value)} >
                    <option></option>
                    <option>Government</option>
                    <option>Aided</option>
                    <option>Private</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="religion">
                  <Form.Label>Religion</Form.Label>
                  <Form.Control type="text" maxLength={20} onChange={(e) => setreligion(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="data-container">
        <div className="card " style={{ boxShadow: "10px 8px 0px rgb(42, 38, 38)" }}>
          <div className="card-header"><h3>Family Details</h3></div>
          <div className="card-body">
            <Row>
              <Col md={6}>
                <Form.Group controlId="fEducation">
                  <Form.Label>Father's Education</Form.Label>
                  <Form.Control type="text" maxLength={25} onChange={(e) => setfeducation(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="fOccupation">
                  <Form.Label>Father's Occupation</Form.Label>
                  <Form.Control type="text" maxLength={25} onChange={(e) => setfoccupation(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="mEducation">
                  <Form.Label>Mother's Education</Form.Label>
                  <Form.Control type="text" maxLength={25} onChange={(e) => setmeducation(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="mOccupation">
                  <Form.Label>Mother's Occupation</Form.Label>
                  <Form.Control type="text" maxLength={25} onChange={(e) => setmoccupation(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="data-container">
        <div className="card " style={{ boxShadow: "10px 8px 0px rgb(42, 38, 38)" }}>
          <div className="card-header"><h3>Information</h3></div>
          <div className="card-body">
		  <Row>
              <Col md={12}>
                <Form.Group controlId="problem">
                  <Form.Label>Problem</Form.Label>
                  <Form.Control as="textarea" onChange={probcalculate} maxLength={200} required rows={5}>    
                  </Form.Control>
				  <span style={{ float: 'right', color: 'gray'}} >
                  {count1}/200
				</span>
                </Form.Group>
              </Col>
            </Row>
			<Row>
              <Col md={12}>
                <Form.Group controlId="history">
                  <Form.Label>History of the Problem</Form.Label>
                  <Form.Control as="textarea" onChange={histcalculate} maxLength={500} rows={6}>   
                  </Form.Control>
				  <span style={{ float: 'right', color: 'gray'}} >
                  {count2}/500
				</span>
                </Form.Group>
              </Col>
            </Row>
			<Row>
              <Col md={12}>
                <Form.Group controlId="intervention">
                  <Form.Label>Intervention</Form.Label>
                  <Form.Control as="textarea" onChange={interventioncalculate} maxLength={100} rows={3}>
                  </Form.Control>
				  <span style={{ float: 'right', color: 'gray'}} >
                  {count3}/100
				</span>
                </Form.Group>
              </Col>
            </Row>
			<Row>
              <Col md={12}>
                <Form.Group controlId="challenges">
                  <Form.Label>Challenges by counsellor</Form.Label>
                  <Form.Control as="textarea" onChange={challengecalculate} maxLength={200} rows={4}>    
                  </Form.Control>
				  <span style={{ float: 'right', color: 'gray'}} >
                  {count4}/200
				</span>
                </Form.Group>
              </Col>
            </Row>
			
            <Row>
              <Col md={12}>
                <Form.Group controlId="session">
                  <Form.Label>Number of Follow-up Sessions</Form.Label>
                  <Form.Control type="number" onChange={(e) => setsession(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            
			<Row>
              <Col md={12}>
                <Form.Group controlId="referal">
                  <Form.Label>Referral service</Form.Label>
				  <Form.Control as="textarea" onChange={referralcalculate} maxLength={100} rows={3}>
                  </Form.Control>
				  <span style={{ float: 'right', color: 'gray'}} >
                  {count5}/100
				</span>
                </Form.Group>
              </Col>
            </Row>
			<Row>
              <Col md={6}>
                <Form.Group controlId="outcome">
                  <Form.Label>Outcome</Form.Label>
                  <Form.Control as="textarea" onChange={outcomecalculate} maxLength={250} rows={4}>   
                  </Form.Control>
				  <span style={{ float: 'right', color: 'gray'}} >
                  {count6}/250
				</span>
                </Form.Group>
              </Col>
			  <Col md={6}>
                <Form.Group controlId="remarks">
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control as="textarea" onChange={remarkcalculate} maxLength={200} rows={4}>   
                  </Form.Control>
				  <span style={{ float: 'right', color: 'gray'}} >
                  {count7}/200
				</span>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="status">
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" onChange={(e) => setstatus(e.target.value)} required>
                    <option></option>
                    <option>Pending</option>
                    <option>Completed</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
			
			<br></br>
			<center>
			<Button className="buttons btn btn-success" type="reset" style={{ marginRight: "20px" }} onClick={newdata}>
        Submit
      </Button>
      <Button className="buttons btn btn-danger" type="reset" style={{ marginRight: "20px" }}>
        Reset
      </Button>
	  </center>
          </div>
		  
        </div>
		
      </div>

      
    </Form>

	); 
} 

export default Details;
