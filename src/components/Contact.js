import React from 'react'
import pic from '../img.jpg';
import './Contact.css'
export default function Exp() {
  return (
    <>
        <ul className="Contact">        
          <li className='ProfilePhoto2' >
              <img src = {pic} alt="Profile"/>
          </li>
          <li className='contactDetails'>
                <div style={{fontSize:'50px'}}>Contact Details</div><br></br>
               {/* <div style={{fontSize:'25px'}}>Mobile No. {'\t'} +91 959409322 <br></br> Email Id: dubey6125@gmail.com</div> */}
              <table className='tab2' style={{fontSize:'30px' ,textIndent:'20px'}}>
                <tr>
                  <th>Mobile No.</th>
                  <td>+91 9372001434</td>
                </tr>
                <tr>
                  <th>Email Id:</th>
                  <td>dubey6125@gmail.com</td>
                </tr>
                <br></br>
                <tr>
                <th>
                <button style={{width:'110px', height:'50px', fontSize:'20px', borderRadius:'20%'}}>
                <a href="https://github.com/ankitdubey10/" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                </button>
                </th>
                <th>
                <button style={{width:'110px', height:'50px',fontSize:'20px', borderRadius:'20%'}}>
                <a href="https://www.linkedin.com/in/ankitdubey1012/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                </button>
                </th>
                <th>
                <button style={{width:'110px', height:'50px',fontSize:'20px', borderRadius:'20%'}}>
                <a href="https://leetcode.com/ankitshail_10/" target="_blank" rel="noopener noreferrer">
                  Leetcode
                </a>
                </button>
                </th>
                </tr>
              </table>
              
          </li>
          
        </ul>
    </>
  )
}
