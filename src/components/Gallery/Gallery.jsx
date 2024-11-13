import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Gallery.css';

const Gallery = ({ images }) => {
    return (
        <div className="swiper-container"> {/* Adicione o contêiner responsivo aqui */}
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{ backgroundImage: `url('${image}')` }}
                            className="caroussel-images"
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Gallery;
