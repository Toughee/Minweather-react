import './App.css'

import { BiRefresh, BiSearchAlt } from 'react-icons/bi'

function App() {
    return (
        <div className="App">
            <header>
                <h1 className="title">Rainnin</h1>
            </header>

            <button className="ActionStyle">
                <BiRefresh />
            </button>
            <input className="SearchBar" placeholder="enter a city here" />
            <button className="ActionStyle">
                <BiSearchAlt />
            </button>
        </div>
    )
}

export default App
