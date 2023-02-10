import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbar, A11y, Navigation   } from 'swiper';
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
                        <p className="h7 sub-title">Title Sponsor</p>
                        <Swiper
                                modules={[ Navigation, Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    navigation
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                {
                                    data.slice(0,1).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            <br />
                            <br />

                        <p className="h7 sub-title">Silver</p>
                            <Swiper
                                modules={[ Navigation, Scrollbar, A11y ]}
                                    spaceBetween={300}
                                    navigation
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                >
                                {
                                    data.slice(1,5).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                                <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>

                            <br/>
                            <br/>
                            <p className="h7 sub-title">Mini-Silver</p>
                                                        
                            <Swiper
                                modules={[ Navigation, Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    navigation
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                {
                                    data.slice(5,8).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>

                            <br/>
                            <br/>
                            <p className="h7 sub-title">Strategic Education Partner</p>
                            <Swiper
                                modules={[ Navigation, Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    navigation
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                {
                                    data.slice(8,9).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>


                            <br/>
                            <br/>
                            <p className="h7 sub-title">Radio-Partner</p>
                            <Swiper
                                modules={[ Navigation, Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    scrollbar={{ draggable: true }}
                                    navigation
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                {
                                    data.slice(9,10).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            <br/>
                            <br/>
                            <p className="h7 sub-title">Health Partner</p>
                            <Swiper
                                modules={[ Navigation, Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    navigation
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                {
                                    data.slice(10,11).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>


                            <br/>
                            <br/>
                            <p className="h7 sub-title">Refreshment-Partner</p>
                            <Swiper
                                modules={[ Navigation, Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    navigation
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                {
                                    data.slice(11,12).map((item,idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="image">
                                            <a href={item.link} target="_blank"><img src={item.img} alt="Crybox" /></a>
                                            </div>
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                            
                            <Swiper
                                modules={[ Navigation, Scrollbar, A11y ]}
                                    spaceBetween={60}
                                    navigation
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 4,
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
