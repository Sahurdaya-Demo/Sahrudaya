import '../../login/logincss/main.css'
import '../../login/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../login/logincss/util.css'
import portr from '../../login/images/potr.png'
import { useState,useEffect } from 'react';
import LoadExternalScript from '../../../LoadExternalScript';
import axios from 'axios';


function Register({secure})
{
    const[email,setemail]=useState('')
    const[name,setname]=useState('')
    const[password,setpassword]=useState('')
	const[crpassword,setcrpassword]=useState('')
    const[age,setage]=useState('')
    const[phone,setphone]=useState('')
    const[image,setimage]=useState('')
    const[qualification,setqualification]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        
      }
	const Registration=async()=>{
		let type='counsellor'
		  if(email!==''&&email.includes('@')){
			if(password!==''){
				
			let formField = new FormData()
			formField.append('image',image)
			formField.append('name',name)
			formField.append('email',email)
			formField.append('type',type)
			formField.append('age',age)
			formField.append('qualification',qualification)
			formField.append('phone',phone)
			formField.append('password',password)
			formField.append('password2',crpassword)
			await axios({
				method:'post',
				url: `http://127.0.0.1:8000/validpost`,
				data:{'secure_str':secure},
				headers: {
				  'Content-type': 'application/json',
				}
			  })
			try{
			  await axios({
				method: 'post',
				url:'http://127.0.0.1:8000/register/',
				data: formField,
				headers: {
					'Content-type': 'multipart/form-data',
				  }
			  }).then(response=>{
					alert("success")
					window.close()
				})
			  }
			catch{
			   alert('Server Down!! Contact Admin')
			 }
			}
			else{
				console.log('password not match')
			}
			}
	}
	  useEffect(()=>{
		LoadExternalScript(['../../../loginvendor/jquery/jquery-3.2.1.min.js','../../../loginjs/main.js']);
		// return()=>{UnloadExternalScript(['loginvendor/jquery/jquery-3.2.1.min.js','loginjs/main.js']);}
		},[])
return (  
	
	<>
   <div className='login'>
    <div className="limiter">
		<div className="container-login100">
			<div className="card wrap-login100" style={{height:'650px'}}>
	         <div className="login100-pic position-relative">
	        	<img  src={portr} alt='logo' style={{maxHeight:'60%',maxWidth:'60%',marginTop:'150px'}}/>
			</div>
            <form className="login100-form validate-form" onSubmit={handleSubmit}>
					<span className="login100-form-title">
						Register
					</span>
        
                    <div className="wrap-input100 validate-input" data-validate = "name required">
						<input className="input100" type="text" name="name" placeholder="name" onChange={(e) => setname(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user-circle" aria-hidden="true"></i>
						</span>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="text" name="password" placeholder="Password"onChange={(e) => setpassword(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="text" name="crpassword" placeholder="confirm Password"onChange={(e) => setcrpassword(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate = "age is required:">
						<input className="input100" type="number" name="age" placeholder="age" onChange={(e) => setage(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-child" aria-hidden="true"></i>
						</span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate = "qualification is required:">
						<input className="input100" type="text" name="qualification" placeholder="qualification" onChange={(e) => setqualification(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-graduation-cap" aria-hidden="true"></i>
						</span>
					</div>
                    <div className="wrap-input100 validate-input" data-validate = "phone number is required:">
						<input className="input100" type="text" name="phone number" placeholder="Phone number" onChange={(e) => setphone(e.target.value)}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-phone" aria-hidden="true"></i>
						</span>
					</div>
                    <hr/>
                    <div className="wrap-input100 validate-input" data-validate = "phone number is required:">
					<input className="input100" type="file" name="image" placeholder="image" onChange={(e) => setimage(e.target.files[0])} style={{paddingTop:'10px'}}/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-picture-o" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
                        <button className="btn btn-primary" onClick={()=>Registration()} >
							Register
						</button>
					</div>

					
				</form>
			</div>
		</div>
		</div>
	</div> 
    </>
    );
}
export default Register;
