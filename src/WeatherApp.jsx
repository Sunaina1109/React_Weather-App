import React, { useState } from 'react';
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]= useState({
        city: "lucknow",
        temp: 28.05,
        tempMin: 24.23,
        tempMax: 25.23,
        humidity: 24.14,
        feelsLike: 49.02,
        weather: "haze",
    });
    let updateInfo=(newinfo)=>{
      setWeatherInfo(newinfo);
    };

    return (
        <div style={{textAlign: "center"}}>
           <h1>Weather Report!</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>       
        </div>
    )
};
// export default function App(){
//     const nums=[1,2,3,4,5];

//     return (
//         <div>
//             <h2>Numbers</h2>
//             <ul>
//                 {nums.map(number=>(
//                     <li key={number}>{number}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };