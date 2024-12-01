import React from 'react'
import Introduction from './Introduction';
import Academics from './Academics';
import Projects from './Projects';
import Header from './Header';
import Footer from './Footer';
import Skill from './Skill';

const App = () => {
  return (
    <div>
      <Header/>
      <Introduction/>
      <Skill/>
      <Projects/>
      <Academics/>
      <Footer/>
    </div>
  )
}

export default App;