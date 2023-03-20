import React from 'react'


const Project = (props) => {

  const { darkMode } = props

  const projects = [
    {
      name: 'Learning Management Center',
      link:'https://lmcenter.net/',
      description: 'Learning Management Center is e-learning an e-learning software that serves as a standard training site for clients and employees.',
      tools: ['AngularJS', 'HTML/CSS', 'Javascript', 'Agile Methodology'],
      contributions: [
        'Responsible for QA for the functions and UI/UX experience',
        'Responsible for send and recieve data to backend thru RestAPI',
        'Responsible for convert mockups to UI design',
        'Database planning',
        'Responsible for data manipulation',
      ]
    },
    {
      name: 'Food app',
      link:  '',
      description: 'Food application is food ordering system in the company. Employees can choice a meal for that week. Vendors can CRUD the meals for that week. An admin can generate reports.',
      tools: [],
      contributions: [
        'Responsible to send and recieve data from/to backend',
        'Responsible to generate reports accurately',
        'Responsible to communicate well with my co-developer and the adminstrators',
        'Responsible to maintain the web application'
      ]
    },
    {
      name: 'Mentis Talent Map',
      link: 'https://mentistalentmap.com/',
      description: 'Mentis Talent Map is web application where can generate reports, take and evaluate assesments and etc. ',
      tools: [],
      contributions: [
        'Responsible to convert the mockup designs',
        'Responsible to integrate data from the front-end to back-end side',
        'Responsible  to QA before and after production',
        'Responsible to assist client needs',
      ]
    }
  ]

  return (
    <div id="projects" className={`${darkMode ? "dark" : "light"} p-20`}>
      <p className='text-primary text-6xl text-center mb-10'>Projects</p>
      <div className='flex flex-col lg:flex-row lg:gap-10'>
        {
          projects.map(proj => 
            <div className={`flex flex-col justify-between gap-10 ${darkMode ? "even:dark" : "light"} odd:bg-primary even:bg-dark rounded shadow-2xl p-8`}
             
            >
                <div className='text-white'>
                  <p>{proj.description}</p>
                  <p>Contributions:</p>
                  <ul class='list-disc'>
                    {
                      proj.contributions.map(contr => 
                      <li>
                        <p>{contr}</p>
                      </li>)
                    }
                  </ul>
                </div>
                {
                  proj.link === '' ? <></>
                  :
                  <a href={proj.link}>
                    <button className='w-80 border hover:border-none hover:bg-dark hover:text-primary text-white rounded p-2'>View</button>
                  </a>
                }
            </div>
            )
        }
     </div>
    </div>
  )
}

export default Project;