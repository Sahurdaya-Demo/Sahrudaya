import './App.css';

import {Route,Routes} from 'react-router-dom'
import Main from './main';
// import { useEffect,useState } from 'react';
// import Admin from './components/admin/Admin';
// import Login from './components/login/Login';
// import Counsellor from './components/counsellor/Counsellor';
import Form from './components/counsellor/ClientForm';
import Error from './components/Utils/error';
import Counseldash from './components/counsellor/Counseldash';
import Adminloading from './components/loading/adminloading';
import Counsellorloading from './components/loading/counsellorloading';
import Loginloading from './components/loading/loginloading';
import Userpassreset from './components/Utils/Userpassreset';
import Admindash from './components/admin/Admindash';
import Employee from './components/admin/Employee';
import ValidLink from './components/Utils/ValidLink';
import Register from './components/Utils/register/register';
function App() {
  
//   const LoadingScreen = () => {
//     console.log('loading')
//     return(
//     <div className="loading-screen">
//       <img src="../../../loading.gif" alt="Loading" />
//     </div>
//     )
// };
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a delay to show the loading screen
//     const timeout = setTimeout(() => {
//       // console.log
//       setLoading(false);
//     }, 1000); // Adjust the delay as needed

//     // Clean up the timeout to avoid memory leaks
//     return () => {clearTimeout(timeout);
//     setLoading(false);};
//   }, []);

  return (
    
      <div className="App">
        {/* {loading ? (
          <LoadingScreen />
        ) : ( */}
          <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='login' element={<Loginloading/>}/>
          <Route path='admin' element={<Adminloading/>}>
            <Route path='' element={<Admindash/>}/>
            <Route path='emp' element={<Employee/>}/>
          </Route>
          <Route path='counsellor' element={<Counsellorloading/>}>
            <Route path='' element={<Counseldash/>}/>
            <Route path='form' element={<Form/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
          <Route path="user/reset/:id/:token/:secure" element={<ValidLink/>} />
          <Route path="reg" element={<Register/>} />
          </Routes>

        {/* )} */}
          </div>
          );
}

export default App;
