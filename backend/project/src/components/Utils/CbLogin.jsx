// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom"
import axios from "axios";
const CbLogin=async(navigate,email,password)=>{
    let token;
    if(email!==''&&email.includes('@')){
        if(password!=='')
        {
      let formField = new FormData()
      formField.append('email',email)
      formField.append('password',password)
    
      await axios({
        method: 'post',
        url:'http://127.0.0.1:8000/login/',
        data: formField
      }).then(response=>{
        token=response.data.token;
        if(token){
        navigate(`/${response.data.type}`,{state:{token}})
        }
        else{
        if(response.data.errors)
        alert('Login Failed !, Please Check Your Username Or Password !')
        }
        })
      }
      } 
    
}
export default CbLogin