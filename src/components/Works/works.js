import React from 'react'
import './works.css';
import portfolio1 from '../../assets/logo1.png'
import portfolio2 from '../../assets/logo2.jpg'
import portfolio3 from '../../assets/todo.png'


const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'> My Projects</h2>
        <span className='worksDesc'> I take pride in paying attention to the smallest 
        details and making sure that my work is pixel and perfect. I'm excited to bring my skills 
        and experience to help business achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={portfolio1} alt="" className='worksImg'/><br/><p className='workContent'><h1 className='workContent1'> CHARITY   DONATION   PLATFORM </h1><br/>An online hub enabling donors to <br/> effortlessly contribute funds, fostering <br/>seamless allocation to chosen recipients.<br/></p>
            <a href='https://github.com/agalya-it21/parkinson'><img src={portfolio2} alt="" className='worksImg'/><br/> </a><p className='workContent'><h1>PARKINSON'S DIDEASE PREDICTION </h1><br/>Employing deep learning techniques <br/>to anticipate Parkinson's disease progression, <br/>enhancing diagnostic accuracy and patient care.</p>
            <img src={portfolio3} alt="" className='worksImg'/><br/>  <p className='workContent'><h1>TODO LIST APPLICATION </h1><br/>Designed and implemented an efficient and <br/>user-friendly TODO list application, demonstrating <br/>strong problem-solving skills and a keen eye <br/>for creating intuitive user interfaces.<br/></p>
        </div>
    </section>
  )
}

export default Works