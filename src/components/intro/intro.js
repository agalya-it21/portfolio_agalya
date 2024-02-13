import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.jpg';
import Resume from '../../assets/resume.pdf'


const Intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
            <span className="hello"> Hello, </span>
            <span className="introText"> I'm <span className="introName"> Agalya Nataraj </span><br/> Budding IT Student </span>
            <p className="introPara"> I am a Budding and growing IT student with various <br/>knowledges and skillsets.<br/><br/></p>
            <a href={Resume} download="Resume"><button className="btn"> <img src={ btnImg } alt="" className="btnImg"/>Resume</button></a>
        </div>
        <img src={ bg } alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro