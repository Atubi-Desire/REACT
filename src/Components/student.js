import React from 'react'
import {useState,useEffect } from 'react';
import studentImage from '../Assets/Justin beiber.jpg';

const Student = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('/students')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setStudents(data))
            .catch((error) => console.error('Error loading students:', error));
}, []);


  return(
    <div>
        <h1>Students</h1>

        {students.map((student) => (
            <div key={student.id}>
                <img
                    src={student.image?.startsWith('/src/') ? studentImage : student.image || studentImage}
                    alt={student.name}
                    width="150"
                />

                <h2>{student.age}</h2>

                <p>{student.course}</p> 
            </div>
        ))}
        </div>
                    
    )
}

export default Student;