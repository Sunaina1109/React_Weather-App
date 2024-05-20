import { useState } from "react";
import SearchBox from "./SearchBox";
// import infoBox from "./infobox"; // Import InfoBox component

export default function WeatherApp() { // Changed component name to start with uppercase
    const [weatherInfo, setWeatherInfo] = useState({
        temp: "lucknow",
        tempMin: 24.23,
        tempMax: 25.23,
        humidity: 24.14,
        feelsLike: 49.02,
        weather: "haze"
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <infoBox info={weatherInfo} />
        </div>
    );
};
