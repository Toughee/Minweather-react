import './App.css'

import {
    BsFillCloudRainFill,
    BsFillCloudSnowFill,
    BsFillCloudyFill,
    BsSunFill,
    BsMoonFill,
} from 'react-icons/bs'
import { BiRefresh, BiSearchAlt } from 'react-icons/bi'

function App() {
    return (
        <div className="App">
            <header>
                <h1 className="title">Rainnin</h1>
            </header>
            {/*
            <button className="ActionStyle">
                <BiRefresh />
            </button>*/}
            <input className="SearchBar" placeholder="enter a city here" />
            <button className="ActionStyle">
                <BiSearchAlt /> Search
            </button>

            <main className="DataTab">
                <span className="WeatherTitle">
                    The weather for London, United Kingdom is:{' '}
                </span>
                <br />
                <br />
                <br />
                <span className="WeatherIcon">
                    <BsFillCloudRainFill />
                </span>
                <span className="WeatherIcon">
                    <BsFillCloudSnowFill />
                </span>
                <span className="WeatherIcon">
                    <BsFillCloudyFill />{' '}
                </span>
                <span className="WeatherIcon">
                    <BsSunFill />{' '}
                </span>
                <span className="WeatherIcon">
                    <BsMoonFill />
                </span>
            </main>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default App
