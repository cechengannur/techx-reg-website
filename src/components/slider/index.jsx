import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from './slider-item';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Slider.propTypes = {
    data : PropTypes.array,
};

function Slider(props) {
    const {data} = props;
    return (
        <section className="slider">
            <Swiper
                modules={[Navigation,  Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                {
                    data.slice(0,5).map(item => (
                        <SwiperSlide key={item.id}>
                            <SliderItem item={item} />
                        </SwiperSlide>
                        
                    ))
                }
            </Swiper>

        </section>
    );
}

export default Slider;