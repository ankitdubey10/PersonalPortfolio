import React from 'react'
import textImage from './text.PNG'
import tic from './tic.PNG'
import cal from './cal.PNG'
import reac from './reac.PNG'
export default function Project() {
  return (
    <div className='container my-3 mx-3 row '>
        <h1 style={{paddingBottom:"15px"}}>Projects that are live</h1>
        <div className="card  " style={{width: "250px",marginRight:"20px", marginBottom:"20px",}}>
            <img src={textImage} className="card-img-top" style={{height:"250px"}} alt="" />
            <div className='card-body'>
            <h5 className="card-title">TextUtilis </h5> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">Live</span>
                <p className="card-text">A text application created in react.</p>
                <p className="card-text"><small class="text"> <b style={{color:"blueviolet"}}></b></small></p>
                <a rel= "noreferrer" href="https://text-help-gray.vercel.app/" target="_blank" className="btn btn-sm btn-dark">View Live</a>
            </div>
        </div>
        <div className="card" style={{width: "250px",marginRight:"20px", marginBottom:"20px",}}>
            <img src={tic} className="card-img-top" style={{height:"250px"}} alt="" />
            <div className='card-body'>
            <h5 className="card-title">Tic Tac Toe </h5> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">Live</span>
                <p className="card-text">A tic tac toe application created in react.</p>
                <p className="card-text"><small class="text"> <b style={{color:"blueviolet"}}></b></small></p>
                <a rel= "noreferrer" href="https://tic-tac-toe-reactjs-beta.vercel.app/" target="_blank" className="btn btn-sm btn-dark">View Live</a>
            </div>
        </div>
        <div className="card" style={{width: "250px",marginRight:"20px", marginBottom: "20px",}}>
            <img src={cal} className="card-img-top" style={{height:"250px"}} alt="" />
            <div className='card-body'>
            <h5 className="card-title">Calculator </h5> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">Live</span>
                <p className="card-text">A calculator based in Javascript</p>
                <p className="card-text"><small class="text"> <b style={{color:"blueviolet"}}></b></small></p>
                <a rel= "noreferrer" href="https://normal-calculator-ruddy.vercel.app/" target="_blank" className="btn btn-sm btn-dark">View Live</a>
            </div>
        </div>
        <div className="card" style={{width: "250px",marginRight:"20px", marginBottom: "20px",}}>
            <img src={reac} className="card-img-top" style={{height:"250px"}} alt="" />
            <div className='card-body'>
            <h5 className="card-title">My First React App </h5> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">Live</span>
                <p className="card-text">A react application created during learning process.</p>
                <p className="card-text"><small class="text"> <b style={{color:"blueviolet"}}></b></small></p>
                <a rel= "noreferrer" href="https://ankitdubey10.github.io/firstapplication/" target="_blank" className="btn btn-sm btn-dark">View Live</a>
            </div>
        </div>
    </div>
  )
}
