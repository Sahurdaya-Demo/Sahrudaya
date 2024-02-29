import { useEffect,useState} from 'react';
import view from './Data';
function Counseldash(){
    const[profile,setprofile]=useState('')
  
    // const[name,setname]=useState('')
    useEffect(()=>{
		view(setprofile)
        
	},[])
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
                            Hi , welcome {profile.name}! <img src='../assets/hand.gif' style={{width:"70px",height:"70px"}}></img>
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