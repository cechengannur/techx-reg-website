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
        [
         {
            id:0,
            title:'IHRD THARANG\'23',
            desc:'   IHRD Tharang’23, the first National Level Techno-Cultural-Entrepreneurial event organized by the Institute of Human Resources Development (IHRD). Adhering to the theme YOUTH, SCIENCE and LEADERSHIP, IHRD Tharang’23 aims at providing a holistic experience to the students and empower them in building ideas to design models and finished products in technology, cultural and entrepreneurship domains. The tech fest will be held in College of Engineering, Chengannur on February 3rd , 4th , 5th 2023 and job fair on 6th of February. Over the span of 6 days, i.e. from 2nd February, 2023 with inauguration, three days of tech fest from 3rd February to 5th February and job fair on 6th February there will be an overall participation of about 60,000 people for IHRD Tharang’23. IHRD Tharang’23 will have compulsory participation from all 87 institutions of IHRD across the 14 districts of Kerala, which comprises of 9 engineering colleges, 8 polytechnic colleges, 45 applied science colleges, 15 technical higher secondary schools, 2 model finishing schools and 8 Regional/Extension/Study Centres. Participants of IHRD Thrang’23 will have the opportunity to choose from about 25+ workshops, 30+ competitions designed for various students’ levels and aptitude along with about 85 stalls to visit for. The stalls are separated out to different purpose stalls such as for school and college project expos, 10+ government institution stalls such as that of K-DISC, Kerala Excise Department, Fire force, VSSC, Naval NCC etc. Artistic gallery stalls, AR/VR zones would also be a part of event attraction for IHRD Tharang’23. Along with the participation from the institutions, with our cultural programs being open to all, we also expect a participation of around 3000 people from public who would attend the cultural programs arranged on 2nd , 3rd , 4th and 5th of February by celebrities like Jassie Gift, Navya Nair, Sithara Krishnakumar, Pradeep Somasundaran and Rasmi Satheesh. Cumulating a variety of events to cater the taste of a wide community, IHRD Tharang’23 is a one-stop destination for knowledge, fun and entertainment.',
            link: 'http://tharang.ihrd.ac.in/'
        },
//        {
//            id:1,
//            
//            title: 'Institute of Human Resources Development (IHRD)',
//            desc : '',
//            link: 'http://ihrd.ac.in/'
//        },
//        {
//           id:2,
//            
//            title: 'College of Engineering, Chengannur (CEC)',
//            desc : '',
//            desc2: '',
//            link: 'https://ceconline.edu/'
//        },
//         {
//             id:3,
//             title:'IHRD THARANG\'23',
//             desc:'A National Techno-Cultural-Entrepreneurial Fest Organized by IHRD (Established by the Govt. of Kerala) will be held on the 2nd - 6th of February 2023. Which aims at providing a holistic experience to the students by equipping them with an opportunity to Learn, Express, and Impress. The pioneer IHRD Tech Fest Tharang will be hosted by the College of Engineering, Chengannur, a premier institute governed by IHRD. The event will host various guests from the Ministry of Higher Education, National Research Laboratories, Industries, Investors, Entrepreneurs, District & Local Administration, Agriculture, and many other reputed organizations.',
//             link: 'http://tharang.ihrd.ac.in/'
//         }
    ]
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                    <div className="tf-title st2">
                    <p className="h8 sub-title">About Us</p>
                    </div>
                        {dataBlock.map(
                            item =>(
                                <div className="content-about mobie-40" data-aos="fade-up" data-aos-duration="800">
                                  
                                            
                                            <h4 className="title">{item.title}</h4>
                                
                                    <p>{item.desc}</p>
                                    <p>{item.desc2}</p>
                                    <Button title="Learn More" path='' onClick={()=>{window.open(`${item.link}`, '_blank');}}/>
                                </div>
                            )
                        )}
                    </div>
                    {/* <div className="col-xl-7 col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                            {
                                data.map(item => (
                                    <AboutItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default About;
