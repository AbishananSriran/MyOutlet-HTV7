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

function Battery({ charge, setCharge}) {

    if (charge === 1) {
        return (
            <div className='socialBattery'>
              <img className="batteryImg" src={emptyImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge(1)} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(2)} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(3)} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(4)} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(5)} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    } else if (charge === 2) {
        return (
            <div className='socialBattery'>
              <img className="batteryImg" src={lowImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge(1)} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(2)} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(3)} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(4)} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(5)} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    } else if (charge === 3) {
        return (
            <div className='socialBattery'>
              <img className="batteryImg" src={halfImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge(1)} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(2)} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(3)} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(4)} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(5)} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    } else if (charge === 4) {
        return (
            <div className='socialBattery'>
              <img className="batteryImg" src={highImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge(1)} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(2)} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(3)} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(4)} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(5)} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    } else if (charge === 5) {
        return (
            <div className='socialBattery'>
              <img className="batteryImg" src={fullImg} alt='Social Battery'/>
              <div className='batteryButtons'>
                <h3 className='toggleBattery' onClick={() => setCharge(1)} cursor='pointer'>
                    <img src={ellipse1} alt="Ellipse1"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(2)} cursor='pointer'>
                    <img src={ellipse2} alt="Ellipse2"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(3)} cursor='pointer'>
                    <img src={ellipse3} alt="Ellipse3"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(4)} cursor='pointer'>
                    <img src={ellipse4} alt="Ellipse4"/>
                </h3>
                <h3 className='toggleBattery' onClick={() => setCharge(5)} cursor='pointer'>
                    <img src={ellipse5} alt="Ellipse5"/>
                </h3>
              </div>
            </div>
        );
    }
}

export default Battery;