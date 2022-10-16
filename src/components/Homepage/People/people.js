import React, { useEffect, useState } from 'react';
import './people.css'

function People({ id }) {
    const [currUser, setCurrUser] = useState(null)

    const getNearbyUsers = () => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                }
            };
            fetch(`http://127.0.0.1:8000/nearbyusers?_id=${id}&latitude=${currUser.data.latitude}&longitude=${currUser.data.longitude}`, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                };
                fetch(`http://127.0.0.1:8000/getuser?_id=${id}`, requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data));
                //getNearbyUsers()
            } catch (error) {
                console.log(error)
            }
        }
    }, [id])

    return (
        <div className='listContainer'>
            <div className='list'>
            </div>
        </div>
    );
}

export default People;