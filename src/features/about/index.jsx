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
        [{
            id:0,
            
            title: 'Institute of Human Resources Development (IHRD)',
            desc : 'The Institute of Human Resources Development (IHRD) is an autonomous educational institution established by the Government of Kerala in 1987. The institute is registered under The Travancore – Cochin Literary, Scientific and Charitable societies registrations Act 12 of 1955. IHRD is dedicated to the country\'s scientific advancement, technological progress, and economic growth through human resources development. Based on the principle, "Think Globally and Act Locally" it endeavors to bring about the welfare of the nation. The motto of IHRD is to foster technical education for every single one.The first name of IHRD was the Institute of Human Resources Development for Electronics (IHRDE). Later it was renamed and now bears the name IHRD. IHRD founded and manages many technical schools, engineering colleges, polytechnics, and applied science colleges.',
            link: 'http://ihrd.ac.in/'
        },
        {
            id:1,
            
            title: 'College of Engineering, Chengannur (CEC)',
            desc : 'The College of Engineering Chengannur commonly known as CEC, is an engineering institute in the state of Kerala, India that the Government of Kerala established under the aegis of the Institute of Human Resources Development in 1993. The college is located in Chengannur, Alappuzha. It has been approved by the All India Council for Technical Education (AICTE) and is affiliated with APJ Abdul Kalam Technological University (KTU).',
            desc2: 'An idyllic place to work and study in Kerala. Supercalifragilisticexpialidocious environment, brilliant teachers, and a great atmosphere. You\'ll eventually love everything about this college, even the security people or the tree welcoming you to the college. Alappuzha district the college has access to all means of transport, communication, and lodging facilities. It has a well-equipped infrastructure in classroom and lab facilities. The Training and Placement Cell, (TPC) is a body of active students, guided by Staff-in-Charge. Student members are specially selected to carry out the responsible working of the cell. The TPC dedicates itself to helping students develop their personalities and establish their careers. During this academic year, MCA has also started.',
            link: 'https://ceconline.edu/'
        },
        {
            id:2,
            title:'IHRD THARANG\'23',
            desc:'A National Techno-Cultural-Entrepreneurial Fest Organized by IHRD (Established by the Govt. of Kerala) will be held on the 3rd, 4th, 5th, and 6th of February 2023. Which aims at providing a holistic experience to the students by equipping them with an opportunity to Learn, Express, and Impress. The pioneer IHRD Tech Fest Tharang will be hosted by the College of Engineering, Chengannur, a premier institute governed by IHRD. The event will host various guests from the Ministry of Higher Education, National Research Laboratories, Industries, Investors, Entrepreneurs, District & Local Administration, Agriculture, and many other reputed organizations.'
        }
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