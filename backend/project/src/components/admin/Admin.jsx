import React from 'react'
import { useEffect} from 'react';
// import '../admin/css/styles.css'
import LoadExternalScript from '../../LoadExternalScript';
import PureCounter from "@srexi/purecounterjs";
import { Carousel } from 'react-responsive-carousel';
function Admin() {
    
  useEffect(()=>{
    LoadExternalScript(['https://code.jquery.com/jquery-3.7.0.js','https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js','https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js','https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js','https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js','adminjs/tablescript.js','https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js','adminjs/chart.js']);
    new PureCounter();
  },[])
  const handletoggle=()=>{
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }
  }
  return (
    <>
    <link rel='stylesheet'type='text/css' href='admincss/styles.css'></link>
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
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
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
                            <a className="nav-link" href="/admin">
                                <div className="sb-nav-link-icon"><i className="fa fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                            </a>
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
                        <div className="row mt-lg-4" style={{alignItems:'center',justifyContent:'center'}}>
                            <h1>Centers</h1>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'1.5rem'}}>Loaction 1</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fa fa-chart-area me-1"></i>
                                        Area Chart Example
                                    </div>
                                    <div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    {/* <div className="card-header">
                                        <i className="fa fa-chart-bar me-1"></i>
                                        Bar Chart Example
                                    </div> */}
                                    <div className="card-body">
                                    <Carousel autoPlay={false} infiniteLoop={true} showThumbs={false} showArrows={true}  showIndicators={false} showStatus={false} className=' h-100 w-100'>
                                        <div className='flex flex-row'>
                                            <div className='w-50'>
                                            <img src='../../../assets/team/team-3.JPG'style={{maxHeight:'305px'}}/>
                                            </div>
                                            <div className=' w-50' style={{backgroundColor:'blue'}}>b</div>
                                        </div>
                                        <div className='flex flex-row'>
                                            <div className='w-50'>
                                            <img src='../../../assets/team/team-2.JPG' style={{maxHeight:'305px'}}/>
                                            </div>
                                            <div className=' w-50' style={{backgroundColor:'blue'}}>b</div>
                                        </div>
                                    </Carousel>
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
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>Edit</th>
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
                                        <td><button className='btn btn-primary'>delete</button></td>
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
      </>
  )
}

export default Admin