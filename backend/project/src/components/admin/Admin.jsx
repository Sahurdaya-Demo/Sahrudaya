import React from 'react'
import { useEffect,useState} from 'react';
import {  useNavigate,useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import LoadExternalScript from '../../LoadExternalScript';
function Admin() {
    const navigate=useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [password,setpassword]=useState('')
    const [crpassword,setcrpassword]=useState('')
    
  useEffect(()=>{
   
    let token;
    token=localStorage.getItem('token')
    if(token===null)
    navigate('/',{ replace: true })
    
  },[])
  const changepassword=async()=>{
    if(password===crpassword){
    let formField = new FormData()
    formField.append('password',password)
    formField.append('password2',crpassword)
    await axios({
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${location.state.token.access}`, // Include the access token in the Authorization header
       },
    url:'http://127.0.0.1:8000/changepassword/',
    data: formField,   
    }).then(response=>{
        alert(response.data.msg)
        handleClose()
    })
    }
    else{
        alert('Password and Confirm Password Are Not Same!!')
    }
  }
  const handletoggle=()=>{
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }
  }
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
    <link rel='stylesheet'type='text/css' href='../../../admincss/styles.css'></link>
    <div className='sb-nav-fixed text-lg-start body'>
         
    <nav className="sb-topnav navbar navbar-expand navbar-dark">
            
            <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={handletoggle} href="#!"><i className="fa fa-bars"></i></button>
           
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                {/* <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fa fa-search"></i></button>
                </div> */}
            </form>
            
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 smi-navbar" >
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true"><i className="fa fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{left:'auto',right:0}}>
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" onClick={handleShow} style={{cursor:'pointer'}}>Change Password</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" onClick={()=>{Logout()}} style={{cursor:"pointer"}}>Logout</a></li>
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
                            <Link className="nav-link" to="/admin/emp">
                                <div className="sb-nav-link-icon"><i className="fa fa-tachometer-alt"></i></div>
                                Employees
                            </Link>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
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
                        {/* <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol> */}
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
        <Modal.Header closeButton>
          <Modal.Title>Register Counsellor</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-2'>
			<Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                className='mb-2'
                onChange={(e) => setpassword(e.target.value)}
                autoFocus
              />
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                onChange={(e) => setcrpassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
            
           
          </Form>
		  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  className='btn-primary' onClick={changepassword} variant='primary'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Admin