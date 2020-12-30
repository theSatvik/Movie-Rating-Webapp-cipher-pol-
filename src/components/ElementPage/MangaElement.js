import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {  FaThumbsUp, FaStar } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Axios from 'axios';
import CommentSection from './CommentSection';
import "./ElementSlider.css";


let theme={
  border: {cool:"skyblue"},
  primary:{
    main:"#2B2B29"
  },
  secondary:{
    main:"#2B2B29"
  }
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,  
};
const StyledRoot = styled.div`
padding: 50px 12px;
`
const StyledContainer1 = styled.div`
  max-width: 85%;
  width: 100%;
  margin: auto;
`
const StyledContainer = styled.div`
border: ${(props) => `1px solid ${props.theme.border.cool}`};
display: inline-flex;
  padding: 17px 12px 18px;
 
  background: ${(props) => `linear-gradient(
    75deg, ${props.theme.primary.main}, ${props.theme.secondary.main}
  )`};
  @media (max-width: 500px) {
    flex-direction: column;
  }
  ;
  
`
const Date1 = styled.div`
  color: #ccc;  
  font-weight: 100;
  margin: 6px 0px;
  @media (max-width: 500px) {
    font-size: 1rem;
    text-align:center;
  }
`
const Description = styled.p`
  color: #fff;
  padding-right: 200px;
  font-weight: 300;
  @media (max-width: 1000px) {
    font-size: 0.93rem;
    padding-right: 30px;
  }
`
const Actions = styled.div`
  color: #333;
  display: flex;
  margin-top:auto;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    // margin-top:100px;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`
const Action = styled.button`
  margin: 10px 0px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: ${(props) => props.theme.primary.main};
  }
`
const ActionStar = styled.div`
  
  padding: 0px 0px 7px ;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: ${(props) => props.theme.primary.main};
  }
`

const Flexing = styled.div`
padding-left: 10px;
@media (max-width: 500px) {
  flex-direction: column;
}
`
const Title = styled.h2`
padding-bottom:0px
flex-direction: row;  
color: #fff; 
  font-weight: 300;
  @media (max-width: 500px) {
    
    text-align:center;
  }
`

const StyledPhoto = styled.img`
  height : 400px;  
  width : 350px;
  display: block;
  // padding-top:15px;
  // padding-left:5px;
  
  margin-left: auto;
  margin-right: auto;
  // border: ${(props) => `1px solid ${props.theme.border.cool}`};
  @media (max-width: 500px) {
    
    width:100%;
    height: 100%;
    }`

const Input = styled.input.attrs(props => ({
  type: 'number',
  min: 1,
  max: 10,
  step: "0.1"
}))`

  // border-radius: 10px;
  border: 1.5px solid grey;
  display: flex;
  
  &:hover {
      -moz-box-shadow: px 0px 3px #3DFFF3;
    -webkit-box-shadow: 0px 0 3px #3DFFF3;
 }
 ::selection{-moz-box-shadow: px 0px 3px red;
  -webkit-box-shadow: 0px 0 3px red;
}
::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
    color:white;
    font-family: Montserrat;
    font-size: 18px;
 
  margin: 1px 0px 0px 4px ;
  width: 60px;
  padding: 4px 0px ${props => props.size} 10px ;
  

  resize:none;
  background-color:#2B2B29;
  ::placeholder {
    color: #5B5B57;
   }
`

function ElementDisplay(props){

  var [randomdata, setrandom] = useState({
    rating:{
      nviews: "Loading...",
      avgrating: "Loading..."
    },

  name: "Loading",
  img:["https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"],
  language: "Loading...",
  director: "Loading...",
  // releasedOn: "2005-06-16",
  genre: {
    Loading: true
  },
  plot: "Loading...",
    comments: []
  })

  function getGenre(){
    var sa ="";
    for(const key in randomdata.genre){
      // console.log(key);
      if(randomdata.genre[key])
      {
        sa = sa + key+" ‧ "
      }
    }
    return sa;
  }
  function rateNow(e){
    e.preventDefault();
      var avg = randomdata.rating.avgrating;
      var views = randomdata.rating.nviews;      
      var rating = e.target[0].value;
      e.target[0].value = "";
      avg = (((avg*views)+rating*1)/(views+1)).toFixed(1);
      views++;
      setrandom({
        ...randomdata,
        rating: {
          avgrating :  avg,
          nviews: views
        }
      })
      Axios.patch(`https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/manga/${randomdata._id}`,{
        rating: {
          avgrating :  avg,
          nviews: views
        }
      }).then((response) => {
          
      }) 
  }
  const onLikesClick = () => {
    // alert('You clicked comments')
    
    Axios.patch(`https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/manga/${randomdata._id}`, {likes: randomdata.likes+1}).then((response) => {
          
      })  
    setrandom({
      ...randomdata,
      likes: randomdata.likes+1
    })
  }

  useEffect(() => {
    Axios.get(`https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/manga/${props.match.params.id}`).then((response) => {
          setrandom(response.data.data.manga)
          document.title = response.data.data.manga.name + " (Manga) - Cipher-Pol"
    })
  },[])

  return (
    <StyledRoot>
      <StyledContainer1>
        <StyledContainer theme={theme} >
            
              <Flexing>
              {/* <div style = {{display:"flex"}}> */}
              <div className="sa-container-slider">
                <Slider {...settings} >
                  {randomdata.img.map((imgsrc) => {
                    return (
                      <div >
                        <StyledPhoto theme={theme} src={imgsrc}/>
                      </div>
                    )
                  })}
                  
                </Slider>
              </div>
              {/* </div> */}
              <div className = "sa-action-container">
              <Actions>
                <form className = "form-inline" onSubmit = {rateNow}>
                  <Input maxLength="3"  size = "1em" style={{height: "10px",overflow: 'hidden'}} placeholder="10.0" />
                  <Action type = "submit" theme={theme}><FaStar/>Rate Now</Action>
                </form>
                <Action theme={theme} onClick = {onLikesClick}><FaThumbsUp /> {randomdata.likes} Likes</Action>            
              </Actions>
              </div>
              <Title>{randomdata.name+` ‧ `+randomdata.category}</Title>
                  <Date1>{` ${new Date(`${randomdata.releasedOn}`).toDateString()} ‧ ${getGenre()} ${randomdata.language}`}</Date1>
                  <Actions>
                  <ActionStar theme={theme}> 
                  Rating: {randomdata.rating.avgrating+'/10'}<FaStar style={{color:'orange'}}/><span style ={{color: "#ccc", fontWeight: 100}}>{`(based on ${randomdata.rating.nviews} reviews)`}&nbsp;</span>
                      </ActionStar>
                  </Actions>
                    <Date1>{`Author : ${randomdata.author}`}</Date1>
                    <Description>{randomdata.plot}</Description>
              </Flexing>
        </StyledContainer>
      </StyledContainer1>
      <CommentSection id = {props.match.params.id} data = "manga" category = "manga" details = {{rating: randomdata.rating, comments: randomdata.comments}}></CommentSection>
    </StyledRoot>
  )
}
export default ElementDisplay
