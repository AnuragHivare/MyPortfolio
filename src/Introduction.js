import React from 'react'
import  profilePic from './../assets/profilePic.jpg';

const introduction = {
    greeting: "Hello,",
    name: "I'm Anurag Hiware",
    para1: 'Welcome to my portfolio! I hold a Bachelor’s degree in Computer Applications (BCA) from DY Patil International University, Akurdi, Pune, where I graduated with an impressive CGPA of 8.6. Currently, I am in the final year of my postgraduate studies, pursuing a Master’s in Computer Applications (MCA).',
    para2: 'I am deeply passionate about technology and software development. Throughout my academic journey, I have worked on various projects, including a Bug Tracker Software and a Bidding (Auction) Website, which have honed my problem-solving and technical skills.'
}

const Introduction = () => {
  return (
    <section id="about" className="intro-section">
        <div className="intro-left">
            <h2>
              <sapn>{introduction.greeting}</sapn>
              <span className="name">{introduction.name}</span>
            </h2>
            <p>{introduction.para1}</p>
            <p>intro.para2</p>
        </div>
        <div className="intro-right">
            <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
    </section>
  )
}

export default Introduction