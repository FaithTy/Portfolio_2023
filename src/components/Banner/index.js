import React from 'react'

const Banner = (props) => {
  const { darkMode } = props
 return (
    <>
      <div className={`h-screen flex justify-center items-center lg:gap-10 p-20 ${darkMode ? "dark" : "light"}`}>
        <div className='ml-12'>
          <p className="text-3xl md:text-5xl text-primary font-bold">HI! I'M FAITH DAAL & I'M A</p>
          <p className="text-3xl md:text-5xl text-white font-bold">FRONT-END DEVELOPER.</p>
        </div>
        <div>
          <div className='h-screen w-96 md:w-72 ml-6 bg-me bg-center bg-cover bg-no-repeat'></div>
        </div>
      </div>
    </>
 )
}

export default Banner