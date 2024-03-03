import LoadExternalScript from '../../LoadExternalScript';
import PureCounter from "@srexi/purecounterjs";
import { useEffect, useState} from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
function Admindash()
{
    const[data,setdata]=useState([])
    const [males, setmales] = useState([]);
    const [females, setfemales] = useState([]);
    const [others, setothers] = useState([]);
    // var datas;
    useEffect(()=>{
        LoadExternalScript(['https://code.jquery.com/jquery-3.7.0.js','https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js','https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js','https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js','https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js','https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js','adminjs/tablescript.js']);
        new PureCounter();
        retrieve()
      },[])
      const retrieve=async()=>{
        
        const response= await fetch(`http://127.0.0.1:8000/formsubmit/`)
        const jsonData = await response.json();
        setdata(jsonData)
        // console.log(new Date(jsonData[1].date).getMonth()==2)
       
        for(let i=0;i<12;i++){
            males.push(jsonData.filter(record=>record.gender==='Male'&&new Date(record.date).getMonth()===i).length)
            females.push(jsonData.filter(record=>record.gender==='Female'&&new Date(record.date).getMonth()===i).length)
            others.push(jsonData.filter(record=>record.gender==='Others'&&new Date(record.date).getMonth()===i).length)
        // console.log(pendingRecords)
        
        }
        // male=males[2]
        // console.log(males[2],females[0],others[0])
        
      }
    //   console.log(artists[0])
      defaults.maintainAspectRatio=false;
      defaults.responsive=true;
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
                                    <div className="card-body" style={{position:'relative'}}>
                                         
                                        <Bar
                                            data={{
                                                labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"],
                                                datasets:[
                                                    {
                                                        label:"MALES",
                                                        data:[males[0],males[1],males[2],males[3],males[4],males[5],males[6],males[7],males[8],males[9],males[10],males[11]],
                                                        // data:[ar]
                                                    },
                                                    {
                                                        label:"FEMALES",
                                                        data:[females[0],females[1],females[2],females[3],females[4],females[5],females[6],females[7],females[8],females[9],females[10],females[11]],
                                                    },
                                                    {
                                                        label:"OTHERS",
                                                        data:[others[0],others[1],others[2],others[3],others[4],others[5],others[6],others[7],others[8],others[9],others[10],others[11]],
                                                    },
                                                ],
                                                // datasets:[
                                                //     {
                                                //         label:"Males",
                                                //         data:[100,200,300]
                                                //     }

                                                // ],
                                            }}
                                            style={{height:'400px'}}
                                        />
                                    </div>
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