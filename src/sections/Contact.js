import React from 'react'
import assets from '../static/static'

const Contact = () => {

  const {codepenIcon, devpostIcon, githubIcon, linkedinIcon, profile} = assets
  
  return (
    <div className='page' id='contact'>
      <div className='contact-page'>
      <div className='img-div'>
        <img alt='profile' src={profile}/>
      </div>
      <p>
        Thanks a lot for making it till here. <br/>
        I'm actively looking for a Software Engineer <strong>internship</strong> in Summer 2024 <br/>
        If you have any information or opportunities, please let me know <br/>
        Besides, I'm always open to <strong>collaboration</strong> of any sorts.
      </p>
      <div className='contact-icons-con'>
        <a target="_blank" rel="noreferrer" href='https://codepen.io/jeyenlam'><img alt='codepenIcon'src={codepenIcon} /></a>
        <a target="_blank" rel="noreferrer" href='https://github.com/jeyenlam'><img alt='githubIcon'src={githubIcon} /></a>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jeyenlam/'><img alt='linkedinIcon'src={linkedinIcon} /></a>
        <a target="_blank" rel="noreferrer" href='https://devpost.com/jeyenlam'><img alt='devpostbIcon'src={devpostIcon} /></a>
      </div>
      </div>
    </div>
  )
}

export default Contact