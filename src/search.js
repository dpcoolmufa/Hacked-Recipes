import React from "react"

const Search = ({searchChange}) => {
   
    return (
    <div className="search">
            <img src="https://img.icons8.com/dusk/64/000000/search.png" style={{"height":25+"px","width":20+"px","float":"left"}}/>
            <input className="search-bar" type="search" placeholder="Search your favourie recipe!"  onChange={searchChange}/>
    </div>
    )
}

export default Search