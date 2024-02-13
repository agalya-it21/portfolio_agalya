import React from 'react'
import './education.css'
import college from '../../assets/college.png'
import twelve from '../../assets/twelve.png'
import ten from '../../assets/ten.jpg'

const Education = () => {
    return (
        <section id='education'>
          <span className="educationTitle">Educational Qualification</span>
          <span className="educationDesc">Education is the key to personal development, 
          empowering individuals to become better citizens and providing equal opportunities 
          for diverse groups in society. It is a powerful tool that fosters a healthy 
          lifestyle, addressing challenges such as poor health in individuals and communities.</span>
          <div className='educationBars'>
            <div className='educationBar'>
              <img src={college} alt="" className='educationBarImg'/>
              <div className='educationBarText'>
                <h2>B.Tech Information Technology</h2>
                <p>Bannari Amman Institute of Technology<br/>
                   Year: 2021 - 2025<br/>
                   CGPA: 8.48 (upto 4th semester)</p>
              </div>          
            </div>
            <div className='educationBar'>
              <img src={twelve} alt="" className='educationBarImg'/>
              <div className='educationBarText'>
                <h2>HSC</h2>
                <p>Veveaham Matric Hr.Sec School<br/>
                   Year : 2019 -2021<br/>
                   Percentage : 92.37</p>
              </div>          
            </div>
            <div className='educationBar'>
              <img src={ten} alt="" className='educationBarImg'/>
              <div className='educationBarText'>
                <h2>SSLC</h2>
                <p>R. G Matric Hr.Sec school<br/>
                   Year : 2018- 2019<br/>
                   Percentage : 94</p>
              </div>          
            </div>
          </div>
          <br/>
        </section>
      )
}

export default Education