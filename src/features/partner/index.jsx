import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'

Partner.propTypes = {
    data: PropTypes.array,
};

function Partner(props) {

    const {data} = props;

    return (
        <section className="tf-section partner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <h4 className="title">Sponsors</h4>
                        </div>
                    </div>
                    <div className="col-md-18">
                        <div className=" item-parner" data-aos="fade-up" data-aos-duration="800">

                        <p className="h7 sub-title">Silver</p>
                            <Swiper
                                modules={[  Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                {
                                    data.slice(0,3).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                                <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>

                            <p className="h7 sub-title">Mini-Silver</p>
                                                        
                            <Swiper
                                modules={[  Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                {
                                    data.slice(3,4).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            <br/>
                            <p className="h7 sub-title">Radio-Partner</p>
                            <Swiper
                                modules={[  Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                {
                                    data.slice(5,6).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            <br/>
                            <p className="h7 sub-title">Rrefreshment-Partner</p>
                            <Swiper
                                modules={[  Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                {
                                    data.slice(4,5).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            <Swiper
                                modules={[  Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 4,
                                        },
                                        991: {
                                            slidesPerView: 6,
                                        },
                                    }}
                                >
                                {
                                    data.slice(0,0).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;