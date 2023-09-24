import React from "react";
import styled from "styled-components";
import Carousel from './components/Carousel';
import { banner } from './components/CarouselData';

const Home = () => {
  return <Carousel images={banner} />
};



export default Home;
