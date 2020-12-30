import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'


let theme={ 
  border: {cool:"black"},
  primary:{
    main:"#343a40"
  },
  secondary:{
    main:"gray"
  }
}
const StyledRoot = styled.div`
padding-top: 5px;
padding-bottom: 5px;
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
  color: whitesmoke;  
  font-weight: 100;
  margin: 6px 0px;
  @media (max-width: 500px) {
    font-size: 1rem;
    text-align:center;
  }
`
const Description = styled.p`
  color: #fff;
  padding-right: 100px;
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
  width : 200px;
  flex-direction: row;
  padding-top:15px;
  padding-left:0px;
  padding-right:5px;
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

function Card(props) 
{

  var [filterData, setfilter] = useState([{
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
  }])

  useEffect(() => {
    var newList = props.showData.filter((el) => {
      return el.name.toLowerCase().indexOf(props.text.toLowerCase()) > -1
  })
  setfilter(newList);
  }, [])
  
  function getGenre(randomdata){
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
  
  document.title = `Search ${props.category} - ${props.text}`;
  return (
      <div>
        <h1 style={{textAlign: "center"}}>Search result for "{props.text}"</h1>
        {filterData.length > 0 && (
          filterData.map((randomdata) => {
              return (
                  <StyledRoot>
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
                                  
                                  <Date1>{`${new Date(`${randomdata.releasedOn}`).toDateString()} ‧ ${getGenre(randomdata)}  ${randomdata.language}`}</Date1>
                              
                                  <Description>{randomdata.plot}</Description>
                              </Flexing>
                              <StyledPhoto theme={theme} src={randomdata.img[1]}/>
                          </StyledContainer>
                      </StyledContainer1>
                  </StyledRoot>
              )
          })
        )}
        {filterData.length === 0 && (
          <div style ={{height: "150px"}}>
          <h3 style={{textAlign: "center"}}>The Item Could Not be found</h3>
          </div>
        )}
      </div>
  )
}
export default Card
