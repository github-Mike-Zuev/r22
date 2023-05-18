import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './module.slider.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
 
const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div>



    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='slide'>
      <Link exact to="/form1">
        <Button className='btnForm1' variant="outline-warning">Заказать звонок</Button>{' '}
      </Link>
    {/* <button type="button" class="btn btn-success btnForm2">Success</button> */}
        <img
          className="d-block w-100"
          src="./img/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src="./img/second.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   )
}

export default Slider;
