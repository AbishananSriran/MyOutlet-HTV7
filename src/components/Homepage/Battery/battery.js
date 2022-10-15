import { useState } from 'react';
import './battery.css'
import emptyImg from '../../../assets/20%.png'
import lowImg from '../../../assets/40%.png'
import halfImg from '../../../assets/60%.png'
import highImg from '../../../assets/80%.png'
import fullImg from '../../../assets/100%.png'
import ellipse5 from '../../../assets/Ellipse1.png'
import ellipse4 from '../../../assets/Ellipse2.png'
import ellipse3 from '../../../assets/Ellipse3.png'
import ellipse2 from '../../../assets/Ellipse4.png'
import ellipse1 from '../../../assets/Ellipse5.png'

function Battery() {
    const [charge, setCharge] = useState("empty")

    if (charge === "empty") {
        return (
            <div className='socialBattery'>
              <img classname="batteryImg" src={emptyImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge("empty")} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("low")} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("half")} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("high")} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("full")} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    } else if (charge === "low") {
        return (
            <div className='socialBattery'>
              <img classname="batteryImg" src={lowImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge("empty")} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("low")} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("half")} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("high")} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("full")} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    } else if (charge === "half") {
        return (
            <div className='socialBattery'>
              <img classname="batteryImg" src={halfImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge("empty")} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("low")} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("half")} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("high")} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("full")} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    } else if (charge === "high") {
        return (
            <div className='socialBattery'>
              <img classname="batteryImg" src={highImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge("empty")} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("low")} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("half")} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("high")} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("full")} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    } else if (charge === "full") {
        return (
            <div className='socialBattery'>
              <img classname="batteryImg" src={fullImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge("empty")} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("low")} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("half")} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("high")} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge("full")} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    }
}

export default Battery;