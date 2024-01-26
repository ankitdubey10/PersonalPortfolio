import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className='nav'>
        <ul className='navi'>
            <li className='navie'><Link to="/tech">Skills</Link></li>
            <li className='navie'><Link to="/cont">Contact</Link></li>
            <li className='navie'><Link to="/proj">Projects</Link></li>
        </ul>
    </div>
    </>
  )
}
