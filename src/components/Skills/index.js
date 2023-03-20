import React from 'react'

const Skills = (props) => {

  const { darkMode } = props

  const skillset = [
    {
      name: 'ReactJS',
      rate: 80,
    },
    {
      name: 'AngularJS',
      rate: 90
    },
    {
      name: 'HTML5/CSS',
      rate: 90,
    },
    {
      name: 'Material UI',
      rate: 80
    },
    {
      name: 'Javascript ES6',
      rate: 80,
    },
    {
      name: 'React redux',
      rate: 80
    },
    {
      name: 'CSS preprocessorS like SASS and Stylus',
      rate: 80
    },
    {
      name: 'Rest API',
      rate: 60
    },
    {
      name: 'TailwindCSS',
      rate: 40
    },
    {
      name: 'Vue',
      rate: 40
    }
  ]
  return (
    <div id="skills" className={` ${darkMode ? 'dark' : 'light '} p-20`}>
      <h1 className='text-primary text-6xl text-center'>Skill-Set</h1>
      <div className='w-full flex flex-wrap'>
        {
          skillset.map((skill) => 
          <div className='w-2/4 p-6'>
            <div className='flex justify-between'>
              <p className={` ${darkMode ? "whiteText" : "darkText"} text-lg`}>{skill.name}</p>
              <p className={` ${darkMode ? "whiteText" : "darkText"} text-2xl`}>{skill.rate}%</p>
            </div>
            <div className='h-4 w-full bg-off-primary rounded-full'>
              <div className="bg-primary h-4 rounded-full text-white" style={{width: `${skill.rate}%`}}></div>
            </div>
          </div>
          )
        }
      </div>
    
    </div>
  )
}

export default Skills;