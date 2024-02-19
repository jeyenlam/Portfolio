import React from 'react'
import '../styles/index.css'
import { useScroll, useTransform, motion} from 'framer-motion'

const About = () => {

  const {scrollYProgress} = useScroll();
  const x = useTransform(scrollYProgress, [0,1], [0, -600])

  return (
    <div className='page' id='about'>
      <div className='about-page'>
        <h3>Hi,</h3>
        <p>I'm <strong><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jeyenlam/'>Yen Lam</a></strong>, an aspiring software developer as well as
          a Comp Sci student at <strong><a target="_blank" rel="noreferrer" href='https://www.gvsu.edu/'>Grand Valley State University</a></strong>. I'm 
          currently delving into the magical world of Full-stack Web Development.
          <br/>
          And I kid you not, I sincerely <strong>love it</strong> !!
        </p>
        <div>
          <motion.h1 style={{x}}>Yen Lam /</motion.h1>
          <motion.h1 style={{x}}>Web Developer</motion.h1>
        </div>
        
      </div>
    </div>
  )
}

export default About