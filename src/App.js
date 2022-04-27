import './App.css'

import {
    BsFillCloudRainFill,
    BsFillCloudSnowFill,
    BsFillCloudyFill,
    BsSunFill,
    BsMoonFill,
} from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'

// const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
function App() {
    return (
        <div className="App">
            <header>
                <h1 className="title">Rainnin</h1>
            </header>
            <input className="SearchBar" placeholder="enter a city here" />
            <button className="ActionStyle">
                <BiSearchAlt /> Search
            </button>

            <main className="DataTab">
                <span className="WeatherTitle">London | U.K. </span>

                {/* <span className="WeatherTitle">
                   {this.state.locationDiv}
                </span> */}
                <br />
                <br />
                <br />

                {/* <div>
                
                <span className='DegStyle'>{this.state.weatherDegrees}</span> 

                <span className='DayStyle'>{this.state.dateType} </span>
                <span className='DayTypeSyle'>{this.state.weatherType}</span>
                
                </div> 
                <hr className='LineDiv'></hr>
                */}

                <div>
                    <span className="WeatherIcon">
                        <BsFillCloudRainFill />
                    </span>
                    <span className="DegStyle"> | </span>
                    <span className="DegStyle">45'F</span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayStyle">Thur, Apr 28 </span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayTypeSyle">Rainy</span>
                </div>
                <hr className="LineDiv"></hr>
                <div>
                    <span className="WeatherIcon">
                        <BsFillCloudSnowFill />
                    </span>
                    <span className="DegStyle"> | </span>
                    <span className="DegStyle">48'F</span>
                    <span className="DegStyle"> | </span>
                    <span className="DayStyle">Fri, Apr 29 </span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayTypeSyle">Snowy</span>
                </div>
                <hr className="LineDiv"></hr>
                <div>
                    <span className="WeatherIcon">
                        <BsFillCloudyFill />{' '}
                    </span>
                    <span className="DegStyle"> | </span>
                    <span className="DegStyle">43'F</span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayStyle">Sat, Apr 30 </span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayTypeSyle">Cloudy</span>
                </div>
                <hr className="LineDiv"></hr>
                <div>
                    <span className="WeatherIcon">
                        <BsSunFill />{' '}
                    </span>
                    <span className="DegStyle"> | </span>
                    <span className="DegStyle">41'F</span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayStyle">Sun, May 1 </span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayTypeSyle">Sunny</span>
                </div>
                <hr className="LineDiv"></hr>
                <div>
                    <span className="WeatherIcon">
                        <BsMoonFill />
                    </span>
                    <span className="DegStyle"> | </span>
                    <span className="DegStyle">50'F</span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayStyle">Mon, May 2 </span>{' '}
                    <span className="DegStyle"> | </span>
                    <span className="DayTypeSyle">Cloudy</span>
                </div>
                <hr className="LineDiv"></hr>
            </main>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default App
