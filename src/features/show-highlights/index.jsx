import React from 'react';
import PropTypes from 'prop-types';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ShowHighlightsItem from './show-highlights-item';

ShowHighlights.propTypes = {
    data: PropTypes.array,
};

function ShowHighlights(props) {
    const {data} = props;
    return (
        <section className="tf-section tf-ShowHighlights">
            <div className="container-fluid">
            <div className="tf-title mb-60">
                        
                        <h4 className="title">Performance Highlights</h4>
                    </div>
            <Swiper
                className='swiper-portfolio s1'
                modules={[ Autoplay ]}
                spaceBetween={30}
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
                loop
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed= {2000}
            >
                {
                    data.map(item => (
                        <SwiperSlide key={item.id}>
                            <ShowHighlightsItem item={item} />
                        </SwiperSlide>
                    )).sort(() => Math.random() - Math.random())
                }

            </Swiper>

            <Swiper
                className='swiper-portfolio s1 mt-30'
                modules={[ Autoplay ]}
                spaceBetween={30}
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
                loop
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true,
                }}
                speed= {2000}
            >
                {
                    data.map(item => (
                        <SwiperSlide key={item.id}>
                            <ShowHighlightsItem item={item} />
                        </SwiperSlide>
                    )).sort(() => Math.random() - Math.random())
                }

            </Swiper>
            </div>
        </section>
    );
}

export default ShowHighlights;