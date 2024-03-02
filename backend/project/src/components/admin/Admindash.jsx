import LoadExternalScript from '../../LoadExternalScript';
import PureCounter from "@srexi/purecounterjs";
import { useEffect, useState} from 'react';
function Admindash()
{
    const[data,setdata]=useState([])
    useEffect(()=>{
        LoadExternalScript(['https://code.jquery.com/jquery-3.7.0.js','https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js','https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js','https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js','https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js','adminjs/tablescript.js']);
        new PureCounter();
        retrieve()
      },[])
      const retrieve=async()=>{
        const response= await fetch(`http://127.0.0.1:8000/formsubmit/`)
        const jsonData = await response.json();
        setdata(jsonData)
      }
    return(
        <>
        <div className="row mt-lg-4" style={{alignItems:'center',justifyContent:'center'}}>
                            <h1>Centers</h1>
                            <div className="col-xl-4 col-md-6">
                                <div className="card bg-primary text-white mb-4 " >
                                    <div className='d-flex flex-lg-row flex-column align-items-center'>
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Vypin-Rajagiri Sea Shore School</div>
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
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Kakkanad</div>
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
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Thevara-SH College(East Campus)</div>
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
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Thevara-Higher Secondary School</div>
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
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Thevara-SH UP</div>
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
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Thevara-SH High School</div>
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
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Karukutty-Christ the King monastery Church </div>
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
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Kanjoor</div>
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
                                    <div className="card-body" style={{fontWeight:600,fontSize:'0.8rem'}}>Eloor-SHJ UP School</div>
                                    <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter display-6 pe-lg-5" style={{fontFamily:'Poppins-Regular, sans-serif',fontWeight:600}}></span> 
                                    </div>
                                    {/* <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fa fa-angle-right"></i></div>
                                    </div> */}
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
                                    {/* <Carousel autoPlay={false} infiniteLoop={true} showThumbs={false} showArrows={true}  showIndicators={false} showStatus={false} className=' h-100 w-100'>
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
                                    </Carousel> */}
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
                                        <th>Gender</th>
                                        <th>Date</th>
                                        <th>Place Of Couneslling</th>
                                        <th>Problem</th>
                                        <th>Status</th>
                                        
                                        <th>Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {data?.map(record => 
                                        <tr key={record.id}>
                                        <td>{record.name}</td>
                                        <td>{record.gender}</td>
                                        <td>{record.date}</td>
                                        <td>{record.place_of_counselling}</td>
                                        <td>{record.problem}</td>
                                        <td>{record.status}</td>
                                        <td><button className='btn btn-danger' >Delete</button><button className='btn btn-warning ms-2' style={{color:'white'}} onClick={()=>{}}>View</button></td>
                                        </tr>
                                        )}
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                    <th>Name</th>
                                        <th>Gender</th>
                                        <th>Date</th>
                                        <th>Place Of Couneslling</th>
                                        <th>Problem</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        
                                    </tr>
                                </tfoot>
                           </table>
                        
                           </div>
                        </div>
        </>
    )
}
export default Admindash