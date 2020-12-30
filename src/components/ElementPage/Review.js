import React from 'react'
import styled from 'styled-components'
import './SubmitStyle.css'
const Input = styled.textarea.attrs(props => ({
    type: 'text',
    cols: "100"
  }))`
  
    border-radius: 10px;
    border: 1.5px solid grey;
    display: block;
    
    &:hover {
        -moz-box-shadow: px 0px 3px #3DFFF3;
      -webkit-box-shadow: 0px 0 3px #3DFFF3;
   }
   ::selection{-moz-box-shadow: px 0px 3px red;
    -webkit-box-shadow: 0px 0 3px red;
 }
      color:white;
      font-family: Montserrat;
      font-size: 18px;
   
    margin: 10px 10px 4px 10px ;
    width: 1000px;
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
function addComment(e){
  e.preventDefault();
  console.log(e);
}

 const Review = ()=>(
    
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
  )

  export default Review;