import React from 'react';
import qrCode from './images/qrCode.png';

function App() {
    return (
        <div className=':w-screen h-screen bg-lightGray flex justify-center items-center'>
            <div className='w-[325px] h-[500px] rounded-md bg-white flex justify-around items-center'>
                <div className='w-[90%] h-[95%] flex flex-col justify-around items-center'>
                    <img className='rounded-md' src={qrCode} alt='qrCode' />
                    <h1 className='text-darkBlue text-xl font-outfit font-bold text-center'>Improve your front-end skills by building projects</h1>
                    <p className='w-[90%] font-outfit text-s text-grayishBlue text-center'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>

            </div>
        </div>
    )
}

export default App;