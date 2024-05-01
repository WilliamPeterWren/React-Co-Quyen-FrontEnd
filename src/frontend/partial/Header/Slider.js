// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Slider() {
  return (
    <Carousel id="carousel1_indicator" className="slider-home-banner">
    <Carousel.Item>
      <img className="d-block w-100" src={require('../../assets/images/banners/banner-phukien.png')} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={require('../../assets/images/banners/banner_2.webp')} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={require('../../assets/images/banners/banner-collection.webp')} alt="Third slide" />
    </Carousel.Item>
  </Carousel>
  );
}