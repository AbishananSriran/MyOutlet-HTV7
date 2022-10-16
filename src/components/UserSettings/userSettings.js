import React from 'react';
import './userSettings.css'

function UserSettings() {
    return (
        <div className='settingsContainer'>
        <div className='settingsWindow'>
            <h1 className='settings'>Settings</h1>
            <hr className='line'/>
            <div className='toggleSettings'>
                <div className='row'>
                    <h3 className='label'>Enable Dark Mode</h3>
                    <div className='slider'>
                        Slider1
                    </div>
                </div>
                <div className='row'>
                    <h3 className='label'>Enable Notifications</h3>
                    <div className='slider'>
                        Slider2
                    </div>
                </div>
                <div className='row'>
                    <h3 className='label'>Enable Location Services</h3>
                    <div className='slider'>
                        Slider3
                    </div>
                </div>
            </div>
            <hr className='line'/>
            <h1 className='contact'>Contact Us</h1>
            <h2>Email Address: support@myoutlet.com</h2>
            <h2>Telephone #: (123) - 456 -7890</h2>
        </div>
        </div>
    );
}

export default UserSettings;