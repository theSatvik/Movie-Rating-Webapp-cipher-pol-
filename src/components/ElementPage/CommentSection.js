import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import Axios from 'axios';
import './SubmitStyle.css'

let theme={
    border: {cool:"skyblue"},
    primary:{
      main:"#2B2B29"
    },
    secondary:{
      main:"#2B2B29"
    }
  }

const StyledContainer1 = styled.div`
  max-width: 85%;
  width: 100%;
  margin: auto;
`
const StyledContainer = styled.div`
border: ${(props) => `1px solid ${props.theme.border.cool}`};
display: flex;
flex-direction: column;
margin-top: 10px;
margin-bottom: 10px;
  padding: 17px 12px 18px;
 
  background: ${(props) => `linear-gradient(
    75deg, ${props.theme.primary.main}, ${props.theme.secondary.main}
  )`};
  @media (max-width: 500px) {
    flex-direction: column;
  }
  ;
  
`
const ActionStar = styled.div`
  
  padding: 0px 0px 7px ;
//   background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  
`
const Date1 = styled.div`
  color: #ccc;  
  font-weight: 100;
  font-size: 0.9em;
  padding: 0px;
  margin-bottom: 0px;
  @media (max-width: 500px) {
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
const Flexing = styled.div`
padding-left: 10px;
@media (max-width: 500px) {
  flex-direction: column;
}
`
const Title = styled.div`
padding-bottom:0px
flex-direction: row; 
font-size: 1.2em; 
color: skyblue; 
  font-weight: 50;
  @media (max-width: 500px) {
    
    text-align:center;
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
const Input = styled.textarea.attrs(props => ({
    type: 'text',
  }))`
  
    border-radius: 10px;
    border: 1.5px solid grey;
    display: flex;
    
    &:hover {
        -moz-box-shadow: px 0px 3px #3DFFF3;
      -webkit-box-shadow: 0px 0 3px #3DFFF3;
   }
   ::selection{
        -moz-box-shadow: px 0px 3px red;
    -webkit-box-shadow: 0px 0 3px red;
 }
 
      color:white;
      font-family: Montserrat;
      font-size: 18px;
   
    margin: 10px 10px 4px 10px ;
    width: 100%;
    padding: 10px 0px ${props => props.size} 10px ;

    resize:none;
    background-color:#2B2B29;
    ::placeholder {
      color: #5B5B57;
     }
  `

  const Inputnum = styled.input.attrs(props => ({    
    type: 'number',
    min: 1,
  max: 10,
  step: "0.1"
  }))`
  
    border-radius: 10px;
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
   
    margin: 10px 10px 4px 10px ;
    width: 500px;
    padding: 10px 0px ${props => props.size} 10px ;

    resize:none;
    background-color:#2B2B29;
    ::placeholder {
      color: #5B5B57;
     }
  `
  const Inputtext = styled.input.attrs(props => ({    
    
  }))`
  
    border-radius: 10px;
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
   
    margin: 10px 10px 4px 10px ;
    width: 500px;
    padding: 10px 0px ${props => props.size} 10px ;

    resize:none;
    background-color:#2B2B29;
    ::placeholder {
      color: #5B5B57;
     }
  `

export default function CommentSection(props){

    var [comments, setComments] = useState({
        rating:{
            nviews: 0,
            avgrating: 0
          },
          comments: []
    });
    function addComment(e){
        e.preventDefault();
        var avg = comments.rating.avgrating;
        var views = comments.rating.nviews; 
        var rating = e.target[0].value * 1;
        avg = (((avg * views) + rating)/(views + 1)).toFixed(1)
        views++;
        var dateiso = new Date()
        setComments({
            ...comments,
            rating:{
                nviews: views,
                avgrating: avg
            },
            comments: [
                ...comments.comments,
                {
                    author: e.target[1].value,
                    reviews: e.target[2].value,
                    rating: rating,
                    date: dateiso
                }
            ]
        })
        Axios.patch(`https://cors-anywhere.herokuapp.com/https://rorolist2.herokuapp.com/api/v1/${props.category}/comment/${props.id}`,{
            author: e.target[1].value,
            reviews: e.target[2].value,
            rating: rating,
            date: dateiso
            
      }).then((response) => {
          
      })
      if(!Number.isNaN(avg))
      {
        Axios.patch(`https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/${props.category}/${props.id}`,{
        rating: {
          avgrating :  avg,
          nviews: views
        }
      }).then((response) => {
          
      })
    }

    }

    useEffect(() =>{
        Axios.get(`https://cors-anywhere.herokuapp.com/https://rorolist1.herokuapp.com/api/v1/${props.category}/${props.id}`).then((response) => {
            
          setComments(response.data.data[props.data])
    })
    console.log(props.details)
    },[])
    

    return(
        <StyledContainer1>
            <StyledContainer theme ={theme}>
                <Flexing>
                    <div style={{display: 'inline-block',flexDirection:'column',alignItems: 'center', marginBottom: "30px"}}>  
                        <form className = "comment-form" onSubmit = {addComment}>
                            <Inputnum size = "1em" style={{height:"20px",}} placeholder="Give Your Rating" required/>
                            <Inputtext size="1em" maxLength="80" style={{height:"20px",}} placeholder="Your Name" required/>
                        
                            <Input size="10em" placeholder="Write Your Thoughts Here ...!!!" required/>
                        
                            <div className = "sa-link">           
                                <button type = "submit" >Submit</button>             
                            </div>
                        </form>
                
                    </div>
                    {comments.comments.length > 0 && (
                        comments.comments.map((val, index, array) => {
                            return(
                                <>
                                    <hr style = {{borderTop: "1px"}}></hr>
                                    <Title>{comments.comments[comments.comments.length - 1 - index].author}</Title>
                                    <Date1>{new Date(comments.comments[comments.comments.length - 1 - index].date).toDateString()}</Date1>
                                    <Actions>
                                        <ActionStar>
                                        {comments.comments[comments.comments.length - 1 - index].rating}<FaStar style={{color:'orange'}}/>
                                        </ActionStar>
                                    </Actions>
                                    
                            <Description>{comments.comments[comments.comments.length - 1 - index].reviews}</Description>
                                </>
                            )
                        })
                    )}
                    {comments.comments.length===0 && (
                        <>
                            <hr></hr>
                            <Title style={{textAlign: "center"}}>No Comments here</Title>
                        </>
                    )}                  
                         
                </Flexing>
            </StyledContainer>
        </StyledContainer1>
    )

}