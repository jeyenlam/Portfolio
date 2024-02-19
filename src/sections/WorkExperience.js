import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const WorkExperience = () => {

  const experiences = {
    exp1: {
      expId: 0.1,
      title: 'Software Engineer Intern',
      company: 'PromoterMotor',
      url: 'https://promotermotor.com',
      duration: 'Jan 2024 - Present',
      description: "Collaborated with peers to work on Google Apps Script projects that help automate the company's task management of Google Suite. Helped debug projects and troubleshoot Google Tag Manager related issues. Implemented the company's website using Wordpress.",
      skills: ['Google Apps Script', 'JavaScript', 'Wordpress']
    },
    exp2: {
      expId: 0.2,
      title: '3rd Place Hackathon Winner',
      company: 'Rewriting The Code',
      url: 'https://devpost.com/software/ecochic-0denl7',
      duration: 'Feb 2024 - Feb 2024',
      description: "Led the development of EcoChic, a web app featuring approved sustainable brands. Configured and rendered the web app components to create a seamless and intuitive user experience. Utilized various React libraries to configure routing, fetch API data, and troubleshoot issues during development.",
      skills: ['React.js', 'Node.js', 'RapidAPI', 'Figma']
    }
  }

  return (

    <div className='page' id='work-experience'>
      <div className='work-experience-page'>
        <h1 >Experience</h1>
        <div className='experience-cards-con'>
          {
            Object.values(experiences).map((exp, idx) => {
              const {expId, title, company, url, duration, description, skills} = exp
              return <ExperienceCard expId={expId} title={title} company={company} url={url} duration={duration} description={description} skills={skills}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WorkExperience