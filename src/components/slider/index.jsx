import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from './slider-item';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import video from '../../assets/videos/rap-song.mp4'
Slider.propTypes = {
    data : PropTypes.array,
};

function Slider(props) {
    const {data} = props;
    return (
        <section className="slider">
            <video style={{position:"absolute",
                            width:"100%",
                            top:"50%",
                            height:"100%",
                            objectFit:"cover",
                            opacity:"75%",
                            transform:"translate(0,-50%)",
                            
                            }} playsInline muted autoPlay loop><source src={video} type="video/mp4"/></video>
            <Swiper
                modules={[Navigation,  Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    
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