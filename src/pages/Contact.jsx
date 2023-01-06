import React from 'react';
import PageTitle from '../components/pagetitle';


function Contact(props) {
    return (
        <div>
            <PageTitle title='Contact Us' />

            <section className="tf-section tf-contact">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xl-5 col-md-12">
                            <div className="content-about m-b50 mobie-40" data-aos="fade-right" data-aos-duration="800">
                                <div className="tf-title st2 m-b17">
                                    <h4 className="title">Have a question </h4>
                                </div>
                                <p className="m-r-40">Fill up the Form  and ou team will get back to within 24 hrs</p>
                            </div>
                            <form action="contact/contact-process.php" className="form-contact" id="contactform" data-aos="fade-right" data-aos-duration="800">
                                <fieldset>
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                </fieldset>
                                <fieldset>
                                    <input type="email" name="mail" id="mail" placeholder="Email Address" />
                                </fieldset>
                                <fieldset>
                                    <input type="number" name="phone" id="phone" placeholder="Phone" />
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="Type your Messege" rows="5" tabIndex="4" name="message" className="message" id="message"></textarea>
                                </fieldset>
                                <button className="tf-button btn-effect" type="submit"><span className="boder-fade"></span><span className="effect">Send Message</span></button>
                            </form>
                        </div> */}
                        <div className="col-xl-8  col-md-12">
                            <div className="contact-details" data-aos="fade-left" data-aos-duration="800">
                                <div className="adress wrap-fx">
                                    <div className="location">
                                        <h6>Location</h6>
                                        <ul>
                                            <li>College of Engineering Chengannur Chengannur P.O. Alapuzha District Kerala PIN 689121</li>
                                        </ul>
                                    </div>
                                    <div className="mail">
                                        <h6>Contact Us</h6>
                                        <ul>
                                            <li>+91 9207-601-202</li>
                                            <li>ihrdtechfest@ceconline.edu</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flat-map wow fadeIn animated" data-wow-delay="0.3ms" data-wow-duration="1000ms">
                                    {/* <iframe title='map' className="map-content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4457.30210514409!2d144.9550716623184!3d-37.818421643591336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1631871760998!5m2!1svi!2s" width="1720" height="655" allowFullScreen="" loading="lazy" /> */}

                                    <iframe title='map' className="map-content" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6621.4934199358!2d76.613571176559!3d9.318773245298907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41105b207db821c6!2sCollege%20of%20Engineering%20Chengannur!5e0!3m2!1sen!2sin!4v1671357096734!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;