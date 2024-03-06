import LoadExternalScript from '../../LoadExternalScript';
import PureCounter from "@srexi/purecounterjs";
import { useEffect, useState} from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
function Admindash()
{
    const [show, setShow] = useState(false);
    const [showA, setShowA] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {setShow(false);toggleCloseA()};
    const toggleShowA = () => {setShowA(true)};
    const toggleCloseA = () => {setShowA(false)};
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
    const[data,setdata]=useState([])
    const [pending,setpending]=useState([]);
    const [completed,setcompleted]=useState([]);
    const [overall, setoverall] = useState([]);
    const [males, setmales] = useState([]);
    const [females, setfemales] = useState([]);
    const [others, setothers] = useState([]);
    
    useEffect(()=>{
        LoadExternalScript(['https://code.jquery.com/jquery-3.7.0.js','https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js','https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js','https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js','https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js','adminjs/tablescript.js']);
        new PureCounter();
        retrieve()
      },[])
      const retrieve=async()=>{
        const response= await fetch(`http://127.0.0.1:8000/formsubmit/`)
        const jsonData = await response.json();
        setdata(jsonData)
        for(let i=0;i<12;i++){
            males.push(jsonData.filter(record=>record.gender==='Male'&&new Date(record.date).getMonth()===i).length)
            females.push(jsonData.filter(record=>record.gender==='Female'&&new Date(record.date).getMonth()===i).length)
            others.push(jsonData.filter(record=>record.gender==='Others'&&new Date(record.date).getMonth()===i).length)
        
        }
        for(let i=0;i<12;i++){
            pending.push(jsonData.filter(record=>record.status==='Pending'&&new Date(record.date).getMonth()===i).length)
            completed.push(jsonData.filter(record=>record.status==='Completed'&&new Date(record.date).getMonth()===i).length)
            overall.push(jsonData.filter(record=>new Date(record.date).getMonth()===i).length)
        
        }
    }
    const searchemail=async(email)=>{
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/emailsearch/',
            data: {'email':email}
        }).then(response=>{
            if(response.data.errors)
            {
                toggleShowA()
                // console.log('not found')
            }
        })
    }
      const getformdetails=async(id)=>{
        
        const result=await axios.get(`http://127.0.0.1:8000/formsubmit/${id}`)
        // console.log(result.data)
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
  defaults.maintainAspectRatio=false;
  defaults.responsive=true;

  const datasess = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Completed',
      fill: false,
      lineTension: 0.1,
      data: [completed[0],completed[1],completed[2],completed[3],completed[4],completed[5],completed[6],completed[7],completed[8],completed[9],completed[10],completed[11]]
      },
    {
      label: 'Pending',
      fill: false,
      lineTension: 0.1,
       data: [pending[0],pending[1],pending[2],pending[3],pending[4],pending[5],pending[6],pending[7],pending[8],pending[9],pending[10],pending[11]]
    },
    {
      label: 'Overall',
      fill: false,
      lineTension: 0.1,
       data: [overall[0],overall[1],overall[2],overall[3],overall[4],overall[5],overall[6],overall[7],overall[8],overall[9],overall[10],overall[11]]
    },
  ]
};

    return(
        <>
        <div className="row mt-lg-4" style={{alignItems:'center',justifyContent:'center'}}>
                            <h1>Centers</h1>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Vypin-Rajagiri Sea Shore School</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Kakkanad</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Thevara-SH College(East Campus)</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Thevara-Higher Secondary School</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Thevara-SH UP</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Thevara-SH High School</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Karukutty-Christ the King monastery Church </div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Kanjoor</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Eloor-SHJ UP School</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className="card-body">
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="col-lg-9 col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Kottarapalli Amala Public School</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4">
                                    <div className="card-body">
                                        <div className='d-flex flex-lg-row flex-column align-items-center'>
                                            <div className="col-lg-9 col-lg-9 mb-3 mb-lg-0" style={{ fontWeight: 600, fontSize: '0.8rem' }}>Manappuram St.Theresa's high school</div>
                                            <div className='col-lg-4'>
                                                <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6" style={{ fontFamily: 'Poppins-Regular, sans-serif', fontWeight: 600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card cardey text-white mb-4 " >
                                <div className='card-body'>
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className=" col-lg-9 col-lg-9 mb-3 mb-lg-0" style={{fontWeight:600,fontSize:'0.8rem'}}>Pothy</div>
                                    <div className='col-lg-4'>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 " style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600,textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)"}}></span> 
                                    </div>
                                    </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fa fa-chart-area me-1"></i>
                                        Gender Based Sessions Chart
                                    </div>
                                    <div className="card-body" style={{position:'relative'}}>
                                         
                                        <Bar
                                            data={{
                                                labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"],
                                                datasets:[
                                                    {
                                                        label:"MALES",
                                                        data:[males[0],males[1],males[2],males[3],males[4],males[5],males[6],males[7],males[8],males[9],males[10],males[11]],
                                                        // data:[ar]
                                                    },
                                                    {
                                                        label:"FEMALES",
                                                        data:[females[0],females[1],females[2],females[3],females[4],females[5],females[6],females[7],females[8],females[9],females[10],females[11]],
                                                    },
                                                    {
                                                        label:"OTHERS",
                                                        data:[others[0],others[1],others[2],others[3],others[4],others[5],others[6],others[7],others[8],others[9],others[10],others[11]],
                                                    },
                                                ],
                                            }}
                                            style={{height:'350px'}}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fa fa-chart-area me-1"></i>
                                        Sessions Chart
                                    </div>
                                    <div className="card-body" style={{position:'relative'}}>
                                     <Line data={datasess}   style={{height:'350px'}}/>
                                    </div>
                                    </div>
                                    </div>
                                    
                        </div> 
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fa fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div className="card-body">
                            <table id="example" className="table table-striped" style={{width:'100%'}}>
                            <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Name of Couneslor</th>
                                        <th>Gender</th>
                                        <th>Date</th>
                                        <th>Place Of Couneslling</th>
                                        <th>Problem</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {data?.map(record => 
                                        <tr key={record.id}>
                                        <td>{record.name}</td>
                                        <td>{record.nameofcounsellor}</td>
                                        <td>{record.gender}</td>
                                        <td>{record.date}</td>
                                        <td>{record.place_of_counselling}</td>
                                        <td>{record.problem}</td>
                                        <td>{record.status}</td>
                                        <td>
                                        <div className='button-group'>
                                        <button className='btn btn-danger' onClick={()=>{delrecord(record.id)}}>Delete</button>
                                        <button className='btn btn-warning ms-2' style={{color:'white'}} onClick={()=>{handleShow();searchemail(record.email);getformdetails(record.id);}}>View</button>
                                        </div>
                                        </td>
                                        </tr>
                                        )}
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                    <th>Name</th>
                                    <th>Name of Couneslor</th>
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
                        <Toast show={showA} onClose={toggleCloseA} className=' position-absolute  translate-middle-y' style={{zIndex:10000,top:'37%',right:'-75%'}}>
                        <Toast.Header>
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast> 
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
                                    disabled={true}
                                    autoFocus
                                />
                                <Form.Label>Place of Counselling</Form.Label>
                                <select className="form-select" onChange={(e) => {setplace(e.target.value);}} required disabled={true} value={place||""}>
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
                                    disabled={true}
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
                                    disabled={true}
                                />
                                </div>
					            <div className="col-md-6">
                                <Form.Label>Gender</Form.Label>
                                <select className="form-select" onChange={(e) => {setgender(e.target.value);}} disabled={true} value={Gender||""}>
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
                                <select className="form-select" onChange={(e) => {setfinstatus(e.target.value);}} disabled={true} value={f_status||""}>
                                    <option></option>
                                    <option value="APL">APL</option>
                                    <option value="BPL">BPL</option>
                                </select>
                                
                                
                                </div>
                                <div className="col-md-6">
                                
                                <Form.Label>Martial Status</Form.Label>
                                <select className="form-select" onChange={(e) => {setmaritalstat(e.target.value);}} disabled={true} value={m_status||""}>
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
                                <select className="form-select" onChange={(e) => {setschool(e.target.value);}} disabled={true} value={School==='null'?null:School}>
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
                                    disabled={true}
                                    value={f_occupation==='null'?null:f_occupation}
                                />
                                <Form.Label>Father's Education</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setfeducation(e.target.value);}}
                                    autoFocus
                                    disabled={true}
                                    value={f_education==='null'?null:f_education}
                                />
                                <Form.Label>Mother's Occupation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setmoccupation(e.target.value);}}
                                    autoFocus
                                    disabled={true}
                                    value={m_occupation==='null'?null:m_occupation}
                                />
                                <Form.Label>Mother's Education</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={25}
                                    onChange={(e) => {setmeducation(e.target.value);}}
                                    autoFocus
                                    disabled={true}
                                    value={m_education==='null'?null:m_education}
                                />
                                <Form.Label>Religion</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    maxLength={20}
                                    onChange={(e) => {setreligion(e.target.value);}}
                                    autoFocus
                                    disabled={true}
                                    value={religion==='null'?null:religion}
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
                                disabled={true}
                                value={problem||""}
                                />
                                <Form.Label>History of Problem</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={4}  
                                maxLength={500} 
                                disabled={true}
                                onChange={(e)=>{sethistory(e.target.value);}}
                                value={history==='null'?null:history}
                                />
                                <Form.Label>Intervention</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control"
                                rows={2}
                                maxLength={100}
                                disabled={true}
                                onChange={(e)=>{setintervention(e.target.value);}}
                                value={Intervention==='null'?null:Intervention}
                                />
                                <Form.Label>Challenges by Counsellor</Form.Label>
                                <textarea
                                className="col-12 rounded form-control" 
                                rows={2}
                                maxLength={200}
                                disabled={true}
                                onChange={(e)=>{setchallenge(e.target.value);}}
                                value={challenge==='null'?null:challenge}
                                />
                                <Form.Label>No. of follow up sessions</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder=" "
                                    onChange={(e) => {setsession(e.target.value);}}
                                    disabled={true}
                                    value={follow_ups||""}
                                    autoFocus
                                />
                                <Form.Label>Referal Service</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={2}
                                maxLength={100}
                                disabled={true}
                                onChange={(e) => {setreferral(e.target.value);}}
                                value={referral==='null'?null:referral}
                                />
                                <Form.Label>Outcome</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={2} 
                                maxLength={250}
                                disabled={true}
                                onChange={(e) => {setoutcome(e.target.value);}}
                                value={outcome==='null'?null:outcome}
                                />
                                <Form.Label>Remarks</Form.Label>
                                <textarea 
                                className="col-12 rounded form-control" 
                                rows={3} 
                                maxLength={200}
                                onChange={(e) => {setremarks(e.target.value);}}
                                disabled={true}
                                value={remarks==='null'?null:remarks}
                                />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Status</Form.Label>
                                <select className="form-select" onChange={(e) => {setstatus(e.target.value);}} required value={status||""} disabled={true}>
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>                           
                                </select>
                                </Form.Group>
                                <Modal.Footer>
                                <Form.Group className="d-flex justify-content-end align-content-end">
                                {/* <Button variant="btn btn-warning py-1 m-1 "  onClick={handleeditClick} disabled={disableButton} style={{color:'white'}}> Edit</Button> */}
                                {/* <Button variant="btn btn-success py-1 m-1" onClick={()=>{handlesaveClick();update(id);}} disabled={true}>Save</Button> */}
                                <Button variant="btn btn-danger py-1 m-1" onClick={handleClose}>Close</Button>
                                <Button onClick={toggleShowA} className="py-1 m-1">Change Access</Button>
                            
                            
                        </Form.Group>
                        </Modal.Footer>
                        </Modal.Body>
                        
                    </Modal> 
        </>
    )
}
export default Admindash