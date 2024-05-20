import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    // let info = {
    //     city: "lucknow",
    //     temp: 28.05,
    //     tempMin: 24.23,
    //     tempMax: 25.23,
    //     humidity: 24.14,
    //     feelsLike: 49.02,
    //     weather: "haze",
    // };
    return (
    <div className='card'>
        <br></br>
        <br></br>
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
            sx={{ height: 140 }}
            image="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-jplenio-1118873.jpg&fm=jpg"
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
                <div>Temperature = {info.temp} &deg;C</div>
                <div>Min_Temperature = {info.tempMin} &deg;C</div>
                <div>Max_Temperature = {info.tempMax} &deg;C</div>
                <div>Humudity = {info.humidity}</div>
                <div>THe Weather can be discribe as a {info.weather} feels like {info.feelsLike} &deg;C  </div>
            </Typography>
            </CardContent>
        </Card>
    </div>
)};