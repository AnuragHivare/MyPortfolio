import React from 'react'

const education = [
  {
    degree: 'MCA in Computer Science',
    address: 'MIT World peace University, Pune'
  },
  {
    degree: 'BCA in Computer Science',
    address: 'D.Y Patil International University, Pune'
  },
]
const Academics = () => {
  return (
    <div id="education" className='education-section'>
         <h2>Education</h2>
            <div className="degree">
              {education.map((item, index) => {
                return <div key={index}>
                  <h3>{item.degree}</h3>
                  <p>{item.address}</p>
                </div>
              })}
            </div>
    </div>
  )
}

export default Academics;