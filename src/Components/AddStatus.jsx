import React from "react";

let AddStatus = ({ timeRemaining, text, textColor, bgColor, index }) => {
    return (
        <div
            style={{ backgroundColor: bgColor, color: textColor }}
            className="xl:w-[30%] lg:w-[37%] md:w-[46%] sm:w-[100%] w-full hover:scale-125 h-[400px] flex flex-col justify-center items-center"
            key={index}
        >
            <p className="text-2xl px-3 py-3 text-[20px] h-[80%] w-full"> {text.length > 350 ? text.substring(0, 320) + "..." : text}</p>
            <p className="w-full text-end px-4"> {timeRemaining} S</p>
        </div>
    );
};

export default AddStatus;