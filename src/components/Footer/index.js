import React from 'react'

const Footer = (props) => {
  const {darkMode } = props
  return (
    <div className={`${darkMode ? "dark" : "light"} h-16`}>
      <p class='text-white'>copyrights reserved blah blah</p>
    </div>
  )
}

export default Footer;