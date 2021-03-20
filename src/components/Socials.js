import React from 'react'
import github from '../images/github.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'

const Socials = () => {
    return (
        <div className='Social'>
            <div>
                <img src={github} />
            </div>
            <div>
                <img src={twitter} />
            </div>
            <div>
                <img src={facebook} />
            </div>
            <div>
                <img src={linkedin} />
            </div>
        </div>
    )
}

export default Socials