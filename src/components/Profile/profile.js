import React from 'react';
import './profile.css'

function Profile({ charge }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.firstname.value)
        console.log(charge)
        
    }

    return (
        <div className='profileContainer'>
        <div className='profileWindow'>
            <h1 className='profile'>Profile</h1>
            <div className="contact-section" id="contact">
                <form className="info-form" onSubmit={(e) => handleSubmit(e)}>
                    <input className="firstname" name="firstname" placeholder="First Name"/>
                    <input className="lastname" name="lastname" placeholder="Last Name"/>
                    <input className="number" name="number" placeholder="Telephone Number"/>
                    <input className="email" name="email" placeholder="Email Address"/>
                    <br/> <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="submit" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Profile;