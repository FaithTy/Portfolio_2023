import React, { useState } from 'react'

const Header = (props) => {
  const { toggleDarkMode, darkMode } = props;

  return (
    <>
      <nav className={`h-24 w-full flex items-center drop-shadow-md ${darkMode ? "offdark" : "offlight"}`}>
        <ul className='h-full w-5/6 flex justify-center items-center sm:gap-16 gap-8'>
          <li>
            <a href='#about' className={` active:text-primary hover:text-primary  ${darkMode ? "whiteText" : "darkText"}`}>About</a>
          </li>
          <li>
            <a href='#projects' className={` hover:text-primary ${darkMode ? "whiteText" : "darkText"}`}>Actual Projects</a>
          </li>
          <li>
            <a href='#experience'className={` hover:text-primary ${darkMode ? "whiteText" : "darkText"}`}>Experience</a>
          </li>
          <li>
            <a href='#skills' className={`hover:text-primary ${darkMode ? "whiteText" : "darkText"}`}>Skills</a>
          </li>
          <li>
            <a href='#contact' className={` hover:text-primary ${darkMode ? "whiteText" : "darkText"}`}>Contact</a>
          </li>
        </ul>
        <svg className={`w-1/6 h-10 bg-no-repeat  border-none ${darkMode ?  "bg-bulb-on" : "bg-bulb-off"}`}
           onClick={() => toggleDarkMode(false)}
        />
      </nav>
    </>
  )
}

export default Header;