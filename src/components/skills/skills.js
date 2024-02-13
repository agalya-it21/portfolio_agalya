import React from 'react'
import './skills.css'
import uidesign from '../../assets/uidesign.png'
import webdesign from '../../assets/webdesign.png'
import appdesign from '../../assets/appdesign.png' 


const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and pasionate web designer with 
      experience in creating visually appealing and user-friendly websites. I have 
      strong understanding of design and a keen eye for detail. I am a proficient 
      in HTML, CSS and javascript, as well as design software such as Figma.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={uidesign} alt="UIdesign" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>UI/UX design</h2>
            <p>Expertise through a curated collection of innovative and user-centric 
              design projects, demonstrating a deep understanding of the design 
              process and problem-solving skills.</p>
          </div>          
        </div>
        <div className='skillBar'>
          <img src={webdesign} alt="webdesign" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Website design</h2>
            <p>Expertise in creating aesthetically pleasing and functional websites to attract clients or employers.</p>
          </div>          
        </div>
        <div className='skillBar'>
          <img src={appdesign} alt="Appdesign" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>App design</h2>
            <p>Expertise in crafting user-centric and visually appealing 
              mobile applications, emphasizing a strong design process and innovative problem-solving.</p>
          </div>          
        </div>
      </div>
      <br/>
    </section>
  )
}

export default Skills;