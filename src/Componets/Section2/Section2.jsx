// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Section2.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.png'
import slide5 from '../../assets/slide5.png'
import slide6 from '../../assets/slide6.png'

const Section2 = () => {
    return (
        <div className='Section2'>
            <div className='container'>
                <div className='section2-text'>
                    <h1>Our Services</h1>
                    <p>We specialize in providing efficient services according to the requirements of the clients.</p>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 3,
                            slideShadows: false,
                            transparent:true,

                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'
                    >
                        <SwiperSlide>
                            <img src={slide1} alt='slide_image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide2} alt='slide_image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide3} alt='slide_image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide4} alt='slide_image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide5} alt='slide_image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide6} alt='slide_image' />
                        </SwiperSlide>

                        <div className='slider-controler'>
                            <div className='swiper-button-prev slider-arrow'>
                                <ion-icon name='arrow-back-outline'></ion-icon>
                            </div>
                            <div className='swiper-button-next slider-arrow'>
                                <ion-icon name='arrow-forward-outline'></ion-icon>
                            </div>
                            <div className='swiper-pagination'>

                            </div>
                        </div>
                    </Swiper>

                </div>


            </div>

        </div>
    )
}

export default Section2
