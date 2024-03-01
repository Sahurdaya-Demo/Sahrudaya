import { useEffect,useState} from 'react';
import view from './Data';
import AnimatedNumbers from "react-animated-numbers"
import CountUp from 'react-countup';


function Counseldash(){
    const[profile,setprofile]=useState('')
    const[Records,setRecords]=useState('')

    useEffect(() => {
            const intervalId = setInterval(retrieve, 2000);
    return () => clearInterval(intervalId); 
    }, []);

    const retrieve=async()=>{
    const response= await fetch(`http://127.0.0.1:8000/api/`)
    const jsonData = await response.json();
    setRecords((jsonData).length)
   }
    
     

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
                                    <div className='card-body mb-3 card-he'>
                                    <p className='font-lexend ' style={{fontSize:'25px'}}>Pending Sessions
                                     </p>
                                     <AnimatedNumbers 
                                     duration={200}
                                     animateToNumber={Records}
                                        fontStyle={{
                                        fontSize: 40,
                                        color: "red",
                                        }}/>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className=" card mb-3">
                                    <div className='card-body mb-3 card-he'>
                                    <p className='font-lexend ' style={{fontSize:'25px'}}>Completed Sessions
                                     </p>
                                     <AnimatedNumbers 
                                     
                                       animateToNumber={Records}
                                        fontStyle={{
                                        fontSize: 40,
                                        color: "lightgreen",
                                        }}/>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className=" card mb-3">
                                    <div className='card-body mb-3 card-he'>
                                     <CountUp start={0} end={5} duration={2} />
                                    </div>
                                </div>
                            </div>
                        {/* ---end of columns */}

                       
                        </div>
        </>

    )
}
export default Counseldash;