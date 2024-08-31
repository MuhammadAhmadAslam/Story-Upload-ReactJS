import React from "react";


let AddStatus = ({text,textColor,bgColor}) => {
        return(
            <div className={`xl:w-[30%] lg:w-[37%] md:w-[46%] sm:w-[100%] w-full hover:scale-125 bg-[${bgColor}] h-[400px] flex justify-center items-center`}>
                <p className={`text-[${textColor}] text-2xl`}> {text} </p>
            </div>
        )
}

export default AddStatus;