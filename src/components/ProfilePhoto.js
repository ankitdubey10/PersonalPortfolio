import React from 'react';
import pic from '../img.jpg';
import './Style.css'
export default function ProfilePhoto() {

  return (
    <>
    <div className="Profile">
        <div className='ProfilePhoto' >
            <img src = {pic} alt="Profile"/>
        </div>
        <div className="Summary">
            <p>
            Recent engineering graduate with a strong passion for software analysis, design, and development. Possesses a solid foundation in key areas including Object-Oriented Programming (OOP), Design Patterns, Algorithms, Data Structures, Networking, and Operating System concepts. Adept at utilizing Node.js for full-stack development, with hands-on experience in creating multiple projects using Node.js and React.
            <br></br>
            Academically proficient and well-versed in relational database management systems (RDBMS), skilled in crafting complex queries for both MySQL and MongoDB. Additionally, experienced in automated testing using Selenium. Strong communication skills coupled with logical reasoning abilities.
            <br></br>
            Enthusiastic about contributing to impactful projects and striving for exceptional results in the field of computer science. Eager to apply theoretical knowledge and practical skills to real-world scenarios, fostering innovation and continuous learning.
            </p>
        </div>
    </div>
    </>
  )
}
