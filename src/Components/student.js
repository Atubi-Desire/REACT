import React from 'react'
import {useState,useEffect } from 'react';
import image from './assets/Justin beiber.jpg'

const Student = () => {
    const [student,setStudents ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/students')
        .then((response) => response.json()
        .then((data) => {
        setStudents(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    }));
}, []);


  return(
    <div>
        <h1>Students</h1>

        {students.map((student) => (
            <div key={student.id}>
                <img src={student.image} alt={student.name} width="150" />

                <h2>{student.age}</h2>

                <p>{student.course}</p> 
            </div>
        ))}
        </div>
                    
    )
}

export default Student;