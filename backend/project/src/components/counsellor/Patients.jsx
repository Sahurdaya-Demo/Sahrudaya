
import { useEffect ,useState} from "react";
import LoadExternalScript from "../../LoadExternalScript";
// import { UnloadExternalScript } from "../../UnloadExternalScript";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import view from "./Data";
function Patients()
{
    const[profile,setprofile]=useState([])
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    useEffect(()=>{
    LoadExternalScript(['https://code.jquery.com/jquery-3.7.0.js','https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js','https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js','https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js','https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js','../../../counseljs/tablescript.js']);
    // UnloadExternalScript('counseljs/tablescript.js')
    view(setprofile)
    
    },[])
// const[Records,setRecords]=useState([])
// console.log(profile[1])
  
   
},[])

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
    const [disableButton,setDisableButton] = useState(false)


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {setShow(false);setDisableButton(false)};


    const handleeditClick = () => {
        setDisableButton(!disableButton)
    };
    const handlesaveClick = () => {
        setDisableButton(!disableButton)
    };
    
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
                                        
                                        <th>Delete</th>
                                        
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
                                        <td><button className='btn btn-danger' onClick={()=>{console.log(record.id)}}>delete</button></td>
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
                                        <th>Delete</th>
                                        
                                    </tr>
                                </tfoot>
                           </table>
                        
                           </div>
                        </div>
                    <button className='btn btn-warning' onClick={handleShow}>Edit</button>
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton onClick={handleClose}>
                            <Modal.Title>Edit Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='p-2'style={{backgroundColor:"#75E3B9",opacity:".7",filter:"drop-shadow(4px 4px 2px )"}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder=""
                                    disabled={!disableButton}
                                    autoFocus
                                />
                                <Form.Label>Place of Counselling</Form.Label>
                                <select className="form-select" onChange={(e) => {setplace(e.target.value);}} required disabled={!disableButton}>
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
                                    required
                                    autoFocus
                                    disabled={!disableButton}
                                />
                                </div>
					            <div className="col-md-6">
                                <Form.Label>Gender</Form.Label>
                                <select className="form-select" onChange={(e) => {setgender(e.target.value);}} disabled={!disableButton}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                                </div>
                                </div>
                                </Form.Group>
                                <Form.Group>
                                <div className="row">
					            <div className="col-md-6">
                                <Form.Label>Financial Status</Form.Label>
                                <select className="form-select" onChange={(e) => {setfinstatus(e.target.value);}} disabled={!disableButton}>
                                    <option value="apl">APL</option>
                                    <option value="bpl">BPL</option>
                                </select>
                                
                                
                                </div>
                                <div className="col-md-6">
                                
                                <Form.Label>Martial Status</Form.Label>
                                <select className="form-select" onChange={(e) => {setmaritalstat(e.target.value);}} disabled={!disableButton}>
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
                                <select className="form-select" onChange={(e) => {setschool(e.target.value);}} disabled={!disableButton}>
                                    <option value="govt">Government</option>
                                    <option value="aided">Aided</option>   
                                    <option value="aided">Private</option>                           
                                </select>
                                <Form.Label>Father's Occupation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setfoccupation(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                />
                                <Form.Label>Father's Education</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setfeducation(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                />
                                <Form.Label>Mother's Occupation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setmoccupation(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                />
                                <Form.Label>Mother's Education</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setmeducation(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
                                />
                                <Form.Label>Religion</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={20}
                                    onChange={(e) => {setreligion(e.target.value);}}
                                    autoFocus
                                    disabled={!disableButton}
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
                                />
                                <Form.Label>History of Problem</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={4}  
                                maxLength={500} 
                                disabled={!disableButton}
                                onChange={(e)=>{sethistory(e.target.value);}}
                                />
                                <Form.Label>Intervention</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control"
                                rows={2}
                                maxLength={100}
                                disabled={!disableButton}
                                onChange={(e)=>{setintervention(e.target.value);}}
                                />
                                <Form.Label>Challenges by Counsellor</Form.Label>
                                <textarea
                                className="col-12 rounded form-control" 
                                rows={2}
                                maxLength={200}
                                disabled={!disableButton}
                                onChange={(e)=>{setchallenge(e.target.value);}}
                                />
                                <Form.Label>No. of follow up sessions</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder=" "
                                    onChange={(e) => {setsession(e.target.value);}}
                                    disabled={!disableButton}
                                    autoFocus
                                />
                                <Form.Label>Referal Service</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={2}
                                maxLength={100}
                                disabled={!disableButton}
                                onChange={(e) => {setreferral(e.target.value);}}
                                />
                                <Form.Label>Outcome</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={2} 
                                maxLength={250}
                                disabled={!disableButton}
                                onChange={(e) => {setoutcome(e.target.value);}}
                                />
                                <Form.Label>Remarks</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={3} 
                                maxLength={200}
                                onChange={(e) => {setremarks(e.target.value);}}
                                disabled={!disableButton}
                                />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Status</Form.Label>
                                <select className="form-select" onChange={(e) => {setstatus(e.target.value);}} required>
                                    <option value="pending">Pending</option>
                                    <option value="Completed">Completed</option>                            
                                </select>
                                </Form.Group>
                                <Modal.Footer>
                                <Form.Group className="d-flex justify-content-end align-content-end">
                                <Button variant="btn btn-info py-1 m-1 "  onClick={handleeditClick} disabled={disableButton} > Edit</Button>
                                <Button className="btn btn-success py-1 m-1" onClick={handlesaveClick} disabled={!disableButton}>Save</Button>
                                <Button className="btn btn-danger py-1 m-1" onClick={handleClose}>Close</Button>
                        </Form.Group>
                        </Modal.Footer>
                        </Modal.Body>
                    </Modal> 
      </>
    )


}
export default Patients