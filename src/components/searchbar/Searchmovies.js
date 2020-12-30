import React, {useState} from 'react'
import './Searchbar.css';

export default function SearchMovies() {

    var [clicked, setClick] = useState(false);

    function handleClick(event) {
        handleUpdate()
        var category = event.target.innerText;
        document.getElementsByClassName("sh-default-option")[0].innerText = category;
    }
    function handleUpdate(){
        setClick(!clicked);
    }
    

    function searchMovies(e){        
        e.preventDefault();
        var category = document.getElementsByClassName("sh-default-option")[0].innerText
        var s = ""+document.getElementsByClassName("sh-input")[0].value;
        console.log(s);
        if(category === "CATEGORIES" || category === "ALL")
        {
            window.location.href = `/search/ALL/${s}`;
        }
        else{
            window.location.href = `/search/${category}/${s}`;
        }

    }
    
    return (
        <div className="sh-container">
        {/* <h1 className="sh-title">React Movie Search</h1>  */}
        <form className="sh-form" onSubmit={searchMovies}>
           
            <label className="sh-label" htmlFor="query">
            <div className="sh-dropdown" onClick = {handleUpdate}>
                <div className="sh-default-option">Categories</div>
                <div className="sh-dropdown-list">
                    <ul className = {clicked ? 'sh-active': 'sh-not-active'}>
                        <li onClick = {handleClick}>Anime</li>
                        <li onClick = {handleClick}>Manga</li>
                        <li onClick = {handleClick}>Movies</li>
                        <li onClick = {handleClick}>TvShows</li>
                        <li onClick = {handleClick}>All</li>
                    </ul>
                </div>
            </div>
               
            </label>  

            <input className="sh-input" type="text" name="query"
             placeholder="Search for Anime,Manga,Movies,TvShows......."/>
        <button className="sh-button" type="submit">Search</button>  
        
           </form>
        {/* {console.log(document.getElementsByClassName("sh-default-option")[0].innerText)} */}
        </div>
    )
}