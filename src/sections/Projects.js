import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {

  const [display, setDisplay] = useState(1)
  
  const projects = {
    proj1: {
      projId: 1,
      title: 'EcoChic',
      urls: {
        github: 'https://github.com/jeyenlam/EcoChic',
        devpost: 'https://devpost.com/software/ecochic-0denl7'
      },
      description: [
        'Developed a web app that features approved sustainable brands, won a 3rd place in the RTC Black Wings Hacks 2024, showcasing problem-solving and effective teamwork in a time constraints condition.',
        'Contributed to configuring and rendering the web app components to create a seamless and intuitive user experience.',
        'Utilized various React libraries to configure routing, fetch API data, and troubleshoot issues during development.'
      ],
      skills: ['React.js', 'Node.js', 'HTML', 'CSS', 'RapidAPI', 'Figma']
    },
    proj2: {
      projId: 2,
      title: 'Expense Tracker Dashboard',
      urls: {
        github: 'https://github.com/jeyenlam/MERN-Expense-Tracker-Dashboard',
        youtube: '/'
      },
      description: [
        'Crafted an intuitive Expense Tracker Dashboard employing the MERN stack, ensuring a seamless and efficient user experience in expense management.',
        'Implemented RESTful APIs using Node.js and Express.js, ensuring smooth and secured communication between the frontend and backend components of the application.',
        'Integrated data visualization tools with various React libraries, providing users with insightful visual representations of their spending, saving patterns.'
      ],
      skills: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'StyledComponents']
    },
    proj3: {
      projId: 3,
      title: 'Resposive Portfolio',
      urls: {
        github: 'https://github.com/jeyenlam/Portfolio',
      },
      description: [
        "Developed and deployed a responsive portfolio, implementing the Agile methodology for continuous maintenance and improvement.",
        "Implemented SEO best practices, including meta tags and structured data, to enhance the website's visibility on search engines.",
        "Utilized state management and various libraries in React to efficiently manage and update content without the need for full page reloads.",
      ],
      skills: ['SCSS', 'React.js', 'Node.js', 'FramerMotion', 'Netlify']
    },
    proj4: {
      projId: 4,
      title: 'Vinyl Collection Tracker',
      urls: {
        github: 'https://github.com/jeyenlam/Vinyl-Collection-Tracker-App',
      },
      description: [
        "An app that was built to elevate Discogs' users experience by integrating features including browsing random vinyl, modifying collections with better UI designs ",
        'Utilized OAuth 2.0 authorization framework to grant granular permissions, ensuring secure access to user data while respecting privacy concerns.',
        'In the making...'
      ],
      skills: ['HTML', 'CSS', 'Flask', 'Python', 'OAuth', 'DiscogsAPI']
    },

  }

  const projSize = Object.values(projects).length;

  const handleIncrementButton = () => {
    setDisplay((prev)=> (++prev > projSize) ? 1 : prev++)
  }

  const handleDecrementButton = () => {
    setDisplay((prev)=> (--prev < 1) ? projSize : prev--)
  }

  return (
    <div className='page' id='projects'>
      <div className='projects-page'>
        <div className='project-page-level1'>
          <div className='project-cards-con'>
          {
            Object.values(projects).map((proj, idx) => {
              const {projId, title, urls, description, skills} = proj
              return (display === projId)
              ? <ProjectCard isDisplay={true} projId={projId} title={title} urls={urls} description={description} skills={skills} />
              : ''
            })
          }
          <div className='buttons-con'>
          <button onClick={handleDecrementButton}>&lt;</button>
          <button onClick={handleIncrementButton}>&gt;</button>
          </div>
        </div>
        <h1>Projects</h1>
        </div>
        
      </div>
    </div>
  )
}

export default Projects