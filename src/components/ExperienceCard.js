import React from 'react'
import '../styles/index.css'

const ExperienceCard = ( {expId, title, company, url, duration, description, skills}) => {
  return (
    <div className='experience-card'>
      <div className='experience-title'>
        <h2>{title}</h2>
        <p><a target="_blank" rel="noreferrer" href={url}>@ {company}</a></p>
        <p className='duration'>{duration}</p>
      </div>
      <p className='experience-description'>{description}</p>
      <div className='experience-skills-con'>
        {
          skills.map((item, _idx) => <div className='item-con'>{item}</div>)
        }
      </div>
    </div>
  )
}

export default ExperienceCard