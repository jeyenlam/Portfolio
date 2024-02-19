import React from 'react'
import {motion} from 'framer-motion'
import icons from '../static/static'

const ProjectCard = ( {projId, title, urls, description, skills}) => {
  
  const {githubIcon, devpostIcon, youtubeIcon} = icons

  return (
    <motion.div className='project-card'>
      <div className='project-title'>
        <h2>{projId}. {title}</h2>
        {
          Object.keys(urls).map((key, idx) => {
            const urlValue = urls[key]
            switch (key){              
              case 'github':
                return <a target="_blank" rel="noreferrer" key={idx} href={urlValue}><img width='25px' alt='githubIcon'src={githubIcon} /></a>
              case 'devpost':
                return <a target="_blank" rel="noreferrer" key={idx} href={urlValue}><img width='25px' alt='devpostIcon' src={devpostIcon} /></a>
              case 'youtube':
                return <a target="_blank" rel="noreferrer" key={idx} href={urlValue}><img width='25px' alt='youtubeIcon' src={youtubeIcon} /></a>           
              default:
                return
            }
          })
        }
      </div>
      <p>
        {description.map((des, idx) => <li key={idx}>{des}</li>)}
      </p>
      <br/>
      <div className='skills-con'>
        {skills.map((skill, idx) => <div className='box' key={idx}>{skill}</div>)}
      </div>
    </motion.div>
  )
}

export default ProjectCard