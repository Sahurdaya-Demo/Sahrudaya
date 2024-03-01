
import { useEffect ,useState} from "react";
import LoadExternalScript from "../../LoadExternalScript";
// import { UnloadExternalScript } from "../../UnloadExternalScript";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import view from "./Data";
import axios from "axios";
function Patients()
{
    const[profile,setprofile]=useState([])
    
    useEffect(()=>{
    LoadExternalScript(['https://code.jquery.com/jquery-3.7.0.js','https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js','https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js','https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js','https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js','../../../counseljs/tablescript.js']);
     setInterval(()=>{
    view(setprofile)
        },5000)
    view(setprofile)
    
    },[])

    const[id,setid]=useState("")
    const[date,setdate]=useState("")
    const[place,setplace]=useState("")
    const[name,setname]=useState("")
    const[Age, setage] = useState(0);
    const[Gender, setgender] = useState("")
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
    const[challenge,setchallenge]=useState("")
    const[follow_ups,setsession]=useState("")
    const[referral,setreferral]=useState("")
    const[outcome,setoutcome]=useState("")
    const[remarks,setremarks]=useState("")
    const[status,setstatus]=useState("")
    const [disableButton,setDisableButton] = useState(false)


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {setShow(false);setDisableButton(false);}
    
     const update=async(id)=>{
    let formField = new FormData()
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
    await axios({
      method: 'PUT',
      url:`http://127.0.0.1:8000/formsubmit/${id}/`,
      data:formField,
    }).then(response=>{
      // console.log(response.data);
      handleClose()
    }
    )
  }
  const delrecord=async(id)=>{
    if (window.confirm('Are you sure you wish to delete this item?')){
    try{
    await axios({
        method: 'delete',
        url:`http://127.0.0.1:8000/formsubmit/${id}/`,
      }).then(response=>{
        console.log(response.data);
        alert('Record Deleted Successfully!!')
      }
      )}
      catch{}
    }

  }

    const handleeditClick = () => {
        setDisableButton(!disableButton)
    };
    const handlesaveClick = () => {
        setDisableButton(!disableButton)
    };
    const getformdetails=async(id)=>{
        
        const result=await axios.get(`http://127.0.0.1:8000/formsubmit/${id}`)
        console.log(result.data)
        setdate(result.data.date)
        setid(result.data.id)
        setname(result.data.name)
        setage(result.data.age)
        setgender(result.data.gender)
        setfinstatus(result.data.finacial_status)
        setmaritalstat(result.data.marital_status)
        setschool(result.data.school)
        setreligion(result.data.religion)
        setfeducation(result.data.fathers_education)
        setfoccupation(result.data.fathers_occupation)
        setmeducation(result.data.mothers_education)
        setmoccupation(result.data.mothers_occupation)
        sethistory(result.data.history_of_problem)
        setproblem(result.data.problem)
        setintervention(result.data.intervention)
        setchallenge(result.data.challenges_by_counsellor)
        setsession(result.data.number_of_followup_sections)
        setreferral(result.data.referral_service)
        setoutcome(result.data.outcome)
        setremarks(result.data.remarks)
        setstatus(result.data.status);
        setplace(result.data.place_of_counselling)
    }
    
    return(
        <>
        <div className="card mb-4 mt-2">
                            <div className="card-header">
                                <i className="fa fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div className="card-body">
                            <table id="counsel" className="table table-striped" style={{width:'100%'}}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Date</th>
                                        <th>Place Of Couneslling</th>
                                        <th>Problem</th>
                                        <th>Status</th>
                                        
                                        <th>Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {profile[1]?.map(record => 
                                        <tr key={record.id}>
                                        <td>{record.name}</td>
                                        <td>{record.gender}</td>
                                        <td>{record.date}</td>
                                        <td>{record.place_of_counselling}</td>
                                        <td>{record.problem}</td>
                                        <td>{record.status}</td>
                                        <td><button className='btn btn-danger' onClick={()=>{delrecord(record.id)}}>Delete</button><button className='btn btn-warning ms-2' style={{color:'white'}} onClick={()=>{handleShow();getformdetails(record.id)}}>View</button></td>
                                        </tr>
                                        )}
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                    <th>Name</th>
                                        <th>Gender</th>
                                        <th>Date</th>
                                        <th>Place Of Couneslling</th>
                                        <th>Problem</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        
                                    </tr>
                                </tfoot>
                           </table>
                        
                           </div>
                        </div>
                    
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton onClick={handleClose} style={{backgroundColor:"#75E3B9",opacity:".7",border:'none'}}>
                            <Modal.Title>Edit Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='p-2'style={{backgroundColor:"#75E3B9",opacity:".7"}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder=""
                                    value={date||''}
                                     onChange={(e) => setdate(e.target.value)}
                                    disabled={!disableButton}
                                    autoFocus
                                />
                                <Form.Label>Place of Counselling</Form.Label>
                                <select className="form-select" onChange={(e) => {setplace(e.target.value);}} required disabled={!disableButton} value={place||""}>
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
                                </select>
                                </Form.Group>
                                <Form.Group>
                            <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    maxLength={100}
                                    onChange={(e) => {setname(e.target.value);}}
                                    required
                                    value={name||""}
                                    disabled={!disableButton}
                                    autoFocus
                                />
                                </Form.Group>
                                <Form.Group>
                                <div className="row">
					            <div className="col-md-6">
                                
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder=""
                                    onChange={(e) => {setage(e.target.value);}} 
                                    value={Age||""}
                                    required
                                    autoFocus
                                    disabled={!disableButton}
                                />
                                </div>
					            <div className="col-md-6">
                                <Form.Label>Gender</Form.Label>
                                <select className="form-select" onChange={(e) => {setgender(e.target.value);}} disabled={!disableButton} value={Gender||""}>
                                    <option></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                                </div>
                                </div>
                                </Form.Group>
                                <Form.Group>
                                <div className="row">
					            <div className="col-md-6">
                                <Form.Label>Financial Status</Form.Label>
                                <select className="form-select" onChange={(e) => {setfinstatus(e.target.value);}} disabled={!disableButton} value={f_status||""}>
                                    <option></option>
                                    <option value="APL">APL</option>
                                    <option value="BPL">BPL</option>
                                </select>
                                
                                
                                </div>
                                <div className="col-md-6">
                                
                                <Form.Label>Martial Status</Form.Label>
                                <select className="form-select" onChange={(e) => {setmaritalstat(e.target.value);}} disabled={!disableButton} value={m_status||""}>
                                    <option></option>
                                <option>Married</option>
                                <option>Single</option>
                                <option>Divorcee</option>
                                <option>Widower</option>
                                <option>Widow</option>
                                <option>Separated</option>
                                </select>
                                </div>
                                </div>
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>School</Form.Label>
                                <select className="form-select" onChange={(e) => {setschool(e.target.value);}} disabled={!disableButton} value={School||""}>
                                    <option></option>
                                    <option value="Government">Government</option>
                                    <option value="Aided">Aided</option>   
                                    <option value="Private">Private</option>                           
                                </select>
                                <Form.Label>Father's Occupation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setfoccupation(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                    value={f_occupation||""}
                                />
                                <Form.Label>Father's Education</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setfeducation(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                    value={f_education||""}
                                />
                                <Form.Label>Mother's Occupation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setmoccupation(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                    value={m_occupation||""}
                                />
                                <Form.Label>Mother's Education</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setmeducation(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                    value={m_education||""}
                                />
                                <Form.Label>Religion</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={20}
                                    onChange={(e) => {setreligion(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                    value={religion||""}
                                />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Problem</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={3}  
                                maxLength={200} 
                                onChange={(e)=>{setproblem(e.target.value);}}
                                required
                                disabled={!disableButton}
                                value={problem||""}
                                />
                                <Form.Label>History of Problem</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={4}  
                                maxLength={500} 
                                disabled={!disableButton}
                                onChange={(e)=>{sethistory(e.target.value);}}
                                value={history||""}
                                />
                                <Form.Label>Intervention</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control"
                                rows={2}
                                maxLength={100}
                                disabled={!disableButton}
                                onChange={(e)=>{setintervention(e.target.value);}}
                                value={Intervention||""}
                                />
                                <Form.Label>Challenges by Counsellor</Form.Label>
                                <textarea
                                className="col-12 rounded form-control" 
                                rows={2}
                                maxLength={200}
                                disabled={!disableButton}
                                onChange={(e)=>{setchallenge(e.target.value);}}
                                value={challenge||""}
                                />
                                <Form.Label>No. of follow up sessions</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder=" "
                                    onChange={(e) => {setsession(e.target.value);}}
                                    disabled={!disableButton}
                                    value={follow_ups||""}
                                    autoFocus
                                />
                                <Form.Label>Referal Service</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={2}
                                maxLength={100}
                                disabled={!disableButton}
                                onChange={(e) => {setreferral(e.target.value);}}
                                value={referral||""}
                                />
                                <Form.Label>Outcome</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={2} 
                                maxLength={250}
                                disabled={!disableButton}
                                onChange={(e) => {setoutcome(e.target.value);}}
                                value={outcome||""}
                                />
                                <Form.Label>Remarks</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={3} 
                                maxLength={200}
                                onChange={(e) => {setremarks(e.target.value);}}
                                disabled={!disableButton}
                                value={remarks||""}
                                />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Status</Form.Label>
                                <select className="form-select" onChange={(e) => {setstatus(e.target.value);}} required value={status||""} disabled={!disableButton}>
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>                           
                                </select>
                                </Form.Group>
                                <Modal.Footer>
                                <Form.Group className="d-flex justify-content-end align-content-end">
                                <Button variant="btn btn-warning py-1 m-1 "  onClick={handleeditClick} disabled={disableButton} style={{color:'white'}}> Edit</Button>
                                <Button variant="btn btn-success py-1 m-1" onClick={()=>{handlesaveClick();update(id);}} disabled={!disableButton}>Save</Button>
                                <Button variant="btn btn-danger py-1 m-1" onClick={handleClose}>Close</Button>
                        </Form.Group>
                        </Modal.Footer>
                        </Modal.Body>
                    </Modal> 
      </>
    )


}
export default Patients