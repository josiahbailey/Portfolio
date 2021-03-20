import React from 'react';
import downarrow from '../images/downarrow.png'

const Scroll = () => {
    return (
        <div className="Scroll">
            <div className="ScrollText">
                Scroll Down
            </div>
            <div className="DownArrow">
                <img src={downarrow} />
            </div>
        </div>
    )
}

export default Scroll