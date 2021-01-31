import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import style from './CaruselBox.module.css';



class CaruselBox extends Component {
   render() {
      return (
         <>
           <Carousel>
               <Carousel.Item className={style.img1}>
                  <img
                  src={img1}
                  alt="img1"
                  className="d-block w-100"
                  />
                  <Carousel.Caption>
                     <h3>Arajin nkar</h3>
                     <p>Lorem ipsum dolor sit.</p>
                  </Carousel.Caption>
               </Carousel.Item>  

               <Carousel.Item className={style.img1}>
                  <img
                  src={img2}
                  alt="img2"
                  className="d-block w-100"
                  />
                  <Carousel.Caption>
                     <h3>Erkrord nkar</h3>
                     <p>Lorem ipsum dolor sit.</p>
                  </Carousel.Caption>
               </Carousel.Item>  

               <Carousel.Item className={style.img1}>
                  <img
                  src={img1}
                  alt="img1"
                  className="d-block w-100"
                  />
                  <Carousel.Caption>
                     <h3>Errord nkar</h3>
                     <p>Lorem ipsum dolor sit.</p>
                  </Carousel.Caption>
               </Carousel.Item>  
            </Carousel>  
         </>
      );
   }
}

export default CaruselBox;