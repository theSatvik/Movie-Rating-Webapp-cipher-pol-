import React,{ useEffect, useState }from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeSlider from "./components/homeslider/HomeSlider"
import RandomCard from "./components/randomcard/RandomCard"
import Axios from "axios";
import Card from "./components/Card/Card"
import MangaElement from './components/ElementPage/MangaElement'
import SearchList from "./components/searchpage/SearchList"
import AnimeElement from './components/ElementPage/AnimeElement'
import MovieElement from './components/ElementPage/MovieElement'
import TvElement from './components/ElementPage/TvElement'
import SupportPage from './components/SupportPage/SupportPage'
import PageNotFound from './components/PageNotFound/PageNotFound'




export default function App(props)
{
    
    function HomeComponent(){
        return(
            <>
                <RandomCard></RandomCard>
                <HomeSlider data = {movieList} name = "Movies"></HomeSlider>
                <HomeSlider data = {animeList} name = "Anime"></HomeSlider>
                <HomeSlider data = {tvList} name = "Tv-Shows"></HomeSlider>
                <HomeSlider data = {mangaList} name = "Manga"></HomeSlider>
                
            </>
        )
    }
    function MoviesPage(){
        return(
            <Card showData = {movieList} text = "Movies"></Card>
        )
    }
    function AnimePage(){
        return(
            <Card showData = {animeList} text = "Anime"></Card>
        )
    }
    function TvPage(){
        return(
            <Card showData = {tvList} text = "Tv-Shows"></Card>
        )
    }
    function MangaPage(props){
        return(
            <Card showData = {mangaList} text = "Manga"></Card>
        )
    }

    function SearchAnime(props){
        
        
        return(
            <SearchList category = "Anime" showData = {animeList} text = {props.match.params.text}/>
        )
    }
    function SearchMovie(props){
        return(
            <SearchList category = "Movie" showData = {movieList} text = {props.match.params.text}/>
        )
    }
    function SearchManga(props){
        return(
            <SearchList category = "Manga" showData = {mangaList} text = {props.match.params.text}/>
        )
    }
    function SearchTv(props){
        return(
            <SearchList category = "Tv" showData = {tvList} text = {props.match.params.text}/>
        )
    }
    function SearchAll(props){
        return(
            <SearchList category = "All" showData = {[...animeList, ...mangaList, ...movieList, ...tvList]} text = {props.match.params.text}/>
        )
    }
    
     
      
    var [movieList, setmovieList] = useState([
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}}
    ]);
    var [animeList, setanimeList] = useState([
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}}
    ]);
    var [tvList, settvList] = useState([
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}}
    ]);
    var [mangaList, setmangaList] = useState([
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}},
        {name: "Loading...", img: "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",genre: {Loading: true},rating:{ nviews: "Loading...",  avgrating: "Loading..."}}
    ]);
    
    useEffect(() => {
        Axios.get("https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/movies").then((response) => {
                setmovieList(response.data.data.movies)
        })
        Axios.get("https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/anime").then((response) => {
                setanimeList(response.data.data.anime)
        })
        Axios.get("https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/tv").then((response) => {
                settvList(response.data.data.tv)
        })
        Axios.get("https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/manga").then((response) => {
                setmangaList(response.data.data.manga)
        })
        
    }, [])



    return(
        (
        <BrowserRouter>
            <div className = "ta-content-wrap">
                {/* <Elementpage></Elementpage> */}
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                        <Route exact path="/Anime" component={AnimePage} />
                        <Route exact path="/Movie" component={MoviesPage} />
                        <Route exact path="/Manga" component={MangaPage} />
                        <Route exact path="/Tv-Show" component={TvPage} />
                        <Route exact path="/Support" component={SupportPage} />
                        {/* <Route exact path="/Report" component={MangaPage} /> */}
                        <Route exact path="/search/ALL/:text" component={SearchAll} />
                        <Route exact path="/search/ANIME/:text" component={SearchAnime} />
                        <Route exact path="/search/MOVIES/:text" component={SearchMovie} />
                        <Route exact path="/search/MANGA/:text" component={SearchManga} />
                        <Route exact path="/search/TVSHOWS/:text" component={SearchTv} />
                        <Route exact path="/Anime/:id" component={AnimeElement} />
                        <Route exact path="/Movie/:id" component={MovieElement} />
                        <Route exact path="/Manga/:id" component={MangaElement} />
                        <Route exact path="/Tv-Show/:id" component={TvElement} />
                        
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
        )
    )
}

