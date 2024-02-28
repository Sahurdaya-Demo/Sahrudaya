import { useEffect,useState} from 'react';
import axios from 'axios';
import LoadExternalScript from '../../LoadExternalScript';
import { useLocation } from 'react-router-dom';
function Counseldash(){
    const[profile,setprofile]=useState([])
    // console.log({name})
    // const location = useLocation();
    
    // useEffect(()=>{
	// 	LoadExternalScript(['https://code.jquery.com/jquery-3.7.0.js','https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js','https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js','https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js','https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js','counseljs/tablescript.js']);
        
	// },[])
    return(
        <>
                        <div className="row">


                        {/* columns for welcome */}
                        
                        <div className='card area col-lg-12 m-1 mt-4 my-3 mb-3 ' style={{height:"450px", border:"none"}}>
                            <div className='card-body align-items-center d-flex justify-content-center'>
                            <ul className='circles'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            </ul>
                            <p className='lexend'>
                            Hi , welcome! <img src='../assets/hand.gif' style={{width:"70px",height:"70px"}}></img>
                            </p>
                            </div>
                        </div>
                            <div className="col-lg-4">
                                <div className='card mb-3'>
                                    <div className='card-body mb-3 card-he'></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className=" card mb-3">
                                    <div className='card-body mb-3 card-he'>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className=" card mb-3">
                                    <div className='card-body mb-3 card-he'>
                                    </div>
                                </div>
                            </div>
                        {/* ---end of columns */}

                        {/* <div className='m-1'></div> */}
                            {/* <div className="col-xl-3 col-md-6">
                                <div className={`card bg-primary text-white mb-4`}>
                                    <div className="card-body">Primary Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className={`card bg-warning text-white mb-4 `}>
                                    <div className="card-body">Warning Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className={`card bg-primary text-white mb-4 `}>
                                    <div className="card-body">Success Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className={`card bg-danger text-white mb-4`}>
                                    <div className="card-body">Danger Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div> */}
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
                                    <div className="card-header">
                                        <i className="fa fa-chart-bar me-1"></i>
                                        Bar Chart Example
                                    </div>
                                    <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                        </div>
                        <div >
                        
                </div>
        </>

    )
}
export default Counseldash;