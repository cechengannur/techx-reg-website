import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Button from '../../components/button';
import AboutItem from './about-item';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'About Us',
            title: 'What is IHRD Tharang?',
            desc : 'IHRD has come up with an initiative to host a Techno-Cultural-Entrepreneurial fest which aims at providing a holistic experience to the students by equipping them with an opportunity to Learn, Express and Impress. The pioneer IHRD Tech Fest Tharang, will be hosted by College of Engineering, Chengannur, a premier institute governed by IHRD.'
        }
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="content-about mobie-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title st2">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p>{dataBlock.desc}</p>
                                <Button title="Learn More" path='' onClick={()=>{
                                    window.open('https://ceconline.edu/', '_blank');
                                }}/>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                            {
                                data.map(item => (
                                    <AboutItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;