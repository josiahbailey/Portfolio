import React from 'react'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Socials from './components/Socials'
import Scroll from './components/Scroll'

const App = () => {
    return (
        <div className="App">
            <Socials />
            <Scroll />
            <Nav />
            <Landing />
        </div>
    );
}

export default App;
