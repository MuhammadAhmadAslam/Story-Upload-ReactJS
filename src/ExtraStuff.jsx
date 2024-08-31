// import { useEffect, useState } from 'react'
// import React from 'react'
// import "./index.css"
// import Make from './Components/Make'
// import AddStatus from './Components/AddStatus'
// function App() {


//   let [bgColor, setBgColor] = useState('#35901D')
//   let [textColor, setTextColor] = useState('#000')
//   let [statusText , setStatusText] = useState('')
//   let [allStatus , setAllStatus] = useState([])

  
//   let addStatusFunction = () => {
//     if (bgColor && textColor && statusText) {
//       setAllStatus([{bgColor: bgColor , textColor: textColor , statusText: statusText , timeRemaining: 300} , ...allStatus])
//       setBgColor('#35901D')
//       setTextColor('#000')
//       setStatusText('')
//     }  
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setAllStatus(allStatus.map(status => ({ bgColor: bgColor , textColor: textColor , statusText: statusText , timeRemaining: status.timeRemaining - 1 })));
//       console.log(allStatus);
      
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, [allStatus]);

//   useEffect(() => {
//     setAllStatus(allStatus.filter(status => status.timeRemaining > 0));
//   }, [allStatus]);
//   return (
//     <>
//       <h1 className='bg-transparent text-center text-4xl font-semibold pt-5 text-gray-900'>Status Maker</h1>

//       <Make bgColor={bgColor} statusText={statusText} setStatusText={setStatusText} setBgColor={setBgColor} textColor={textColor} setTextColor={setTextColor} addStatusFunction={() => addStatusFunction()} />


//       <div className="flex justify-center items-center mt-20 mb-10">
//       <div className="container flex justify-center items-center gap-9 flex-wrap">
      
//       {allStatus.length > 0 ? 
//           allStatus.map((status, index) => (
//               <AddStatus index={index} text={status.statusText} bgColor={status.bgColor} textColor={status.textColor} timeRemaining={status.timeRemaining--}/>
//           )) 
//           : <></>}
//       </div>
//       </div>
//     </>
//   )
// }

// export default App