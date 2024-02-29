
import { useEffect ,useState} from "react";
import LoadExternalScript from "../../LoadExternalScript";
// import { UnloadExternalScript } from "../../UnloadExternalScript";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Patients()
{
    useEffect(()=>{
    LoadExternalScript(['https://code.jquery.com/jquery-3.7.0.js','https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js','https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js','https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js','https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js','../../../counseljs/tablescript.js']);
    // UnloadExternalScript('counseljs/tablescript.js')
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
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>Delete</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011-04-25</td>
                                        <td>$320,800</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                    </tr>
                                    <tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>63</td>
                                        <td>2011-07-25</td>
                                        <td>$170,750</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Ashton Cox</td>
                                        <td>Junior Technical Author</td>
                                        <td>San Francisco</td>
                                        <td>66</td>
                                        <td>2009-01-12</td>
                                        <td>$86,000</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Cedric Kelly</td>
                                        <td>Senior Javascript Developer</td>
                                        <td>Edinburgh</td>
                                        <td>22</td>
                                        <td>2012-03-29</td>
                                        <td>$433,060</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Airi Satou</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>33</td>
                                        <td>2008-11-28</td>
                                        <td>$162,700</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Brielle Williamson</td>
                                        <td>Integration Specialist</td>
                                        <td>New York</td>
                                        <td>61</td>
                                        <td>2012-12-02</td>
                                        <td>$372,000</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Herrod Chandler</td>
                                        <td>Sales Assistant</td>
                                        <td>San Francisco</td>
                                        <td>59</td>
                                        <td>2012-08-06</td>
                                        <td>$137,500</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Rhona Davidson</td>
                                        <td>Integration Specialist</td>
                                        <td>Tokyo</td>
                                        <td>55</td>
                                        <td>2010-10-14</td>
                                        <td>$327,900</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Colleen Hurst</td>
                                        <td>Javascript Developer</td>
                                        <td>San Francisco</td>
                                        <td>39</td>
                                        <td>2009-09-15</td>
                                        <td>$205,500</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Sonya Frost</td>
                                        <td>Software Engineer</td>
                                        <td>Edinburgh</td>
                                        <td>23</td>
                                        <td>2008-12-13</td>
                                        <td>$103,600</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Jena Gaines</td>
                                        <td>Office Manager</td>
                                        <td>London</td>
                                        <td>30</td>
                                        <td>2008-12-19</td>
                                        <td>$90,560</td>
                                        <td><button className='btn btn-primary'>delete</button></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Quinn Flynn</td>
                                        <td>Support Lead</td>
                                        <td>Edinburgh</td>
                                        <td>22</td>
                                        <td>2013-03-03</td>
                                        <td>$342,000</td>
                                        <td><button className='btn btn-primary' >delete</button></td>
                                        
                                    </tr>
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        
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