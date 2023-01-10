//using react router to redirect to external link
import {React , useEffect, useState} from 'react';
import PageTitle from '../components/pagetitle';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import jobFair from '../assets/images/common/jobf.png'


const Guidelines = (props) => {

    const [checked, setChecked] = useState(false);
    const handleCheck =() => {
        setChecked(!checked)
        console.log(checked)
    }

    return (
        <div>
          <PageTitle title='Guidelines' />

          <section className="tf-section tf-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="content-about mb-50 mobie-40" data-aos="fade-right" data-aos-duration="800">

                            <div className="img ">
                                            <img src={jobFair} width="auto" height="auto" alt="Job Fair in 6th" />
                                        </div>

                                <div className="tf-title st2">
                                    <br/>
                                    <h4 className="title">Read Carefully.</h4>
                                </div>
                                <p className="mr-40">1. The Job fiesta will be conducted on 6th February 2023 @ College of Engineering Chengannur.</p>
                                <p className="mr-40">2. Only registered participants will be permitted to attend the job fair</p>
                                <p className="mr-40">3. Candidates are asked to correctly fill out the form on the website; any inaccuracies in the information entered cannot be corrected later</p>
                                <p className="mr-40">4. Research the companies that will be attending the job fair ahead of time. This will help you tailor your resume and cover letter to each company and prepare for any potential interviews</p>
                                <p className="mr-40">5. Students are requested to dress professionally.</p>
                                <p className="mr-40">6. Be prepared to talk about your skills and experience. Employers may ask you to describe your relevant coursework or previous jobs.</p>
                                <p className="mr-40">7. Candidates can only sit for companies for which they meet the company's eligibility criteria</p>
                                <p className="mr-40">8. During verification, candidates should ensure that they have all of the essential documents (10,12, graduation marksheets/certificates, etc.)..</p>
                                <p className="mr-40">9. The job fair requires a mandatory registration fee of Rs 100.</p>
                                <p className="mr-40">10. Candidates should carry 8-10 resumes, and sufficient passport size photographs.</p>
                                <p className="mr-40">11. Candidates should be prepared to answer questions about their skills and experience.</p>
                                <p className="mr-40">12. Spot registration will be permitted only for non-technical roles; registration for technical roles must be completed prior to the deadline.</p>
                                <p className="mr-40">13. Students should bring a valid identification card of the respective college to the job fair</p>
                                <p className="mr-40">14. The organizers will not be held liable if the candidate fails to arrive on time or fails to bring any of the above-mentioned documents.</p>
                                <p className="mr-40">15. Any malpractices or inappropriate behavior may result in a candidate's complete
disqualification from the job fair.</p>
                            </div>
                            

                            <div className="mb-40 m-l-20"><Form.Check 
        
        id="custom-switch"
        label="I hereby commit to adhering strictly to all guidelines provided. I understand that any violation of these guidelines may result in immediate termination of my participation and a ban from the Job Fair, without refund or explanation"
        onChange={handleCheck}
      /></div>
                            
                            
                                <Link to="/"><button className="tf-button btn-effect popup-youtube mt-20" disabled={!checked} onClick={()=>{
                                    window.open('http://min.lc/oirgn', '_blank');
                                }} >
                                            
                                                <span className="boder-fade"></span>                                     
                                                <span className="effect">Accept</span>
                                            </button>
                                </Link>

                                <h6 className="mt-30">Contact Us : Job Fair</h6>
                                <ol mt-20 pl-0>
                                    <li>Jobin Abraham Chacko: +91 9745617721</li>
                                    <li>Chandan Kurup: +91 8714527562</li>
                                    <li>Arpan Susheel Cherian: +91 8590767752</li>
                                </ol>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
  }

export default Guidelines;