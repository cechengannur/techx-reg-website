//using react router to redirect to external link
import {React , useEffect} from 'react';
import PageTitle from '../components/pagetitle';
import dataDown from '../assets/fake-data/data-downloads';
import AccordionItem from '../features/downloads/accordion-item';

const DownloadsPage = (props) => {
  return (
    <div>
        <PageTitle title='Downloads' />

        <section className="tf-section faq bg-st2">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">
                        {
                            dataDown.slice(0,3).map(item => (
                                <AccordionItem key={item.id} item={item} />
                                
                            ))
                        }

                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">
                        {
                            dataDown.slice(3,6).map(item => (
                                <AccordionItem key={item.id} item={item} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
);
  }

export default DownloadsPage;