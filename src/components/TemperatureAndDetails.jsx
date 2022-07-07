import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons';

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-200'>
            <p>Coudy</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'> 
            <img 
             src='http://openweathermap.org/img/wn/01d@2x.png' 
            className='w-20' 
            alt='red circle'
            />
            <p className='text-5xl'>34°C</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Real fell:
                    <span className='font-medium ml-1'> 32°C </span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'> 65% </span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'> 15 km/h </span>
                </div>               
            </div>
        </div>


        <div className='flex flex-row items-center justify-center space-x-2 text-white text-xs py-3'>
            <UilSun />
            <p className='font-light'>
                Rise: <span className='font-light ml-1'>04:30 AM</span>
            </p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>
                Set: <span className='font-light ml-1'>05:30 PM</span>
            </p>
            <p className='font-light'>|</p>

            <UilArrowUp />
            <p className='font-light'>
                High: <span className='font-light ml-1'>35°C</span>
            </p>
            <p className='font-light'>|</p>

            <UilArrowDown />
            <p className='font-light'>
                Low: <span className='font-light ml-1'>28°C</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails