import React, { useEffect, useState } from 'react'
import '../styles/index.css'
import icons from '../static/static'

const Navbar = () => {

  const {menuIcon} = icons
  const [isActive, setIsActive] = useState('about')
  const [expandNavbar, setExpandNavbar] = useState(false)

  const navigateTo = (sectionId) => {
    const section = document.getElementById(sectionId)
    setExpandNavbar(false)

    if (section){
      section.scrollIntoView({ behavior: 'smooth' })
      setIsActive(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll('.page');
      sections.forEach((section) => {
        const {top, bottom } = section.getBoundingClientRect();

        const sectionTop = top + scrollPosition;
        const sectionBottom = bottom + scrollPosition;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setIsActive(section.id);

          if (section.id === 'extended-about'){ //dedicated only to #extended-about
            setIsActive('about')
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='menu-icon'>
        <button onClick={ () => { setExpandNavbar((prev) => !prev) }}>
          <img width='30px' src={menuIcon} alt='menuIcon'/>
        </button>
      </div>
      <ul>
        <li role='button'
            className={ isActive === 'about' ? 'active': ''}
            onClick={() => navigateTo('about')}
        >About</li>
        <li role='button'
            className={ isActive === 'work-experience' ? 'active': ''}
            onClick={() => navigateTo('work-experience')}
        >Work Experience</li>
        <li role='button'
            className={ isActive === 'projects' ? 'active': ''}
            onClick={() => navigateTo('projects')}
        >Projects</li>
        <li role='button'
            className={ isActive === 'contact' ? 'active': ''}
            onClick={() => navigateTo('contact')}
        >Contact</li>
      </ul>
    </div>
  )
}

export default Navbar