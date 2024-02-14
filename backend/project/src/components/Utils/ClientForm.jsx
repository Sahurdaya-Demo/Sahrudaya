
import React, { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import useUnload from "../../useUnload";

function Form() { 
	const navigate=useNavigate();
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
   
		formField.append('date',date)
		formField.append('place',place)
		formField.append('name',name)
		formField.append('age',Age)
		formField.append('Gender',Gender)
		formField.append('f_status',f_status)
		formField.append('m_status',m_status)
		formField.append('School',School)
		formField.append('religion',religion)
		formField.append('f_education',f_education)
		formField.append('f_occupation',f_occupation)
		formField.append('m_education',m_education)
		formField.append('m_occupation',m_occupation)
		formField.append('problem',problem)
		formField.append('history',history)
		formField.append('Intervention',Intervention)
		formField.append('challenge',challenge)
		formField.append('follow_ups',follow_ups)
		formField.append('referral',referral)
		formField.append('outcome',outcome)
		formField.append('remarks',remarks)

		
   
	//    await axios({
	// 	   method: 'post',
	// 	   url: 'http://127.0.0.1:8000/api/',
	// 	   data: formField
	//    }).then(response=>{
	// 	   console.log(response.data)
		   
	//    })
	   }
	 
	return ( 
		
        <>
		<br></br>
		<div className="card" style={{boxShadow: "10px 8px 0px rgb(42, 38, 38)"}}>
			<div className="card-body ">
				  <div className="row">
					<div className="col-md-6">
                        <label>Date</label>
		                <input type="date" className="form-control" style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}} onChange={(e)=>setdate(e.target.value)}/>
                      </div>
                      <div className="col-md-6">
                        <label>Place of Counselling</label>
						<select  className="form-select" onChange={(e)=>setplace(e.target.value)}>
						   <option> </option>
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
                      </div>
					</div>
					</div>
					</div>

					
					<div className="data-container">
					<div className="card " style={{boxShadow: "10px 8px 0px rgb(42, 38, 38)"}}>
						<div className="card-header"><h3>Personal Details</h3></div>
					<div className="card-body">
                    <div className="row">
					<div className="col-md-8">
                        <label>Name</label>
		                <input type="text" className="form-control" maxLength={30}style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}} onChange={(e)=>setname(e.target.value)} required />
                      </div>
                      <div className="col-md-4">
                        <label>Age</label>
						<input type="number" className="form-control" style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}} onChange={(e)=>setage(e.target.value)} required />
                      </div>
					</div>
					

				
					<div className="row">
                      <div className="col-md-4">
                        <label>Gender</label>
		                <select className="form-select" onChange={(e)=>setgender(e.target.value)}>
			               <option>Male</option>
			               <option>Female</option>
		                </select>
                      </div>
                      <div className="col-md-4">
                        <label>Family financial status</label>
						<select className="form-select" onChange={(e)=>setfinstatus(e.target.value)}>
			               <option>APL</option>
			               <option>BPL</option>
		                </select>
                      </div>
					  <div className="col-md-4">
						<label>Marital Status</label>
						<select className="form-select"onChange={(e)=>setmaritalstat(e.target.value)}>
			               <option>Married</option>
						   <option>Unmarried</option>
			               <option>Divorced</option>
						   <option>Separate</option>
		                </select>
						</div>
                    </div>


					<div className="row">
                      <div className="col-md-4">
                        <label>School</label>
						<select className="form-select" onChange={(e)=>setschool(e.target.value)} >
			               <option>Government</option>
			               <option>Aided</option>
						   <option>Private</option>
		                </select>
                      </div>
					  <div className="col-md-4">
                        <label>Religion</label>
						<input type="text" className="form-control" maxLength={20} style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}} onChange={(e)=>setreligion(e.target.value)}/>
                      </div>
					</div>
					</div>
                   </div>
				   </div>

				   <div className="data-container">
				   <div className="card " style={{boxShadow: "10px 8px 0px rgb(42, 38, 38)"}}>
				   <div className="card-header"><h3>Family Details</h3></div>
				   <div className="card-body">
					<div className="row">
					<div className="col-md-6">
                        <label>Father's Education</label>
		                <input type="text" className="form-control" maxLength={30} style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}} onChange={(e)=>setfeducation(e.target.value)}/>
                      </div>
                      <div className="col-md-6">
                        <label>Father's Occupation</label>
						<input type="text" className="form-control" maxLength={30}  style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}}onChange={(e)=>setfoccupation(e.target.value)}/>
                      </div>
					</div>
					<div className="row">
					<div className="col-md-6">
                        <label>Mothers's Education</label>
		                <input type="text" className="form-control"  maxLength={30} style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}} onChange={(e)=>setmeducation(e.target.value)}/>
                      </div>
                      <div className="col-md-6">
                        <label>Mother's Occupation</label>
						<input type="text" className="form-control" maxLength={30} style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}} onChange={(e)=>setmoccupation(e.target.value)}/>
                      </div>
					</div>
				</div>
				</div>
				</div>

				<div className="data-container">	
				<div className="card " style={{boxShadow: "10px 8px 0px rgb(42, 38, 38)"}}>
				<div className="card-header"><h3>Information</h3></div>
				<div className="card-body">
				    <div className="row">
                      <div className="col-md-12">
                        <label>Problem</label>
						<span style={{ float: 'right', color: 'gray' }}>
                        {count1}/200
                        </span>
						<textarea 
						name="problem"
						id="problem"
						cols="3"
						rows="5"
						maxLength={200}
						onChange={ probcalculate }
						className="form-control"
						required 
						style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}}
						// onChange={(e)=>setproblem(e.target.value)}
				        />
                      </div>
					</div>
    
					<div className="row">
                      <div className="col-md-12">
                        <label>History of the Problem (If any)</label>
						<span style={{ float: 'right', color: 'gray' }}>
                        {count2}/500
                        </span>
						<textarea 
						name="history"
						id="history"
						cols="3"
						rows="10"
						maxLength={500}
						className="form-control"
						style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}}
						onChange={ histcalculate }
				        />
                      </div>
					</div>

					

                    

					<div className="row">
                      <div className="col-md-12">
                        <label>Intervention</label>
						<span style={{ float: 'right', color: 'gray' }}>
                        {count3}/200
                        </span>
						<textarea 
						name="Intervention"
						id="Intervention"
						cols="3"
						rows="5"
						className="form-control"
						maxLength={200}
						required 
						style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}}
						onChange={interventioncalculate}
				        />
                      </div>
					</div>

                    
					<div className="row">
                      <div className="col-md-12">
                        <label>Challenges by Counsellor</label>
						<span style={{ float: 'right', color: 'gray' }}>
                        {count4}/200
                        </span>
						<textarea 
						name="challenge"
						id="challenge"
						cols="3"
						rows="5"
						maxLength={200}
						className="form-control"
						required 
						style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}}
						onChange={challengecalculate}
				        />
                      </div>
					</div>


					<div className="row">
                      <div className="col-md-4">
                        <label>Number of Follow-ups Session</label>
						<input type="number" className="form-control" style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}} onChange={(e)=>setsession(e.target.value)}/>
                      </div>
					</div>


					<div className="row">
                      <div className="col-md-12">
                        <label>Referral service</label>
						<span style={{ float: 'right', color: 'gray' }}>
                        {count5}/200
                        </span>
						<textarea 
						name="Referral"
						id="Referral"
						cols="2"
						rows="4"
						maxLength={200}
						className="form-control"
						required 
						style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}}
						onChange={referralcalculate}
				        />
                      </div>
					</div>


					<div className="row">
					<div className="col-md-6">
                        <label>Outcome</label>
						<span style={{ float: 'right', color: 'gray' }}>
                        {count6}/200
                        </span>
						<textarea 
						name="outcome"
						id="outcome"
						cols="2"
						rows="6"
						maxLength={200}
						className="form-control"
						required 
						style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}}
						onChange={outcomecalculate}
				        />
                      </div>
                      <div className="col-md-6">
                        <label>Remarks</label>
						<span style={{ float: 'right', color: 'gray' }}>
                        {count7}/200
                        </span>
						<textarea 
						name="remarks"
						id="remarks"
						cols="2"
						rows="6"
						maxLength={200}
						className="form-control"
						required 
						style={{boxShadow: "1px 1px 3px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset"}}
						onChange={remarkcalculate}
				        />
                      </div>
					</div>
                    <center>
						<br></br>
					<button className="buttons" type="reset" value="reset" style={{marginRight:"20px"}} > 
						Reset 
					</button> 
					<button className="buttons" type="submit" value="Submit" style={{marginRight:"20px"}} onClick={newdata}> 
						Submit 
					</button> 
              </center>
			</div>
		</div> 
</div>
</>
	); 
} 

export default Form;
