import React from 'react'
import { Link, Outlet, useNavigate,useLocation } from 'react-router-dom';
import { useEffect,useState} from 'react';
import { Button, Spinner,Image,Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import LoadExternalScript from '../../LoadExternalScript';
import axios from 'axios';

function Counsellor() {
    const navigate=useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [disableButton,setDisableButton] = useState(false)
    // const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    let token;
    token=localStorage.getItem('token')
    if(token===null)
    navigate('/',{ replace: true })
  },[])
  const handletoggle=()=>{
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }
  }
  const handleeditClick = () => {
    setDisableButton(!disableButton)
};
const handlesaveClick = () => {
    setDisableButton(!disableButton)
};
  const Logout=async()=>{
    // await axios({
    //   method: 'post',
    //   // headers: {
    //   //   'Content-Type': 'application/json',
    //   //   'Authorization': `Bearer ${location.state.token.access}`, // Include the access token in the Authorization header
    //   // },
    //   data:location.state.token,
    //   url:'http://127.0.0.1:8000/logout/',
    // }).then(response=>{
    //   // console.log(location.state)
    //   // console.log(response.data.type);
    //   navigate('/',{ replace: true })
    //   // localStorage.setItem('sharedData','false')
    // })
    
    localStorage.removeItem('token');
    navigate('/',{replace:true})
  }
  return (
    <>
    <link rel='stylesheet'type='text/css' href='../../../counselcss/styles.css'></link>
    <link rel='stylesheet'type='text/css' href='../../../formcss/styles.css'></link> 
    <div className='sb-nav-fixed text-lg-start body'>
       
    <nav className="sb-topnav navbar navbar-expand navbar-dark ">
            
            <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={handletoggle} href="#!"><i className="fa fa-bars"></i></button>
           
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                
            </form>
            
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 smi-navbar" >
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true"><i className="fa fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{left:'auto',right:0}}>
                        <li><a className="dropdown-item" onClick={handleShow}>Profile</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" onClick={()=>{Logout()}}>Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to="">
                                <div className="sb-nav-link-icon"><i className="fa fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            {/* <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                            </a> */}
                            <Link className="nav-link" to="/counsellor/form">
                                <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                                Form
                            </Link>
                            {/* <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div> */}
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html">Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="401.html">401 Page</a>
                                            <a className="nav-link" href="404.html">404 Page</a>
                                            <a className="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fa fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className="sb-nav-link-icon"><i className="fa fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        
                        
                        {/*  */}
                        <Outlet/>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>Profile Page</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='p-2'>
			  <Form>
            
            <Image className="rounded-circle mx-auto d-block"
               
                src="../assets/team/team-1.JPG"
                style={{width: 125, height: 125, borderRadius: 125/ 2 }}
                // onChange={(e) => {setemailchange(e.target.value);}}
              />
              <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                readOnly
                disabled
                autoFocus
                // onChange={(e) => {setemailchange(e.target.value);}}
              />
              </Form.Group>
               <Form.Group className="mb-3">
               <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                disabled
                readOnly
                // onChange={(e) => {setemailchange(e.target.value);}}
              />
               </Form.Group>
               <Form.Group className="mb-3">
               <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="age"
                autoFocus
                disabled={!disableButton}
                // onChange={(e) => {setemailchange(e.target.value);}}
              />
              </Form.Group>
              <Form.Group className="mb-3">
            <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="qualification"
                autoFocus
                disabled={!disableButton}
                // onChange={(e) => {setemailchange(e.target.value);}}
              />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                placeholder="phone number"
                autoFocus
                disabled={!disableButton}
                // onChange={(e) => {setemailchange(e.target.value);}}
              />
            
            </Form.Group>
            {/* <div className={`${btalert!==''?`${btalert==='success'?'alert alert-success':'alert alert-danger'}`:'visible-false'}`} role="alert">
                 {altmsg}
            </div> */}
          </Form>
		  </Modal.Body>
        <Modal.Footer>
            
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="btn btn-primary"  onClick={handleeditClick} disabled={disableButton} >
            Edit
          </Button>
          <Button   className='btn btn-success' variant='primary' onClick={handlesaveClick} disabled={!disableButton} >
          {/* {isLoading ?  <Spinner size='sm'/>:null} */}
          Save
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Counsellor