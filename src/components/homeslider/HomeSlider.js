import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.css";


export default function HomeSlider(props) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  };
  return (
    <div>
      
        <h2 className = "ha-heading-slider"> {props.name}<i className="fas fa-chevron-right"></i></h2>
        <div className = "ha-container-slider">
          {/* {console.log(props)} */}
        <Slider {...settings} >

          { props.data.map((movie) => {
              return (
                <div className = "ha-item-slider">
                  <a href= {`/${movie.category}/${movie._id}`}>
                  <img src = {movie.img[0]} />
                  <h3>{movie.name}</h3>
                  </a>
                </div>
              )            
          })}          
        </Slider>
        </div>
       
    </div>
  );
}
