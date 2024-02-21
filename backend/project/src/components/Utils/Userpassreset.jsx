import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from "react-router-dom";
function Userpassreset(){
    const[password,setpassword]=useState('')
    const[crpassword,setcrpassword]=useState('')
    const { id, token } = useParams()
    const Reset=async()=>{
    let formField = new FormData()
    formField.append('password',password)
    formField.append('password2',crpassword)
  
    await axios({
      method: 'post',
      url: `http://127.0.0.1:8000/reset-password/${id}/${token}/`,
      data: formField,
      headers: {
        'Content-type': 'application/json',
      }
    }).then(response=>{
        setcrpassword('')
        setpassword('')
       if(response.data)
       alert('Password Changed Successfully!! Return To Login Page')
       else
        alert(`Password and Confirm Password Doesn't match`)
      })
      

    }
    const handlesubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <>
        <div className='container d-flex justify-content-center mt-5'>
        <div className='w-75'>
        <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter New Password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder=" Confirm New Password" onChange={(e)=>setcrpassword(e.target.value)} value={crpassword}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={Reset}>
          Submit
        </Button>
      </Form>
        </div>
      </div>
      </>
    )

}
export default Userpassreset