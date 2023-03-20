import React from 'react'

// import PDFResume from '../../imgs/Faith_Daal_resume_.pdf'

const About = (props) => {
  const { darkMode } = props

  return (
    <>
    <div id="about" className={`flex items-center ${darkMode ? "offdark" : "offlight"} gap-10 p-20`}>
    <p class='text-primary text-3xl lg:text-6xl'>About ME</p>
      <div className='w-4/5'>
        <p className={`${darkMode ? "whiteText" : "darkText"} text-4xl`}>
          5 years experience as a Front-End Developer. Working on male-dominated industry gives me a thrill on taking
          up this kind of challenges. This challenges will surely helps me a lot for my skills and future. 
        </p>
        <a href='https://www.linkedin.com/in/faith-daal-3aa6a1114/'>
          <button class='w-1/5  bg-transparent hover:bg-primary border border-primary text-primary hover:text-white font-bold py-2 px-4 mt-10 rounded'>
          LINKED IN
          </button>
        </a>
      </div>
    </div>
    </>
  )
}

export default About;