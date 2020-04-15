import React from 'react'
import '../assets/css/style.css'

class SearchMinion extends React.Component{
    render() {
        return(
            <div className="search-minion-container">
                <label for="minion-name">Minion name:</label>
                <input type="text" id="minion-name"></input>
            </div>
        )
    }
}

export default SearchMinion