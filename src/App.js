import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Project from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
    console.log(darkMode, 'darkMode---')
  }

  console.log(darkMode, 'darkmod')

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Banner darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode}/>
      <Experience darkMode={darkMode}/>
      <Project darkMode={darkMode}/>
      {/* <Contact darkMode={darkMode}/> */}
      {/* <Footer  darkMode={darkMode} /> */}
    </div>
  );
}

export default App;
