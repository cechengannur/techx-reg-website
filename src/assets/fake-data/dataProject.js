import { region } from 'caniuse-lite';
import { Link } from 'react-router-dom';
import img9 from '../images/common/comp-radiant.jpeg'
// import img10 from '../images/common/work-vr.png'
import img11 from '../images/common/work-ai.png'
import img12 from '../images/common/work-plc.png'
import img13 from '../images/common/work-git.png'
import img14 from '../images/common/work-pcb.png'
import img15 from '../images/common/work-deep.jpeg'
import img16 from '../images/common/work-flutter.png'
import img17 from '../images/common/work-cloud.jpeg'
import img18 from '../images/common/work-ds.png'
import img19 from '../images/common/work-ar.png'
import img20 from '../images/common/work-harley.png'
import img21 from '../images/common/work-factory.png'
import img22 from '../images/common/work-quantum.jpeg'
import img23 from '../images/common/work-origami.jpeg'
import img24 from '../images/common/work-python.jpeg'
import img25 from '../images/common/work-ros.jpeg'
import img26 from '../images/common/work-autocad.jpeg'
import img27 from '../images/common/work-bmw.jpeg'
import img28 from '../images/common/work-data.jpeg'
import img29 from '../images/common/work-robot.jpeg'
import img30 from '../images/common/work-matlab.jpeg'
import img31 from '../images/common/work-structure.jpeg'
import img32 from '../images/common/work-web.jpeg'
import img33 from '../images/common/work-hacking.jpeg'
import img34 from '../images/common/comp-key.jpeg'
import img35 from '../images/common/comp-center.jpeg'
import img36 from '../images/common/tech-comp/comp-queen-gambit.jpeg'
import img37 from '../images/common/extra-call-school.webp'
import img38 from '../images/common/extra-call-college.webp'
import img39 from '../images/common/extra-gallery.webp'
import img40 from '../images/common/AR_VRzone.jpeg'
import img41 from '../images/common/CallforSME.jpeg'
import img42 from '../images/common/CallforStartup.jpeg'
import img43 from '../images/common/FoodStall.jpeg'
import img44 from '../images/common/videography.jpeg'
import img45 from '../images/common/comp-vines.jpg'
import img46 from '../images/common/work-smart.jpeg'

import img47 from '../images/common/FlashStep.jpeg'
import img48 from '../images/common/StepIntoRhythm.jpeg'
import img49 from '../images/common/VocalRange.jpeg'
import img50 from '../images/common/JustAMinute.jpeg'
import img51 from '../images/common/Beatboxing.jpeg'
import img52 from '../images/common/Collage.jpeg'
import img53 from '../images/common/RadiantStroke.jpeg'
import img54 from '../images/common/QuizADry.jpeg'
import img55 from '../images/common/Fabricate.jpeg'
import img56 from '../images/common/RubiksCube.jpeg'
import img57 from '../images/common/Sudoku.jpeg'
import img58 from '../images/common/SpotLight.jpeg'
import img59 from '../images/common/Metronome.jpeg'
import img60 from '../images/common/FreezeFrame.jpeg'


import img61 from '../images/common/tech-comp/comp-gravitex.jpeg'
import img62 from '../images/common/tech-comp/comp-line-chaser.jpeg'
import img63 from '../images/common/tech-comp/comp-idea-mania.jpeg'
import img64 from '../images/common/tech-comp/comp-circuitathon.jpeg'
import img65 from '../images/common/tech-comp/comp-amazing-race.jpeg'
import img66 from '../images/common/tech-comp/comp-tech-quiz.jpeg'
import img67 from '../images/common/tech-comp/comp-area-51.jpeg'
import img68 from '../images/common/tech-comp/comp-fantasm-idea.jpeg'
import img69 from '../images/common/tech-comp/comp-formula-gsm.jpeg'
import img70 from '../images/common/tech-comp/comp-contraption.jpeg'
import img71 from '../images/common/tech-comp/comp-bridge-athon.jpeg'
import img72 from '../images/common/tech-comp/comp-glow-it.jpeg'
import img73 from '../images/common/tech-comp/comp-tik-boom.jpeg'
import img74 from '../images/common/tech-comp/comp-robo-cross.jpeg'
import img75 from '../images/common/tech-comp/comp-circuit-showdown.jpeg'
import img76 from '../images/common/tech-comp/comp-circuit-tron.jpeg'


import img77 from '../images/common/hack-errorend.jpeg'
import img78 from '../images/common/work-unity.jpeg'
import img79 from '../images/common/work-3d.jpeg'
import img80 from '../images/common/work-civil-cad.jpeg'
import img81 from '../images/common/work-3d-max.jpeg'
import img82 from '../images/common/work-embeded.jpeg'
import img83 from '../images/common/work-electrical-system.jpeg'
import img84 from '../images/common/work-spark.jpeg'
import img85 from '../images/common/work-iot.jpeg'
import img86 from '../images/common/work-lumion.jpeg'
import img87 from '../images/common/work-product.jpeg'
import img88 from '../images/common/work-self-robot.jpeg'
import img89 from '../images/common/work-hev_modelling.jpeg'
import img90 from '../images/common/work-metaverse.jpeg'
const img1 = "https://d245tsppfkavw4.cloudfront.net/assets/game-valorant.jpeg";
const img2 = "https://d245tsppfkavw4.cloudfront.net/assets/game-roadToGlory.jpeg";
const img3 = "https://d245tsppfkavw4.cloudfront.net/assets/game-compcod.jpeg";
const img4 = "https://d245tsppfkavw4.cloudfront.net/assets/comp-survival.jpeg";
const img5 = "https://d245tsppfkavw4.cloudfront.net/assets/con-veznto.jpeg";
const img6 = "https://d245tsppfkavw4.cloudfront.net/assets/hack-conquerer.jpeg";
const img7 = "https://d245tsppfkavw4.cloudfront.net/assets/con-auxpo.jpeg";
const img8 = "https://d245tsppfkavw4.cloudfront.net/assets/comp-shot.jpeg";

const pdfGuide = "/download";


const dataProject = [
    {
        id: 90,
        title: "Metaverse: Development & Deployment",
        img: img90,
        category: '#workshop',
        desc:"The Metaverse is the digital world that is rapidly gaining traction as the next big thing in technology. It's a place where people can connect, create, and explore in ways that were previously impossible.IHRD Tharang is excited to announce our Metaverse: Development & Deployment workshop!",
        link:"https://konfhub.com/metaverse-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,       
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']]
    },
    {
        id: 89,
        title: "HEV Modelling & Battery Management",
        img: img89,
        category: '#workshop',
        desc:"Join IHRD Tharang for a visually stunning workshop on HEV Modelling & Battery Management.\nLearn about the latest advancements in hybrid electric vehicle (HEV) modelling and energy-efficient battery management in this informative workshop.",
        link:"https://konfhub.com/hev-mb-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,       
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']]
    },
    {
        id: 88,
        title: "Self Driving Robots",
        img: img88,
        category: '#workshop',
        desc:"The future is here and self-driving technology is leading the way in the transportation industry. The possibilities are endless with this technology, and the demand for experts in this field is on the rise. IHRD Tharang is thrilled to announce our Self-driving Robot workshop! ",
        link:"https://konfhub.com/SelfDivingRobot?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹250'], ['available', 'Open']]
    },
    {
        id: 87,
        title: "Product Development",
        img: img87,
        category: '#workshop',
        desc:"Product development plays a crucial role in the success and growth of a business. It helps companies to stay competitive in the market, meet customer needs, and enhance their brand image. IHRD Tharang brings you an opportunity to learn the ins and outs of product development at our Product Development Workshop!",
        link:"https://konfhub.com/ProductDevelopment?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹400'], ['available', 'Open']]
    },
    {
        id: 86,
        title: "FUNDAMENTALS OF INFASTRUCTURE DESUGN USING LUMION 3D",
        img: img86,
        category: '#workshop',
        desc:"Join IHRD Tharang for a visually stunning workshop on the Fundamentals of Infrastructure Design using Lumion 3D! Learn to design and visualize infrastructure projects like never before with Lumion! Get hands-on experience with the latest techniques and tools used in the industry.",
        link:"https://konfhub.com/lumion3d-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '30'], ['fee', '₹250'], ['available', 'Open']]
    },
    {
        id: 85,
        title: "Internet Of Things",
        img: img85,
        category: '#workshop',
        desc:"The Internet of Things is unquestionably the wave of the future. So, why not dive into the vast world of IoT? IHRD Tharang is delighted to invite you all to the IoT workshop. You will be able to learn about the most recent technologies and trends. You will be guided via hands-on projects, providing you the skills and knowledge to build your own solutions.",
        link:"https://konfhub.com/iot-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹400'], ['available', 'Open']]
    },
    {
        id: 84,
        title: "Intro to Sparks",
        img: img84,
        category: '#workshop',
        desc:"Would you like to be at the forefront of technological advancement? What if you had the opportunity to shape the future with your ideas and innovation? Well, here is your chance! IHRD Tharang presents to you an exhilarating chance with an innovative workshop on Intro to Spark. Discover Spark\'s fundamental concepts and features, as well as how to process and analyse massive datasets.",

        link:"https://konfhub.com/in-sp-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']]
    },
    {
        id: 83,
        title: "ELECTRICAL SYSTEM DESIGN",
        img: img83,
        category: '#workshop',
        desc:"Are you curious about electrical systems and their design? Then you are at the right spot. IHRD Tharang is bringing you an exciting chance to gain an indepth and detailed view about Electrical System Design.",
        link:"https://konfhub.com/electricalsystemdesign-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']]
    },
    {
        id: 82,
        title: "Embbeded System",
        img: img82,
        category: '#workshop',
        desc:"Ready to dive into the exciting world of embedded systems? If so, look no further! Get ready to learn how to bring your ideas to life with code and circuitry, cause IHRD Tharang invites you to experience the power of interactive learning at our workshop on Embedded Systems.",
        link:"https://konfhub.com/em-sys-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹600'], ['available', 'Open']]
    },
    {
        id: 81,
        title: "3DX MAX",
        img: img81,
        category: '#workshop',
        desc:"IHRD Tharang is pleased to invite you to the 3ds Max workshop, which gears toward nourishing individuals who are new to or looking to improve their skills. The delegates will be exposed to advanced modeling, animation, and visual effects techniques as well as the fundamental ideas and capabilities of 3ds Max during the workshop. ",
        link:"https://konfhub.com/3dxMax-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹500'], ['available', 'Open']]
    },
    {
        id: 80,
        title: "Civil CAD",
        img: img80,
        category: '#workshop',
        desc:"Join us for the exhilarating IHRD Tharang Civil CAD Workshop! 💻  Learn from industry experts and gain hands-on experience with state-of-the-art software and technology",
        link:"https://konfhub.com/cc-cad-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']]
    },
    {
        id: 79,
        title: "3D Modeling",
        img: img79,
        category: '#workshop',
        desc:"Are you ready to bring your ideas to life? Then come join IHRD Tharang's 3D Modelling & Printing Workshop! ✨ Learn to use industry-standard software to create your own 3D models from scratch..",
        link:"https://konfhub.com/3d-printing-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']]
    },
    {
        id: 78,
        title: "UNITY",
        img: img78,
        category: '#workshop',
        desc:"Have you always dreamed of creating your own video game? Look no further than IHRD Tharang's Unity Workshop!Join us and learn more about the exciting fields of C#, Unity and game development.",
        link:"https://konfhub.com/UNITY-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['points', '30'], ['fee', '₹250'], ['available', 'Open']]
    },
    {
        id: 77,
        title: "ERROREND (Hackathon)",
        img: img77,
        category: '#hackathons',
        desc:"Waiting for an opportunity to showcase your coding skills? Here is your chance to brush up your skills and fasten your fingers. IHRD Tharang is here with a 2-day coding challenge, ERROREND for Higher secondary students to pique their interest in competitive coding.",
        link:"https://konfhub.com/errorend-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹10000'], ['fee', '₹250 (Team)'], ['available', 'Open']]
    },
    {
        id: 76,
        title: "Circuitron",
        img: img76,
        category: '#competition',
        desc:"It's time to test your skills and push the boundaries of technology as IHRD Tharang brings you Circuitron - where design, simulation, and hardware implementation meet to solve real-world problems!.",
        link:"https://konfhub.com/CIRCUITRON-THARANG?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/12mPiUEM_qqSzoYWPYrNysFZ1vkq0B-Zb?usp=share_link",
        
        general: [['prize', '₹6000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 75,
        title: "Circuit Showdown",
        img: img75,
        category: '#competition',
        desc:"Come test your mettle in IHRD Tharang Circuit Showdown, a high-stakes competition where participants showcase their mastery of electronics by tackling complex circuit issues. From debugging design defects to troubleshooting performance problems, this event is a chance to demonstrate your exceptional problem-solving skills and technical prowess. Join us and let your talents shine in this electrifying competition!",
        link:"https://konfhub.com/CircuitShowdown?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1hXEgdITT6Uouep_Gjl_pY6ljPenXt5LT?usp=share_link",
        
        general: [['prize', '₹8000'], ['fee', '₹150'], ['available', 'Open']]
    },
    {
        id: 74,
        title: "Robocross",
        img: img74,
        category: '#competition',
        desc:"Come test your mettle in IHRD Tharang Circuit Showdown, a high-stakes competition where participants showcase their mastery of electronics by tackling complex circuit issues. From debugging design defects to troubleshooting performance problems, this event is a chance to demonstrate your exceptional problem-solving skills and technical prowess. Join us and let your talents shine in this electrifying competition!",
        link:"https://konfhub.com/r-tharang?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1KdQbN_NwNUu2RmwLsrYxuzIvhpmFZhkI?usp=share_link",
        
        general: [['prize', '₹20000'], ['fee', '₹300'], ['available', 'Open']]
    },
    {
        id: 73,
        title: "Tick Tick Boom",
        img: img73,
        category: '#competition',
        desc:"Get ready to ignite your tech-savvy side and explore the world of capacitors with IHRD Tharang's 'Tik Tik Boom' competition. Show off your team spirit and expertise as you compete against other skilled participants in this explosive showdown. Are you ready to create some capacitor chaos?",
        link:"https://konfhub.com/ttb-tharang?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1ornEsfcWPYXnPF5u6qAl81hZlyRLIEL8?usp=share_link",
        
        general: [['prize', '₹5000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 72,
        title: "Glow It Or Blow It",
        img: img72,
        category: '#competition',
        desc:"Let's explore the realm of electronic gadget adaptation to tackle some of the most frantic circuits.IHRD Tharang presents Blow it or Glow it, where you can learn and collaborate on some of the most intriguing circuit designs. Blend your ideas with the right mix of flair and show off your team spirit.",
        link:"https://konfhub.com/giobi-tharang?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1ej3NTKNk4pJsA0WjKIvprwHFONRLSFxy?usp=share_link",
        
        general: [['prize', '₹5000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 71,
        title: "Bridge-A-Ton",
        img: img71,
        category: '#competition',
        desc:"Welcome to IHRD Tharang's Bridge-Building Bonanza! It's time to put on your engineering hat and let your creativity shine. Using the materials provided, improvise and build a bridge that defies the limits of stability, aesthetics, and strength.",
        link:"https://konfhub.com/bat-tharang?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1aZzruHX3IWjtcu6Xn7VgQqpyeaeLpwdX?usp=share_link",
        
        general: [['prize', '₹5500'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 70,
        title: "Contraption",
        img: img70,
        category: '#competition',
        desc:"🚀 Engrossed in energy sources and their transformations, avant-garde in  implementing them in sustainable projects for the melioration of the world! IHRD Tharang presents Contraption, a competition in which the team can design a project involving energy conversion. Seize the oppurtunity and see what's in store for you.",
        link:"https://konfhub.com/contraption?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/12t0TKVg1v7nTwuFPQTJ7C0S-CxwEWctu?usp=share_link",
        
        general: [['prize', '₹8000'], ['fee', '₹110'], ['available', 'Open']]
    },
    {
        id: 69,
        title: "Formula GSM",
        img: img69,
        category: '#competition',
        desc:"Enter the arena and prepare for the ultimate test of robotic prowess as IHRD Tharang brings you Formula GSM. Using GSM technology, build and program your own bot to take on a treacherous track filled with sand and gravel. Show off your creation's dexterity, toughness, and agility as you compete in a series of rounds against other skilled bot builders.",
        link:"https://konfhub.com/fg-tharang?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1ygeJLX6g0anQPoaLFfm6kmy0O_zbWuVo?usp=share_link",
        
        general: [['prize', '₹10000'], ['fee', '₹250'], ['available', 'Open']]
    },
    {
        id: 68,
        title: "FANTASM [ideathon]",
        img: img68,
        category: '#competition',
        desc:"Welcome to the \"Revolutionizing Education for a Brighter Future\" Ideathon! This one-day event is designed to empower high school students to think critically and creatively about the future of education.We believe that the next generation of leaders has the potential to revolutionize education, and we're excited to see what they come up with. Join us for a day of inspiration, collaboration, and most importantly, fun!\nWe look forward to seeing you at the event and seeing the innovative ideas that will be shared.",
        link:"https://konfhub.com/Fantasm?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/16wYKjrd9RObcENGH1747PNz6aQ4sX78E?usp=share_link",
        
        general: [['prize', '₹4000'], ['fee', '₹75'], ['available', 'Open']]
    },
    {
        id: 67,
        title: "Area 51",
        img: img67,
        category: '#competition',
        desc:"Step into IHRD Tharang's AREA 51, a place of mystery and intrigue where puzzles abound, and solutions wait to be discovered! Unlock the secrets within with your analytical mind and emerge triumphant in this online challenge of wit and time!",
        link:"https://konfhub.com/Area51?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/15q1AUnp5RK-Tgwho-IykO6KiRVFzPNbl?usp=share_link",
        
        general: [['prize', '₹4000'], ['fee', '₹25'], ['available', 'Open']]
    },
    {
        id: 66,
        title: "TECH QUIZ (Junior and Senior)",
        img: img66,
        category: '#competition',
        desc:"IHRD Tharang presents Tech Quiz, a quiz competition to put your technical knowledge to the test. All technologies change rapidly so it is essential to keep up with them and this is the perfect opportunity to display the depth of your knowledge.",
        link:"https://konfhub.com/Techquiz?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1gsoKXAU0tDI_j4YWsdmexV2YrxC2ygIK?usp=share_link",
        
        general: [['prize', '₹8500'], ['fee', '₹75'], ['available', 'Open']]
    },
    {
        id: 65,
        title: "Amazing Race",
        img: img65,
        category: '#competition',
        desc:"Join IHRD Tharang for the thrilling test of speed and strategy; the Amazing Race!This task-based competition pits teams against each other in a race to complete all challenges and emerge as the ultimate victors, where victory is within reach.",
        link:"https://konfhub.com/AMAZINGRACE-THARANG?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1U76u5IB85gms9Sn2PGQgp_LrE8XS7bu9?usp=share_link",
        
        general: [['prize', '₹5000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 64,
        title: "Circuitathon (CIRCUIT BUILDING)",
        img: img64,
        category: '#competition',
        desc:"Come test your circuit-building prowess at IHRD Tharang Circuitathon, a thrilling competition brought to you by ExESS. Ranging from quizzes on electronics to designing and simulating circuits, only the most skilled will advance to the final round! Are you ready to prove your skills and take the crown?",
        link:"https://konfhub.com/CIRCUITATHON-THARANG?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1cUpgq3y0fssOm17maXPqmVzPuq3m02af?usp=share_link",
        
        general: [['prize', '₹5000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 63,
        title: "IDE-MANIA",
        img: img63,
        category: '#competition',
        desc:"Welcome to IHRD Tharang's ultimate test of innovation and invention; Ide Mania! Demonstrate your formidable problem-solving skills and  your technical expertise in programming and electronics Unleash your boundless creativity and develop a project that truly stands out from the rest.",
        link:"https://konfhub.com/IDEMANIA?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1CwA3vilDvwpTEq4Bhb9mjeQN-lQMbD3t?usp=share_link",
        
        general: [['prize', '₹5000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 62,
        title: "Line Chaser",
        img: img62,
        category: '#competition',
        desc:"IHRD Tharang, in association with IEEE SB CEC, welcomes you to the thrilling world of line chasing! In this competition, robots are pushed to the limit as they race to follow a winding line with precision and speed. Witness the awe-inspiring feats of these high-tech competitors in the ultimate test of creativity and innovation. The line chaser competition awaits!",
        link:"https://konfhub.com/LINECHASER-THARANG?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1A6REqimHDIFqq2Vbd-nT0szleXG26afw?usp=share_link",
        
        general: [['prize', '₹10000'], ['fee', '₹250'], ['available', 'Open']]
    },
    {
        id: 61,
        title: "GravitEx",
        img: img61,
        category: '#competition',
        desc:"Come Join us for IHRD Tharang GravitEx and put your racing skills to the test in the Hovercraft Grand Prix.With your trusty radio-controlled hovercraft by your side, take on a variety of terrains - from water to sand to gravel - and blaze a trail to the finish line. Navigate through challenging courses as quickly as possible against other skilled pilots. Are you ready to take on the ultimate hovercraft challenge? Join the race and find out!",
        link:"https://konfhub.com/g-cf9123ce?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1S4p7w2ajfD5KD6pBOVhxm5TOu_-sCptP?usp=share_link",
        
        general: [['prize', '₹15000'], ['fee', '₹300'], ['available', 'Open']]
    },
    {
        id: 60,
        title: "Freeze Frame",
        img: img60,
        category: '#competition',
        desc:"Get ready to make time stand still with every click! Join IHRD Tharang's exciting photography competition, Freeze Frame and capture the world in stunning detail!. For more details contact Jithin: 73568 80904, Rohan: 62357 07226 .",
        link:"https://konfhub.com/freeze-frame-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹3000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 59,
        title: "Metronome-Battle of Bands",
        img: img59,
        category: '#competition',
        desc:"Are you ready to rock out like never before at the Battle of Bands? coz IHRD Tharang is here with Metronome - the most exhilarating band performance competition of the year!. For more details contact Ambutha: 80787 74191, Esther: 91884 58806",
        link:"https://konfhub.com/mn-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹9000'], ['fee', '₹800'], ['available', 'Open']]
    },
    {
        id: 58,
        title: "Spot Light",
        img: img58,
        category: '#competition',
        desc:"Get ready to shine bright like a diamond at IHRD Tharang Spotlight, the theme based Ramp Walk competition!. For more details contact Sreepriya: 79074 29985, Shion: 88081 48610. ",
        link:"https://konfhub.com/sl-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹9000'], ['fee', '₹800'], ['available', 'Open']]
    },
    {
        id: 57,
        title: "Sudoku",
        img: img57,
        category: '#competition',
        desc:"Are you ready to flex your mental muscles and put your puzzle-solving skills to the test? We've got a lineup of challenging sudoku puzzles, ranging from easy to expert level, to keep you on your toes! Join us for a day of brain-teasing fun and see if you have what it takes to come out on top. For more details contact Diana: 94467 10040 Albin: 95449 06771.",
        link:"https://konfhub.com/sudoko-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹1000'], ['fee', '₹50'], ['available', 'Open']]
    },
    {
        id: 56,
        title: "Rubiks Cube",
        img: img56,
        category: '#competition',
        desc:"Do you have what it takes to solve the colorful puzzle in record time? Bring your lightning-fast fingers and sharp mind as you compete against other puzzle enthusiasts! Watch in awe as the cubes twist and turn, solving themselves in the hands of true masters. Exclusively for School students. For more details contact Hena: 70123 02544, Mridul: 99958 18064.",
        link:"https://konfhub.com/rubikscube-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹1000'], ['fee', '₹50'], ['available', 'Open']]
    },
    {
        id: 55,
        title: "Fabricate",
        img: img55,
        category: '#competition',
        desc:"Assemble construct create! Are you a budding inventor or creator? Will you construct a towering skyscraper, a sleek race car, or something entirely new and unique? Join us for a day of fun and creativity, and let your imagination run wild as you build something truly amazing!. For more details contact Sujith : 95628 98254, Akash: 75599 06733",
        link:"https://konfhub.com/fabricate-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹2000'], ['fee', '₹150'], ['available', 'Open']]
    },
    {
        id: 54,
        title: "Quizardry",
        img: img54,
        category: '#competition',
        desc:"Are you a trivia master, a history buff, or a pop culture fanatic? Then come test your knowledge at the Quizardy Quiz Competition!. For more details contact Devakrishna: 8075702504, Akash: 7559906733 ",
        link:"https://konfhub.com/quizardry-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹2000'], ['fee', '₹200'], ['available', 'Open']]
    },
    {
        id: 53,
        title: "Radient Stroke",
        img: img53,
        category: '#competition',
        desc:"The world is a canvas waiting to be filled with colors and brushstrokes that spill and thrill. Come join us at the Radiant Stroke Painting Competition where art comes alive and creativity flows. Unleash your inner artist and let your talent shine bright. For more details contact Dakshina: 79028 02856, Akshara: 83019 87995 ",
        link:"https://konfhub.com/radiant-stroke-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹2000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 52,
        title: "Collage Making",
        img: img52,
        category: '#competition',
        desc:"Assemble a tapestry of memories, a mosaic of moments in time! Gather your inspiration and let your artistic vision come to life. Exclusively for School students. For more details contact Adithya: 85898 82149, Dakshina: 79028 02856",
        link:"https://konfhub.com/collagemaking-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹2000'], ['fee', '₹100'], ['available', 'Open']]
    },
    {
        id: 51,
        title: "Beatboxing",
        img: img51,
        category: '#competition',
        desc:"Welcoming beatboxers of all skill levels to this beatboxing odyssey of rhythm and sound. Grab your microphone and let your beats intertwine in this extravaganza. Form more details contact Lekshmi : 81299 44693, Jithin: 73568 80904",
        link:"https://konfhub.com/bb-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹2000'], ['fee', '₹100'], ['available', 'Open']]
        
    },
    {
        id: 50,
        title: "Just A Minute",
        img: img50,
        category: '#competition',
        desc:"Are you ready to rise to the challenge and take your verbal prowess to the next level? Gather your mental muscles and prepare to flex your linguistic skills! Join us now and conquer the stage like never before!. For more details contact Lekshmi : 81299 44693, Esther: 91884 58806",
        link:"https://konfhub.com/jam-tharang?utm_source=tharangweb",
        
        general: [['prize', '₹4500'], ['fee', '₹200'], ['available', 'Open']],
        guidelines:pdfGuide,
    },
    {
        id: 49,
        title: "Vocal Range",
        img: img49,
        category: '#competition',
        desc:"Music never ceases to enlighten the soul and mind. IHRD Tharang has come to light with its solo song competition where you shimmer your magical voice soothing the heart and spirit of the audience summoned. For more details Point of contact:Nicole: 8137056367 Adithya: 8589882149",
        link:"https://konfhub.com/vrg-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹5000'], ['fee', '₹200'], ['available', 'Open']]
    },
    {
        id: 48,
        title: "Step Into Rhythm",
        img: img48,
        category: '#competition',
        desc:"Dancers don't need wings to fly! IHRD Tharang wholeheartedly welcomes the dance squads from all over the country to get on the floor and step into the rhythm with their energetic performances. Be a facet of this vivacious group dance competition and get ready to bag the trophy, for more details contact Aparna: 94467 58808, Nandana: 85476 47211.",
        link:"https://konfhub.com/sir-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹9000'], ['fee', '₹800'], ['available', 'Open']]
    },
    {
        id: 47,
        title: "Flash Step",
        img: img47,
        category: '#competition',
        desc:"Are you enticed to prance your body to the rhythm of IHRD Tharang? Then pull up your socks and show off your frenetic dance moves on the rigorous beats at the flash step, a solo dance competition of the national level extravaganza. For more details contact Sneha : 8590439377, Jithin : 7356880904",
        link:"https://konfhub.com/fs-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹5000'], ['fee', '₹200'], ['available', 'Open']]
    },
    {
        id: 46,
        title: "Smartphone Controlled Robot",
        img: img46,
        category: '#workshop',
        desc:"Join us for our upcoming workshop on Smartphone Controlled Robot accomplished as a part of IHRD THARANG. In this workshop, you will learn how to build and control your robot using a smartphone.        ",
        link:"https://konfhub.com/SmartPhoneControlledrobot?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['fee', '₹250'], ['available', 'Open']]
    },
    {

        id: 45,
        title: "Vine competition",
        img: img45,
        category: '#competition',
        desc:"Join the vine-making contest and let your talent come alive. Show us your skills and let your creativity thrive. Make a vine that's unique and full of flair, and you just might win the grand prize beyond compare!",
        link:"https://konfhub.com/vic-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹1000'], ['fee', 'Free'], ['available', 'Open']]
    },

    {
        id: 44,
        title: "Videography Competition",
        img: img44,
        category: '#competition',
        desc:"Get ready to capture life's moments, big and small, show us your creativity, and stand tall! Enter our videography contest, and let your talent shine, we can't wait to see what's on the horizon of your mind!",
        link:"https://konfhub.com/vc-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        
        general: [['prize', '₹1000'], ['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 43,
        title: "Call for Startups",
        img: img42,
        category: '#application',
        desc:"As part of upcoming IHRD THARANG 2023 national level tech fest we invite startups from across the country to showcase their latest technologies and innovations at our event. The theme for this year's tech fest is \"Science, Youth and Leadership \" Selected startups will have the opportunity to showcase their products and services to a wide audience of attendees, including industry leaders, investors, and potential customers. For more details contact Akshay : +91 90747 56152",
        link:"http://bit.ly/call_for_Startups",
        guidelines:pdfGuide,
        
        general: [['fee', 'Rent applicable'], ['available', 'Open']]
    },
    {
        id: 42,
        title: "Food Stalls",
        img: img43,
        category: '#application',
        desc:"We are excited to announce the upcoming IHRD THARANG 2023 national level tech fest and inviting application to setup food stall. For more details and registration contact Arun : +91 75610 70508, Nimna : +91 80787 65107",
        link:" http://tharang.ihrd.ac.in/",
        guidelines:pdfGuide,
        
        general: [['fee', 'Rent applicable'], ['available', 'Open']]
    },
    {
        id: 41,
        title: "Call for MSME",
        img: img41,
        category: '#application',
        desc:"Inviting micro,small & medium enterprises to showcase and sell your products, services. Last date for registration : 20th January 2023 .",
        link:" http://bit.ly/call-fleamarket",
        guidelines:pdfGuide,
        
        general: [['fee', 'Rent applicable'], ['available', 'Open']]
    },


    {
        id: 40,
        title: "AR/VR Zone",
        img: img40,
        category: '#application',
        desc:"Inviting companies to engage the audience with your technologies. For more details contact Nithin : 8547062991",
        link:"http://bit.ly/call_AR-VR_tharang",
        guidelines:pdfGuide,
        
        general: [['fee', 'Free'], ['available', 'Open']]
    },

    {
        id: 39,
        title: "IHRD Historical Gallery",
        img: img39,
        category: '#application',
        desc:"There will be a special expo area for IHRD Historical Gallery on 3, 4, and 5 Feb for IHRD THARANG - 2023 where attendees can explore more about IHRD and its institutions",
        link:"http://bit.ly/tharang_gallery",
        guidelines:pdfGuide,
        general: [['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 38,
        title: "Project Expo - College",
        img: img38,
        category: '#application',
        desc:"The contest is open to undergraduate/post-graduate students of all colleges (including engineering, arts, and science, polytechnic colleges etc) in Kerala. With the theme:'Technology, Sustainability, Future'",
        link:"http://bit.ly/tharang_projectexpo",
        guidelines:pdfGuide,
        general: [['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 37,
        title: "School Exhibition",
        img: img37,
        category: '#application',
        desc:"The contest is open to all schools students up to high school and higher secondary students in Kerala. With the theme:'Science, Youth, Leadership",
        link:"http://bit.ly/tharang_exhibition",
        guidelines:pdfGuide,
        general: [['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 36,
        title: "QUEEN'S GAMBIT",
        img: img36,
        category: '#competition',
        desc:"IHRD Tharang is enlivened to bring up your brilliance to the table. The potent weapon that develops curiosity & confidence! Checkmate the opponent's king by placing it under an inescapable threat of capture.",
        link:"https://konfhub.com/queens-gambit?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1FsbIoHjlii33hpJ6mSgQmst9r9w1ZohV?usp=share_link",
        
        general: [['prize', '₹10000'], ['fee', '₹80'], ['available', 'Open']]
    },
    {
        id: 35,
        title: 'CENTER-A-DIV',
        img: img35,
        category: '#competition',
        desc:"Show off your CSS skills and win big prizes! coz IHRD Tharang brings you Centre-A-Div competition.Put your ability to read and interpret code, recognize specific elements, and center divs to the test!  PASS the expectations, SET the standards and KILL the competition.",
        link:"https://konfhub.com/center-a-div?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1MRB5_ZWdWBTtmUEohmAvk8FVzoRZaVnF?usp=share_link",
        
        general: [['prize', '₹5000'], ['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 34,
        title: 'KEY MISMASH',
        img: img34,
        category: '#competition',
        desc:"Step into the realm of Key Mismash, a game that tests your keyboard mastery!.With a QWERTY design that's been cleverly rearranged,this challenge is no walk in the park. Prove your proficiency and join us for a thrilling round of Key Mismash, where the competition never ceases!",
        link:"https://konfhub.com/key-mismash?utm_source=tharangweb",
        guidelines:"https://drive.google.com/drive/folders/1y3dxJoY8PWvTWQ6pHYPGoXweuJCdAkzo?usp=share_link",
        
        general: [['prize', '₹8000'], ['fee', '₹80'], ['available', 'Open']]
    },
    {
        id: 33,
        title: 'Ethical Hacking',
        img: img33,
        category: '#workshop',
        desc:"Ready to explore the fascinating world of ethical hacking, and what it can do for you?.IHRD THARANG is here with a Workshop on \"Ethical Hacking\", where you'll learn the basics of ethical hacking, including the different security tools used, and how to stay safe online.",
        link:"https://konfhub.com/Ethicalhacking?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹650'], ['available', 'Open']]
    },
    {
        id: 32,
        title: 'Web Development',
        img: img32,
        category: '#workshop',
        desc:"The popularity of web development has peaked since the pandemic. But even before all of that, we dreamed of building our websites. Well, here is your long-awaited chance to make that dream come true!.IHRD Tharang cordially invites all the dreamers to the informative Web Development workshop held by Revertech. Do bring your laptop.",
        link:"https://konfhub.com/Webdevelopment?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']]
    },
    {
        id: 31,
        title: 'Structural Engineering and Structural Analysis',
        img: img31,
        category: '#workshop',
        desc:"Ready to explore the basics of Structural Engineering and Structural Analysis? Then this is your chance to discover new methods and technologies!.IHRD THARANG is here with a workshop on \"Structural Engineering and Structural Analysis\" where you'll learn new techniques, broaden your knowledge and get valuable insight from experienced professionals.",
        link:"https://konfhub.com/StructrualEngineering?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']]
    },
    {
        id: 30,
        title: 'MATLAB',
        img: img30,
        category: '#workshop',
        desc:"Are you thrilled about delving into the realm of technical computing and problem-solving?.Then, IHRD THARANG, in collaboration with Revertech, presents you with a workshop on \"MATLAB\",a programming platform used by engineers and scientists worldwide. At this workshop, you will learn about MATLAB, which has endless applications in the fields of data analysis, machine learning, and many more.",
        link:"https://konfhub.com/MATLAB?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹300'], ['available', 'Open']]
    },
    {
        id: 29,
        title: 'Legged Robotics',
        img: img29,
        category: '#workshop',
        desc:"IHRD Tharang is ecstatic to conduct its workshop on Legged Robotics, an exciting field of robotics that can unlock a world of possibilities. Come discover the possibilities of this fascinating field, unleash your creativity and ingenuity to build your unique robots, and explore the wonders that legged robotics has to offer.",
        link:"https://konfhub.com/LeggedRobotics?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']]
    },
    {
        id: 28,
        title: 'Data Mining',
        img: img28,
        category: '#workshop',
        desc:"Data Mining is an interactive Python programming workshop for absolute beginners that don't anticipate you to memorize coding the \"conventional\" way or have any earlier information.The workshop covers the core python language and the standard library in detail along with an introduction to Scrapy. Learners will gain the working knowledge needed to start programming, debugging and using Python in everyday tasks.",
        link:"https://konfhub.com/DataMining?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']]
    },
    {
        id: 27,
        title: 'BMW',
        img: img27,
        category: '#workshop',
        desc:"Rev your engines, fuel your passion and get ready to race toward the cutting edge of automotive design with BMW.IHRD Tharang is thrilled to organize its workshop on BMW. This is your chance to learn, explore and experience the power and passion of BMW design.",
        link:"https://konfhub.com/BMWDesign?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']]
    },
    {
        id: 26,
        title: 'AUTOCAD',
        img: img26,
        category: '#workshop',
        desc:"Intending to provide young technical minds a deep insight into the world of AUTOCAD, IHRD THARANG'23 in association with the College of Engineering Chengannur is hosting a workshop on \"AUTOCAD\".",
        link:"https://konfhub.com/AutoCAD?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']]
    },
    {
        id: 25,
        title: 'Robotic Operating System',
        img: img25,
        category: '#workshop',
        desc:"Are you interested in exploring the world of robotics and pushing the boundaries of innovation? If so, then this is the perfect workshop for you! IHRD THARANG is here with a workshop on Robotic Operating System, which is designed to give you in-depth knowledge and understanding of ROS, a powerful set of tools for robot development.",
        link:"https://konfhub.com/ros-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['fee', '₹500'], ['available', 'Open']]
    },
    {
        id: 24,
        title: 'PYTHON',
        img: img24,
        category: '#workshop',
        desc:"Coding is the present and the future. Here is an opportunity for you to learn PYTHON, one of the most widely used programming languages in the current tech industriesIHRD Tharang hosted by the College Of Engineering Chengannur, is ecstatic to present you to the Python workshop conducted by Revertech.",
        link:"https://konfhub.com/Pythonschool?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['fee', '₹250'], ['available', 'Open']]
    },
    {
        id: 23,
        title: 'Origami',
        img: img23,
        category: '#workshop',
        desc:"Are you looking for a creative outlet to express your artistic side & dazzle us with your skillful folding and intricate designs? Come join us for the IHRD THARANG Origami Workshop & learn how to create impressive origami designs from simple sheets of paper",
        link:"https://konfhub.com/origami-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['fee', '₹150'], ['available', 'Open']]
    },
    {
        id: 22,
        title: 'Quantum Computing',
        img: img22,
        category: '#workshop',
        desc:"IHRD Tharang is excited to provide a workshop on Quantum Computing that covers the architecture, hardware, software, design, and types to comprehend the full potential of quantum computing. ",
        link:"https://konfhub.com/QuantumComputing?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']]
    },
    {
        id: 21,
        title:'Factory Automation with Siemens TIA',
        img: img21,
        category: '#workshop',
        desc:"IHRD Tharang cordially welcomes you to join an informative workshop on Factory Automation with Siemens TIA to learn and expand your knowledge. This workshop will be conducted by Industrus Tech.",
        link:"https://konfhub.com/Siemenssoftware-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']],
        
    },
    {
        id: 20,
        title: 'Harley Davidson Design Analysis & Tuning.',
        img: img20,
        category: '#workshop',
        desc:"Tech offers you the chance to get a hands-on approach to Learning the legacy of Harley Davidson Design Analysis & Tuning. ",
        link:"https://konfhub.com/harley-tharang?utm_source=tharangweb",
        
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']],
    },
    {
        id: 19,
        title: 'AR & Game Development',
        img: img19,
        category: '#workshop',
        desc:"In the present day, it is perceived that the boundary between the virtual world and the real one is a bit of a blur.To explore and learn more about this novelty, Pacelab will be holding a workshop on AR & Game Development as a part of IHRD THARANG.",
        link:"https://konfhub.com/aagd-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹500'], ['available', 'Open']],
    },
    {
        id: 18,
        title: 'Data Science',
        img: img18,
        category: '#workshop',
        desc:"As data is the new oil and data science is the new refinery, IHRD THARANG, in partnership with Pacelab, presents a Data Science workshop to help you understand the quickly developing field that involves using statistical and computational techniques to extract insights and knowledge from data, with applications in finance, healthcare, technology, and marketing.",
        link:"https://konfhub.com/ds-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹400'], ['available', 'Open']],
    },
    {
        id: 17,
        title: 'Cloud Computing',
        img: img17,
        category: '#workshop',
        desc:"IHRD Tharang is here with a one-day workshop on Cloud Computing by Pacelab that provides an in-depth understanding of the components and infrastructure of the cloud, the benefits and future of cloud computing, the deployment of services, and assessing security risks.",
        link:"https://konfhub.com/cc-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']],
    },
    {
        id: 16,
        title: 'Flutter',
        img: img16,
        category: '#workshop',
        desc:"As new technologies emerge, it begins to transform the world around us in its own subtle ways. One such instance is where App Making has transitioned into an art form that embodies the artistic traits and the technical prowess of the creator.To cut to the chase, a workshop will be held by Pacelab on Flutter and its many utilities as a part of IHRD THARANG. ",
        link:"https://konfhub.com/flutter-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']],
    },
    {
        id: 15,
        title: 'Deep Fake',
        img: img15,
        category: '#workshop',
        desc:"Are you interested in learning about the latest technology in the field of Artificial Intelligence (AI)? Deepfake technology, a category of synthetic media that is intended to look authentic but is produced by a computer, was made possible in large part thanks to AI.As part of IHRD Tharang, we warmly welcome each one of you to the Deepfake Workshop by Pacelab.",
        link:"https://konfhub.com/df-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹500'], ['available', 'Open']],
    },
    {
        id: 14,
        title: 'PCB Designing',
        img: img14,
        category: '#workshop',
        desc:"Dwelling in the digital era, humankind is constantly evolving in terms of technology. The intervention of the electronics sector in our everyday lives is getting massive.IHRD Tharang, in association with Octgaon Technologies,  is here with an apprising workshop on PCBs.",
        link:"https://konfhub.com/pcb-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']],
    },
    {
        id: 13,
        title: 'GitHub',
        img: img13,
        category: '#workshop',
        desc:"IHRD Tharang is delighted to bring to you a GitHub Workshop hosted by the College of Engineering Chengannur. The session will be handled by Mr. Alwin John, GitHub Campus Expert.",
        link:"https://konfhub.com/github-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹400'], ['available', 'Open']],
    },
    {
        id: 12,
        title: 'PLC and SCADA',
        img: img12,
        category: '#workshop',
        desc:"The safe and efficient operation of industrial processes relies heavily on PLCs and SCADA systems.IHRD Tharang  is delighted to invite you to a workshop on PLC and SCADA conducted by Pacelab.  ",
        link:"https://konfhub.com/plcscada-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']],
    },
    {
        id: 11,
        title: 'Self-driving using AI',
        img: img11,
        category: '#workshop',
        desc:"The advent of artificial intelligence has led to a groundbreaking technological innovation- self-driving cars. Today, self-driving cars which were once only an ambitious idea is a reality. Several AI-related technologies such as deep learning and computer vision have contributed to this development.IHRD Tharang, in association with Pacelab, is bringing you a Self-driving using AI workshop. ",
        link:"https://konfhub.com/SelfDrivingAI-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['points', '40'], ['fee', '₹600'], ['available', 'Open']],
    },
//     {
//         id: 10,
//         title: 'Virtual Reality ',
//         img: img10,
//         category: '#workshop',
//         desc:"IHRD Tharang, in collaboration with Pacelab, cordially invites you to our Virtual Reality workshop. This is a special chance to learn about the most recent advancements in VR and to experiment with various VR devices and applications. ",
//         link:"https://konfhub.com/vr-tharang?utm_source=tharangweb",
//         prize:"NA",
//         fee:"₹650",
//         available:"Open"
//     },
    {
        id: 9,
        title: 'Radiant',
        img: img9,
        category: '#competition',
        desc:"Creativity awaits!! Looking for a chance to stand out and show off your unique design style? Then this is the chance to let your artistic side shine!.Introducing Radiant by IHRD Tharang- the ultimate online UI/UX competition",
        link:"https://konfhub.com/radiant-thrng?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '10,000'], ['fee', '₹299 (Team)'], ['available', 'Open']],
    },
    {
        id: 8,
        title: 'SHOTS TO SHORT',
        img: img8,
        category: '#competition',
        desc:"IHRD Tharang  is here with a Short Film Competition on the topic \"Sustainable Tourism\".This competition is your chance to share your vision for a better future & inspire change through the power of film! Grab your camera, let your creativity run wild & your artistic talent gleam!",
        link:"https://konfhub.com/Sfc-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '10,000'], ['fee', '₹250 (Team)'], ['available', 'Open']],
    },
    {
        id: 7,
        title: 'CONQUEROR',
        img: img6,
        category: '#hackathons',
        desc:"🚀 Get ready for CONQUEROR, the ultimate 12 hour hackathon by IHRD Tharang focused on tackling the biggest health issues faced by the society today! Teams will have the opportunity to build a prototype app, website, or software to showcase their innovative solutions. The best and brightest minds will come together to conquer the challenges facing the health sector, and emerge victorious as true CONQUERORS.",
        link:"https://konfhub.com/conqueror?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '20,000'], ['fee', '₹399 (Team)'], ['available', 'Open']],
    },
    {
        id: 3,
        title: 'SURVIVAL OF FITTEST',
        img: img4,
        category: '#competition',
        desc:"Are you ready to put your engineering skills to the test and prove your mettle? Gather your toolkit & get your thinking cap on, coz a thrilling competition is coming your way! IHRD Tharang presents Survival Of The Fittest, an exciting event filled with challenges and tasks that will put your skills to the ultimate test. The event includes three rounds, and students can choose between two baskets",
        link:"http://konfhub.com/survival-of-fittest-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '8,600'], ['fee', '₹150 (Team)'], ['available', 'Open']],
    },
    {
        id: 2,
        title: 'Vezeto',
        img: img5,
        category: '#conclaves',
        desc:"IHRD THARANG is ecstatic to present you VEZETO, an idea-pitching competition under the III Conclave. Throughout the event, Google experts will lead sessions on innovation and entrepreneurship, culminating in a task for qualified students to present their pitch decks. Vezeto aims to provide the necessary mentorship and resources to students to pull a perfect pitch deck. TEAM Eligibility: Students of classes 11 and 12, Polytechnical, ITI, Arts & Science, Applied Science and Engineering students are eligible for the event.",
        link:"https://konfhub.com/vezeto-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '25,000'], ['fee', '₹400 (Team)'], ['available', 'Open']],
    },
    {
        id: 1,
        title: 'AUXPO',
        img: img7,
        category: '#conclaves',
        desc:"IHRD Tharang is elated to host AUXPO, a mock IPL auction under the III Conclave. The event comprises a preliminary stage in which the participants must complete certain tasks to qualify for the mega mock auction. The top three teams will be awarded a cash prize of Rs. 15000/- and a Course package: Start-up Idea to Scaling (constituting of courses on Product, Marketing, Revenue & Funding totally worth Rs 5,400) from Markoknow for free.",
        link:"https://konfhub.com/auxpo-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '15,000'], ['fee', '₹500 (Team)'], ['available', 'Open']],
    },
    {
        id: 6,
        title: 'Road to Glory',
        img: img2,
        category: '#game',
        desc:"Blades of grass flying with every kick, a quick and loud heartbeat, and an irresistible desire for triumph define both gamers and sportsmen. Rekindle your football passion and prepare your teams for the highly anticipated eFootball tournament. IHRD Tharang warmly invites each one of you to the first edition of eFootball - Road to Glory. So what are you waiting for? Coin your teams and get ready to compete and showcase your skills on the virtual pitch. ⚽",
        link:"https://konfhub.com/road-to-glory?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '5,000'], ['fee', '₹25'], ['available', 'Closed']],
    },
    {
        id: 5,
        title: 'RESURENZE',
        img: img1,
        category: '#game',
        desc:"Excited about online tactical battle shooter games? Then brace for an exhilarating Valorant showdown - a team-based tactical PVP where your shooting skills, strategy, and team spirit are put to the test. So, don your finest attire and arm yourself with cunning and wit, for the battle of wits is about to begin. Assemble your squad and get ready for a pulse-pounding showdown as IHRD Tharang presents the first edition of RESURENZE. 🔴 Note : A team must have 5 members.",
        link:"http://konfhub.com/resurenze-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '8,000'], ['fee', '₹250 (Team)'], ['available', 'Closed']],
    },
    {
        id: 4,
        title: 'COMPCOD',
        img: img3,
        category: '#game',
        desc:"Attention all gaming maniacs! 🎮 Load, Aim, and Fire! It's COD season, and what better time to join the ranks of the elite and put your talents to the test in the adrenaline-fueled bouts of Call of Duty Mobile. IHRD Tharang presents to you COMPCOD. Get ready to battle along with your comrades in the world of Call Of Duty. Show off your skills and dominate the battleground.",
        link:"https://konfhub.com/call-of-duty-tharang?utm_source=tharangweb",
        guidelines:pdfGuide,
        general: [['prize', '3,000'], ['fee', '₹100 (Team)'], ['available', 'Closed']],
    },
    
]

export default dataProject;
