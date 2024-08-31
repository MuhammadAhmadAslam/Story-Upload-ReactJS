import React from "react";


let Make = ({ bgColor, setBgColor, textColor, setTextColor, addStatusFunction , statusText , setStatusText}) => {
    return (
        <div className="flex mt-28 justify-center items-center">
            <div className='container'>
                <label htmlFor="status-text" className='text-2xl font-medium mx-3 xl:w-[25%] lg:w-[50%] md:w-[50%] sm:w-[100%] w-full'>Status Text:
                    <input type="text" id='status-text' value={statusText} onChange={(event) => setStatusText(event.target.value)} className='w-full h-[60px] bg-transparent placeholder:text-black border placeholder:text-[15px] border-black px-4 rounded-md outline-none focus:border-purple-500' placeholder='Enter A text You Want To Display On Story & Status' />
                </label>
                <br /><br /><br />
                <label htmlFor="status-bg-color" className='text-2xl font-medium mx-3 xl:w-[25%] lg:w-[50%] md:w-[50%] sm:w-[100%] w-full'>BG Color:
                    <input type="color" id='status-bg-color' value={bgColor} onChange={(event) => setBgColor(event.target.value)} className='w-full h-[60px] bg-transparent placeholder:text-black border placeholder:text-[15px] border-black px-3 rounded-md outline-none focus:border-purple-500' placeholder='Enter A text You Want To Display On Story & Status' />
                </label>
                <br /><br /><br />
                <label htmlFor="status-bg-color" className='text-2xl font-medium mx-3 xl:w-[25%] lg:w-[50%] md:w-[50%] sm:w-[100%] w-full'>Text Color:
                    <input type="color" id='status-text-color' value={textColor} onChange={(event) => setTextColor(event.target.value)} className='w-full h-[60px] bg-transparent placeholder:text-black border placeholder:text-[15px] border-black px-3 rounded-md outline-none focus:border-purple-500' placeholder='Enter A text You Want To Display On Story & Status' />
                </label>
                <br /><br /><br />
                <div className="flex justify-center items-center">
                    <button onClick={() => addStatusFunction()} className='border border-black px-5 py-3 text-2xl font-bold font-sans hover:scale-105 hover:border-blue-500'>Add Status</button>
                </div>
            </div>
        </div>
    )
}


export default Make