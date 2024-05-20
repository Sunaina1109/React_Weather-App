import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) { // Receive updateInfo as a prop
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1ba2c720459b4a8aa1df3e73c68634f8";

    const weatherInfo = async () => {
        try {
            const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonRes = await res.json();
            console.log(jsonRes);
            const result = {
            
                city:city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
            };
            console.log(result)
            return result
        } catch (err) {
            throw err;
        }     
    };

    const handleCity = (evt) => {
        setCity(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            // console.log(city);
            setCity("");
            const newinfo = await weatherInfo();
            updateInfo(newinfo); // Pass the retrieved weather information to the parent component
        }catch (err) {
            setError (true);
        }
            
    };

    return (
        <div className='SearchBox'>
            {/* <h1>Weather Report!</h1> */}
            <form onSubmit={handleSubmit}>
                <TextField id="City"
                    label="City Name"
                    variant="outlined" required
                    value={city}
                    onChange={handleCity} />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p>No Such Place In Our API</p>}
            </form>
        </div>
    );

}; 