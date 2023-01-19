import React from 'react';
import TshirtImg from "../assets/images/extra/tharang-t-shirt.png";
import '../scss/components/section.scss';
import '../scss/components/box.scss';
import Slider from '../components/slider';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about';
import Project from '../features/project';
import dataProject from '../assets/fake-data/dataProject';
import dataAbout from '../assets/fake-data/data-about';
// import RoadMap from '../features/roadmap';
// import dataRoadmap from '../assets/fake-data/data-roadmap';
import Work from '../features/work';
import dataWork from '../assets/fake-data/data-work';
import Team from '../features/team';
import dataTeam from '../assets/fake-data/data-team';
import Blog from '../features/blog';
import dataBlog from '../assets/fake-data/data-blog';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import FAQ from '../features/faq';
import dataFaq from '../assets/fake-data/data-faq';
import { NikeCard } from '../components/nikeCard';

function HomeOne(props) {

    return (
        <div className='home-1'>
        
        <Slider data={dataSlider} />

        <Partner data={dataPartner} />
        
        <About data={dataAbout} />

        {/* <NikeCard data={TshirtImg} link="https://forms.gle/JiidnBNX7cmuJXjy7"/> */}

        <Project data={dataProject} />

        {/* <RoadMap data={dataRoadmap} /> */}

        {/* <Work data={dataWork} />

        <Team data={dataTeam} /> */}

        <Blog data={dataBlog} />

        

        <FAQ data={dataFaq} />
        
        </div>
    );
}

export default HomeOne;