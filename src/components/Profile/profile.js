import React, { useEffect, useState } from 'react';
import './profile.css'

function Profile({ charge }) {
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    "name": name,
                    "image": "",
                    "latitude": latitude,
                    "longitude": longitude,
                    "battery-level": charge
                })
            };
            fetch('http://127.0.0.1:8000/', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
        } catch (error) {
            console.log(error)
        }
    }, [longitude, latitude, name])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target.firstname.value + " " + e.target.lastname.value)
        console.log(charge)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }

        function success(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setName(e.target.firstname.value + " " + e.target.lastname.value);
        }

        function error() {
            console.log('Unable to retrieve your location');
        }
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