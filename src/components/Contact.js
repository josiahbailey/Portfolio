import React from 'react';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="ContactCenter">
                <div className="ContactCenterLeft">
                    <div className="ContactTitle">
                        <h2>GET IN TOUCH</h2>
                    </div>
                    <div className="ContactText">
                        <h3>josiahbailey101@yahoo.com</h3>
                    </div>
                    <div className="ContactText">
                        <h3>315-420-6723</h3>
                    </div>
                    <div className="ContactText">
                        <h3>Syrcacuse, New York</h3>
                    </div>
                </div>
                <div className="ContactCenterRight">
                    <form>
                        <input className="EmailInput" name="email" type="email" placeholder="Email" />
                        <input className="NameInput" name="name" type="name" placeholder="Name" />
                        {/* <input className="MessageInput" name="message" type="text" placeholder="Message" /> */}
                        <textarea className="MessageInput" name="message" placeholder="Message" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact