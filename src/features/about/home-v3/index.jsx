import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import AboutItem from '../about-item';
import Button from '../../../components/button';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : '',
            title: 'Introduction',
            desc : 'With the aim of promoting technical excellence and complete professional growth of the students, IHRD has come up with an initiative to host a National Level Techno-Cultural-Entrepreneurial Fest - TechX\’22 which will be held on the 9th, 10th, and 11th of December 2022. TechX’22 aims at providing a holistic experience to the students by equipping them with an opportunity to Learn, Express, and Impress. College of Engineering, Chengannur (CEC), an associate institution of IHRD is the host of TechX \'22. Since its inception in 1993, CEC has maintained its eminence as a leading engineering college in Kerala. The institution has contributed to a talented community of engineers and entrepreneurs.'
        }
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-about mobie-40 mb-60" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p className='pd30 center'>{dataBlock.desc}</p>
                        </div>
                    </div>

                        {
                            data.map(item => (
                                <div key={item.id} className="col-xl-4 col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                    <AboutItem item={item} />
                                </div>
                            ))
                        }
                    <div className="col-md-12">
                        <div className="btn-about center" data-aos="fade-up" data-aos-duration="800">
                            <Button title='get Nfts' path='#' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;