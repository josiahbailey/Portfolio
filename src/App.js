import React from 'react'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Socials from './components/Socials'
import Scroll from './components/Scroll'

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Scroll />
            <Socials />
            <Landing />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
