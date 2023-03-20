import React from 'react'


const Experience = (props) => {

  const { darkMode } = props

  const experience = [
    {
      role: 'Front-End Developer',
      desc: 'AgileWave Tech (June 2021 - Aug 2022)',
    },
    {
      role: 'No-Code and Low-code Developer',
      desc: 'Upwork (Jan 2021 - June 2021)'
    },
    {
      role: 'Front-End Developer',
      desc: 'MedSpecialized Inc. PH (May 2017 - Jan 2021)',
    },
    {
      role: 'Lead Generation',
      desc: 'Your Virtual Sidekick Inc. PH (Nov 2020 - Mar 2021',
    },
    {
      role: 'Social Media Content Creator / VA',
      desc: 'Your Virtual Sidekick Inc. PH (Jan 2020 - Nov 2020)',
    },

  
  ]
  return (
    <div id="experience" className={`py-8  ${darkMode ? "offdark" : "offlight"}`}>
      <h1 className='text-primary text-5xl mb-5 text-center'>Experience</h1>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-baseline my-12'>
          {
            experience.map(exp => 
              <div className=''>
                <div className='flex gap-2 items-center'>
                  <div className='h-4 w-4 bg-primary rounded-full mr-3'></div>
                  <div>
                    <p className={` ${darkMode ? "whiteText" : "darkText"} text-2xl`}>{exp.role}</p>
                    <p className={` ${darkMode ? "whiteText" : "darkText"} text-1xl`}>{exp.desc}</p>
                  </div>
                </div>
                <div className='h-20 w-1 bg-primary ml-1'></div>
              </div>
              ) 
          }
        </div>
    </div>
    </div>

  )
}

export default Experience;