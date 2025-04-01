import React from 'react';
import './App.css';
import profilePic from './assets/profile.JPG';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import Timeline from './Timeline';
import Projects from './Projects';
import Activities from './Activities';

function Home() {
    return (
        <div className="Home">
            <section id="Intro" className="section">
                <img src={profilePic} alt="Pang's Profile" className="profilePic" />
                <div>
                    <h1>Hi, I'm Kusuma (Pang) Jaipiam 👋</h1>
                    <p>I’m a junior studying Computer Science at Columbia University, driven by a passion for ownership and the transformative power of data. Let’s navigate the world of Product Management, Data Analysis, and Software Engineering together.</p>
                    <div className="contactContainer">
                        <a href="https://linkedin.com/in/kusumaj" target="_blank" rel="noopener noreferrer" className="contactLink">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://github.com/kusumaj" target="_blank" rel="noopener noreferrer" className="contactLink">
                            <FaGithub /> GitHub
                        </a>
                        <a href="mailto:kusuma.j@columbia.edu" className="contactLink">
                            <FaEnvelope /> kusuma.j@columbia.edu
                        </a>
                        <a href="tel:+16462891792" className="contactLink">
                            <FaPhone /> +1(646)289-1792
                        </a>
                    </div>
                </div>
            </section>

            <div id="Work" className="section">
                <Timeline />
            </div>

            <div id="Project" className="section">
                <Projects />
            </div>

            <div id="Extracurricular" className="section">
                <Activities />
            </div>



            {/* 
      <div id="Interests" className="section">
      </div> */}
        </div>
    );
}

export default Home;