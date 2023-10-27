import { useEffect, useState } from "react";
import { NavLink, json } from "react-router-dom";
import cold from '../assets/cold.png'
import mild from '../assets/mild.png'
import sunny from '../assets/sunny.png'
import town from '../assets/town.jpg'
import '../styles/Home.css'

const Home = () => {
    const [weather, setWeather] = useState()
    const [unit, setUnit] = useState('C')

    const fetchWeather = async () =>{
        const lat = 27.700769
        const lon =  85.300140
        const API_KEY = "19de3b04ec54d4f8db1a2433a61da733"
        let apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
                                .then(response => response.json())
                                .then(data =>  data)
                                .catch(error => console.error(error));

        apiResponse && setWeather(apiResponse?.main?.temp)
        
    }

    useEffect(()=>{
        fetchWeather()
    },[])


    const fetchPicture  = (weather) =>{

        return unit === "C" ?
        (weather<10?
        <img src={cold} alt="cold_weather"/>
        :(weather>10 && weather<20)?
        <img src={mild}  alt="mild_weather"/>
        :
        <img src={sunny}  alt="sunny_weather"/>)
        :

        ( weather<50?
        <img src={cold} alt="cold_weather"/>
        :(weather>50 &&weather<68)?
        <img src={mild} alt="mild_weather"/>
        :
        <img src={sunny} alt="mild_weather"/>)

    }

    const toggleWeather = () =>{
        if(unit==="C"){
            setUnit("F")
           setWeather(weather * 1.8 + 32)
            
        }else{
            setUnit("C")
            setWeather(((weather - 32) * 5) / 9)  
        }
    }
    
    return (
       <div id="home">
        <div className="homeInner">
            <div className="townImg">
                <img src={town} alt="My_Town_Kathmandu" />
                
            </div>

            <div className="town">
                    <h3>
                    I am from Kathmandu, Nepal.
                    </h3>
                    <div className="weather">
                    <h5>Current Weather of Kathmandu:</h5>
                    <div className="weather-inner">
                        <p>{weather?.toFixed(2)}&deg; {unit}</p>
                        {fetchPicture(weather)}
                        </div>

                </div>
                <button className="toggleBtn" onClick={()=>toggleWeather()}>Show in {unit==='C'?'F':'C'}</button>

            </div>

           

        </div>
       </div>

    );
   };
   
   
export default Home;

