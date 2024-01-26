import React from 'react'
import './Tech.css'
import { useState } from 'react';
export default function Tech() {
const [visible1, setVisible1] = useState(false);
const [visible2, setVisible2] = useState(false);
const [visible3, setVisible3] = useState(false);
const [visible4, setVisible4] = useState(false);
const [visible5, setVisible5] = useState(false);
const [visible,setVisible] = useState(false);
  return (
    <>
    <div className="TechSkills">
        <ul className='Techie'>
            <li className = "Tech" >
                <button onMouseEnter={()=>setVisible1(true)}
                onMouseLeave={()=>setVisible1(false)}
                >
                <div className="Heading">
                    <h2> Programming Languages </h2> 
                </div>
                </button>
            </li>
            <li className = "Tech">
                <button onMouseEnter={()=>setVisible2(true)}
                onMouseLeave={()=>setVisible2(false)}
                >
                <div className="Heading">
                    <h2>Backend Development </h2>  
                </div>
                </button>
            </li>
            <li className = "Tech">
            <button onMouseEnter={()=>setVisible3(true)}
                onMouseLeave={()=>setVisible3(false)}
                >
            <div className="Heading">
            <h2>Frontend Development </h2> 
            </div></button>
            </li>
            <li className = "Tech">
            <button onMouseEnter={()=>setVisible4(true)}
                onMouseLeave={()=>setVisible4(false)}
                >
            <div className="Heading">
            <h2>Version Control</h2></div>
            </button>
            </li>
            <li className = "Tech">
            <button onMouseEnter={()=>setVisible5(true)}
                onMouseLeave={()=>setVisible5(false)}
                >
            <div className="Heading">
            <h2>Database Management</h2></div>
            </button>
            </li>
        </ul>
        {/* { visible && */}
        <div className='details'>

                {visible1 &&
                
                    <div className = "techcontent">
                        
                        C++ <br></br> 
                        Javascript <br></br>
                        Python <br></br>
                        C <br></br>
                    </div> 
                }
                {visible2 &&
                    <div className = "techcontent">
                        Node <br></br>
                        Express <br></br>
                        Nodemon <br></br>
                    </div> 
                }
                {visible3 &&
                <div className = "techcontent">
                    React <br></br>
                    HTML <br></br>
                    CSS <br></br>
                    Redux <br></br>
                </div>
                }
                {visible4 &&
                <div className = "techcontent">
                        Git <br></br>
                        SVN <br></br>
                </div>
                }
                {visible5 &&
                <div className = "techcontent">
                    MySQL <br></br>
                    MongoDB <br></br>
                </div>
                }
        </div>
        {/* } */}

    </div>
    </>
  )
}
