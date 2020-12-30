import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import Axios from "axios";

let theme={ 
  border: {cool:"black"},
  primary:{
    main:"#303036"
  },
  secondary:{
    main:"#303036"
  }
}
const StyledRoot = styled.div`
padding: 50px 12px;
`
const StyledContainer1 = styled.div`
  max-width: 85%;
  width: 100%;
  margin: auto;
  box-shadow:10px 10px 10px 10px;
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
const Title = styled.h2`
padding-bottom:0px
flex-direction: row;  
color: #fff; 
  font-weight: 300;
  @media (max-width: 500px) {
    
    text-align:center;
  }
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
  padding-right: 150px;
  font-weight: 300;
  @media (max-width: 1000px) {
    font-size: 0.93rem;
    padding-right: 30px;
  }
`
const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg { 
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`
const Action = styled.button`
  margin: 0 5px;
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
const StyledPhoto = styled.img`
  height : 245px;  
  width : 150px;
  flex-direction: row;
  padding-top:15px;
  padding-left:5px;
  object-fit: cover,
  border: ${(props) => `1px solid ${props.theme.border.cool}`};
  @media (max-width: 500px) {
    flex-direction: column;
    width:100%;
    height: 100%;
    }`

const Flexing = styled.div`
padding-left: 10px;
a:link{
  text-decoration: none;
}
@media (max-width: 500px) {
  flex-direction: column;
}
`

function Card() 
{

  const categories = ['movies','anime','tv','manga']
  var x ;
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
  const onLikesClick = () => {
    // alert('You clicked comments')
    var cat = randomdata.category.toLowerCase();
    if(cat === "movie")
      cat = cat+"s";
    if(cat==="tv-show")
      cat = "tv";
    Axios.patch(`https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/${cat}/${randomdata._id}`, {likes: randomdata.likes+1}).then((response) => {
          
      })  
    setrandom({
      ...randomdata,
      likes: randomdata.likes+1
    })
  }

  
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
  
  useEffect(() => {
      x = categories[Math.floor(Math.random() * categories.length)]
    Axios.get(`https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/${x}/random`).then((response) => {
            setrandom(response.data.data.random)
    })  
  }, [])
  return (
    <StyledRoot>
        <h1 style = {{paddingLeft: 30, color: "rgb(228, 235, 235)"}}>Today's Pick<i style = {{color: "rgb(201, 209, 209)", fontSize: "0.8em", paddingLeft: "4px"}} className="fas fa-chevron-right"></i></h1>
      <StyledContainer1>
        <StyledContainer theme={theme} >
                <StyledPhoto theme={theme} src={randomdata.img[0]}/>
              <Flexing>
               <a href = {`/${randomdata.category}/${randomdata._id}`}>
                  <Title>{randomdata.name+` ‧ `+randomdata.category}</Title>
                </a>
                  
                  <Actions>
                      <ActionStar theme={theme}> 
                      <FaStar style={{color:'orange'}}/>{randomdata.rating.avgrating+'/10'}
                      </ActionStar>
                  </Actions>
                  
                  <Date1>{`${new Date(`${randomdata.releasedOn}`).toDateString()} ‧ ${getGenre()}  ${randomdata.language}`}</Date1>
            
                  <Description>{randomdata.plot}</Description>
                  
                  <Actions>
                    {/* <Action theme ={theme} onClick = {onCommentClick} id = {randomdata._id} value = {randomdata.category}> <FaCommentAlt /> {randomdata.comments.length} Comments</Action> */}
                    <Action theme ={theme} onClick = {onLikesClick} id = {randomdata._id} value = {randomdata.category}><FaThumbsUp /> {randomdata.likes} Likes</Action>
                  </Actions>
              </Flexing>
        </StyledContainer>
      </StyledContainer1>
      </StyledRoot>
  )
}
export default Card
