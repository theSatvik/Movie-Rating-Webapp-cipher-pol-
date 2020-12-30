import React from "react"



export default function PageNotFound(){

    document.title = "404 - Page Not Found"
    return(
        <div style={{alignItems: "center"}}>
        <div style ={{height: "170px"}}>
            <h1 style={{textAlign: "center"}}>Page 404: Not Found </h1>
          <h2 style={{textAlign: "center"}}>The Web address you entered is not a functioning page on our site.</h2>

          </div>
          </div>
    )
}