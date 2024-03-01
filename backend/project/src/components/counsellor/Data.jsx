import axios from "axios"
const view=async(setprofile)=>{
    try{
    await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`, // Include the access token in the Authorization header
      },
      url:'http://127.0.0.1:8000/profile/',
    }).then(response=>{
        // console.log(response.data[1])
      localStorage.setItem('email',response.data[0][0].email)
        setprofile(response.data)
    })
  }
  catch{}

  }
  export default view;