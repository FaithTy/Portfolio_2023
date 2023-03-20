import React, { useState } from 'react'

const Contact = (props) => {
    const { darkMode } = props
  return (
    <div id="contact" className={`${darkMode ? "offdark" : "offlight"} w-full h-[450px] p-20`}>
      <p class='text-primary text-5xl mb-10'>Contact me</p>
      <form class='flex flex-col'>
        <input class='shadow border-none rounded w-2/3 h-10 focus:outline-none focus:shadow-outline p-6 mb-7' type='text' placeholder='Email'></input>
        <input class='shadow border-none rounded w-2/3 h-10 focus:outline-none focus:shadow-outline p-6 mb-7' type='text' placeholder='Message'></input>
        <button class='bg-primary rounded h-12 w-36 text-white p-3 hover:bg-primary1'
        >Message me</button>
      </form>
    </div>
  )
}

export default Contact;