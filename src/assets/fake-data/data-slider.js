// import bgImg1 from '../images/background/bg-1.jpg';
// import bgImg1 from '../images/background/bg-hero.png';
import bgImg2 from '../images/background/tech-bg.jpg';
import bgImg3 from '../images/background/bg-4.jpg';
// import img1 from '../images/common/main-char.png';
import img2 from '../images/common/job-char.png';
import Button from '../../components/button/index';
import rapSong from '../videos/rap-song.mp4'
const bgImg1 = "https://d245tsppfkavw4.cloudfront.net/assets/bg-hero.jpg";
const img1 = "https://d245tsppfkavw4.cloudfront.net/assets/main-char.png";
// const img2 = "https://d245tsppfkavw4.cloudfront.net/assets/job-fair.png";

const dataSlider = [
    {
        id: 1,
        title: 'IHRD THARANG\'23 Feb 2nd-6th',
        desc : `A National Techno-Cultural-Entrepreneurial Fest Organized by IHRD (Established by the Govt. of Kerala)`,
        general: [['About', '/about']],
        video: rapSong,
        img : img1,
        classAction: 'two',
    },
    // {
    //     id: 2,
    //     title: 'Job Fiesta! Feb 6TH',
    //     desc : 'With over 150 top companies and 1000+ job opportunities, this job fair is the perfect place to take the first step toward your dream job. ',
    //     general: [['Candidates', '/guidelines'], ['Companies', '/register'], ['Company-list', '/company-list']],
    //     img: img2,
    //     classAction: 'two',
    //     bgImg: bgImg2,
    // },
]

export default dataSlider;