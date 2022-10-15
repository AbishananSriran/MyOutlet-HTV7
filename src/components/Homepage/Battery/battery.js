import { useState } from 'react';
import './battery.css'

function Battery() {
    const [charge, setCharge] = useState("empty")

    if (charge === "empty") {
        return (
            <div className='battery'>
                <img src='' alt='Social Battery'/>
            </div>
        );
    } else if (charge === "low") {
        return (
            <div className='battery'>
                <img src='' alt='Social Battery'/>
            </div>
        );
    } else if (charge === "half-full") {
        return (
            <div className='battery'>
                <img src='' alt='Social Battery'/>
            </div>
        );
    } else if (charge === "high") {
        return (
            <div className='battery'>
                <img src='' alt='Social Battery'/>
            </div>
        );
    } else if (charge === "full") {
        return (
            <div className='battery'>
                <img src='' alt='Social Battery'/>
            </div>
        );
    }
}

export default Battery;