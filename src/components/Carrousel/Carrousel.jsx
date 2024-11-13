import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carrousel.scss'

const Carrousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='carouselImg'>
                     <img src=""/>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='carouselImg'></div>
            </Carousel.Item>

            <Carousel.Item>
             <div className='carouselImg'></div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;