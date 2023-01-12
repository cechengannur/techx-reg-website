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
import img36 from '../images/common/comp-chess.jpeg'
import img37 from '../images/common/extra-call-school.webp'
import img38 from '../images/common/extra-call-college.webp'
import img39 from '../images/common/extra-gallery.webp'
import img40 from '../images/common/AR_VRzone.jpeg'
import img41 from '../images/common/CallforSME.jpeg'
import img42 from '../images/common/CallforStartup.jpeg'
import img43 from '../images/common/FoodStall.jpeg'



const img1 = "https://d245tsppfkavw4.cloudfront.net/assets/game-valorant.jpeg";
const img2 = "https://d245tsppfkavw4.cloudfront.net/assets/game-roadToGlory.jpeg";
const img3 = "https://d245tsppfkavw4.cloudfront.net/assets/game-compcod.jpeg";
const img4 = "https://d245tsppfkavw4.cloudfront.net/assets/comp-survival.jpeg";
const img5 = "https://d245tsppfkavw4.cloudfront.net/assets/con-veznto.jpeg";
const img6 = "https://d245tsppfkavw4.cloudfront.net/assets/hack-conquerer.jpeg";
const img7 = "https://d245tsppfkavw4.cloudfront.net/assets/con-auxpo.jpeg";
const img8 = "https://d245tsppfkavw4.cloudfront.net/assets/comp-shot.jpeg";


const dataProject = [
    {
        id: 43,
        title: "Call for Startups",
        img: img42,
        category: '#application',
        desc:"As part of upcoming IHRD THARANG 2023 national level tech fest we invite startups from across the country to showcase their latest technologies and innovations at our event. The theme for this year's tech fest is \"Science, Youth and Leadership \" Selected startups will have the opportunity to showcase their products and services to a wide audience of attendees, including industry leaders, investors, and potential customers. For more details contact Akshay : +91 90747 56152",
        link:"http://bit.ly/call_for_Startups",
        general: [['fee', 'Rent applicable'], ['available', 'Open']]
    },
    {
        id: 42,
        title: "Food Stalls",
        img: img43,
        category: '#application',
        desc:"We are excited to announce the upcoming IHRD THARANG 2023 national level tech fest and inviting application to setup food stall. For more details and registration contact Arun : +91 75610 70508, Nimna : +91 80787 65107",
        link:" http://tharang.ihrd.ac.in/",
        general: [['fee', 'Rent applicable'], ['available', 'Open']]
    },
    {
        id: 41,
        title: "Call for MSME",
        img: img41,
        category: '#application',
        desc:"Inviting micro,small & medium enterprises to showcase and sell your products, services. Last date for registration : 20th January 2023 .",
        link:" http://bit.ly/call-fleamarket",
        general: [['fee', 'Rent applicable'], ['available', 'Open']]
    },


    {
        id: 40,
        title: "AR/VR Zone",
        img: img40,
        category: '#application',
        desc:"Inviting companies to engage the audience with your technologies. For more details contact Nithin : 8547062991",
        link:"http://bit.ly/call_AR-VR_tharang",
        general: [['fee', 'Free'], ['available', 'Open']]
    },

    {
        id: 39,
        title: "IHRD Historical Gallery",
        img: img39,
        category: '#application',
        desc:"There will be a special expo area for IHRD Historical Gallery on 3, 4, and 5 Feb for IHRD THARANG - 2023 where attendees can explore more about IHRD and its institutions",
        link:"http://bit.ly/tharang_gallery",
        general: [['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 38,
        title: "Project Expo - College",
        img: img38,
        category: '#application',
        desc:"The contest is open to undergraduate/post-graduate students of all colleges (including engineering, arts, and science, polytechnic colleges etc) in Kerala. With the theme:'Technology, Sustainability, Future'",
        link:"http://bit.ly/tharang_projectexpo",
        general: [['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 37,
        title: "School Exhibition",
        img: img37,
        category: '#application',
        desc:"The contest is open to all schools students up to high school and higher secondary students in Kerala. With the theme:'Science, Youth, Leadership",
        link:"http://bit.ly/tharang_exhibition",
        general: [['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 36,
        title: "QUEEN'S GAMBIT",
        img: img36,
        category: '#competition',
        desc:"IHRD Tharang is enlivened to bring up your brilliance to the table. The potent weapon that develops curiosity & confidence! Checkmate the opponent's king by placing it under an inescapable threat of capture.",
        link:"https://konfhub.com/queens-gambit?utm_source=tharangweb",
        general: [['prize', '₹10000'], ['fee', '₹80'], ['available', 'Open']]
    },
    {
        id: 35,
        title: 'CENTER-A-DIV',
        img: img35,
        category: '#competition',
        desc:"Show off your CSS skills and win big prizes! coz IHRD Tharang brings you Centre-A-Div competition.Put your ability to read and interpret code, recognize specific elements, and center divs to the test!  PASS the expectations, SET the standards and KILL the competition.",
        link:"https://konfhub.com/center-a-div?utm_source=tharangweb",
        general: [['prize', '₹5000'], ['fee', 'Free'], ['available', 'Open']]
    },
    {
        id: 34,
        title: 'KEY MISMASH',
        img: img34,
        category: '#competition',
        desc:"Step into the realm of Key Mismash, a game that tests your keyboard mastery!.With a QWERTY design that's been cleverly rearranged,this challenge is no walk in the park. Prove your proficiency and join us for a thrilling round of Key Mismash, where the competition never ceases!",
        link:"https://konfhub.com/key-mismash?utm_source=tharangweb",
        general: [['prize', '₹8000'], ['fee', '₹80'], ['available', 'Open']]
    },
    {
        id: 33,
        title: 'Ethical Hacking',
        img: img33,
        category: '#workshop',
        desc:"Ready to explore the fascinating world of ethical hacking, and what it can do for you?.IHRD THARANG is here with a Workshop on \"Ethical Hacking\", where you'll learn the basics of ethical hacking, including the different security tools used, and how to stay safe online.",
        link:"https://konfhub.com/Ethicalhacking?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹650'], ['available', 'Open']]
    },
    {
        id: 32,
        title: 'Web Development',
        img: img32,
        category: '#workshop',
        desc:"The popularity of web development has peaked since the pandemic. But even before all of that, we dreamed of building our websites. Well, here is your long-awaited chance to make that dream come true!.IHRD Tharang cordially invites all the dreamers to the informative Web Development workshop held by Revertech. Do bring your laptop.",
        link:"https://konfhub.com/Webdevelopment?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']]
    },
    {
        id: 31,
        title: 'Structural Engineering and Structural Analysis',
        img: img31,
        category: '#workshop',
        desc:"Ready to explore the basics of Structural Engineering and Structural Analysis? Then this is your chance to discover new methods and technologies!.IHRD THARANG is here with a workshop on \"Structural Engineering and Structural Analysis\" where you'll learn new techniques, broaden your knowledge and get valuable insight from experienced professionals.",
        link:"https://konfhub.com/StructrualEngineering?utm_source=tharangweb",
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']]
    },
    {
        id: 30,
        title: 'MATLAB',
        img: img30,
        category: '#workshop',
        desc:"Are you thrilled about delving into the realm of technical computing and problem-solving?.Then, IHRD THARANG, in collaboration with Revertech, presents you with a workshop on \"MATLAB\",a programming platform used by engineers and scientists worldwide. At this workshop, you will learn about MATLAB, which has endless applications in the fields of data analysis, machine learning, and many more.",
        link:"https://konfhub.com/MATLAB?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹300'], ['available', 'Open']]
    },
    {
        id: 29,
        title: 'Legged Robotics',
        img: img29,
        category: '#workshop',
        desc:"IHRD Tharang is ecstatic to conduct its workshop on Legged Robotics, an exciting field of robotics that can unlock a world of possibilities. Come discover the possibilities of this fascinating field, unleash your creativity and ingenuity to build your unique robots, and explore the wonders that legged robotics has to offer.",
        link:"https://konfhub.com/LeggedRobotics?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']]
    },
    {
        id: 28,
        title: 'Data Mining',
        img: img28,
        category: '#workshop',
        desc:"Data Mining is an interactive Python programming workshop for absolute beginners that don't anticipate you to memorize coding the \"conventional\" way or have any earlier information.The workshop covers the core python language and the standard library in detail along with an introduction to Scrapy. Learners will gain the working knowledge needed to start programming, debugging and using Python in everyday tasks.",
        link:"https://konfhub.com/DataMining?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']]
    },
    {
        id: 27,
        title: 'BMW',
        img: img27,
        category: '#workshop',
        desc:"Rev your engines, fuel your passion and get ready to race toward the cutting edge of automotive design with BMW.IHRD Tharang is thrilled to organize its workshop on BMW. This is your chance to learn, explore and experience the power and passion of BMW design.",
        link:"https://konfhub.com/BMWDesign?utm_source=tharangweb",
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']]
    },
    {
        id: 26,
        title: 'AUTOCAD',
        img: img26,
        category: '#workshop',
        desc:"Intending to provide young technical minds a deep insight into the world of AUTOCAD, IHRD THARANG'23 in association with the College of Engineering Chengannur is hosting a workshop on \"AUTOCAD\".",
        link:"https://konfhub.com/AutoCAD?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']]
    },
    {
        id: 25,
        title: 'Robotic Operating System',
        img: img25,
        category: '#workshop',
        desc:"Are you interested in exploring the world of robotics and pushing the boundaries of innovation? If so, then this is the perfect workshop for you! IHRD THARANG is here with a workshop on Robotic Operating System, which is designed to give you in-depth knowledge and understanding of ROS, a powerful set of tools for robot development.",
        link:"https://konfhub.com/ros-tharang?utm_source=tharangweb",
        general: [['fee', '₹500'], ['available', 'Open']]
    },
    {
        id: 24,
        title: 'PYTHON',
        img: img24,
        category: '#workshop',
        desc:"Coding is the present and the future. Here is an opportunity for you to learn PYTHON, one of the most widely used programming languages in the current tech industriesIHRD Tharang hosted by the College Of Engineering Chengannur, is ecstatic to present you to the Python workshop conducted by Revertech.",
        link:"https://konfhub.com/Pythonschool?utm_source=tharangweb",
        general: [['fee', '₹250'], ['available', 'Open']]
    },
    {
        id: 23,
        title: 'Origami',
        img: img23,
        category: '#workshop',
        desc:"Are you looking for a creative outlet to express your artistic side & dazzle us with your skillful folding and intricate designs? Come join us for the IHRD THARANG Origami Workshop & learn how to create impressive origami designs from simple sheets of paper",
        link:"https://konfhub.com/origami-tharang?utm_source=tharangweb",
        general: [['fee', '₹150'], ['available', 'Open']]
    },
    {
        id: 22,
        title: 'Quantum Computing',
        img: img22,
        category: '#workshop',
        desc:"IHRD Tharang is excited to provide a workshop on Quantum Computing that covers the architecture, hardware, software, design, and types to comprehend the full potential of quantum computing. ",
        link:"https://konfhub.com/QuantumComputing?utm_source=tharangweb",
        general: [['points', '60'], ['fee', '₹1000'], ['available', 'Open']]
    },
    {
        id: 21,
        title:'Factory Automation with Siemens TIA',
        img: img21,
        category: '#workshop',
        desc:"IHRD Tharang cordially welcomes you to join an informative workshop on Factory Automation with Siemens TIA to learn and expand your knowledge. This workshop will be conducted by Industrus Tech.",
        link:"https://konfhub.com/Siemenssoftware-tharang?utm_source=tharangweb",
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
        general: [['points', '40'], ['fee', '₹500'], ['available', 'Open']],
    },
    {
        id: 18,
        title: 'Data Science',
        img: img18,
        category: '#workshop',
        desc:"As data is the new oil and data science is the new refinery, IHRD THARANG, in partnership with Pacelab, presents a Data Science workshop to help you understand the quickly developing field that involves using statistical and computational techniques to extract insights and knowledge from data, with applications in finance, healthcare, technology, and marketing.",
        link:"https://konfhub.com/ds-tharang?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹400'], ['available', 'Open']],
    },
    {
        id: 17,
        title: 'Cloud Computing',
        img: img17,
        category: '#workshop',
        desc:"IHRD Tharang is here with a one-day workshop on Cloud Computing by Pacelab that provides an in-depth understanding of the components and infrastructure of the cloud, the benefits and future of cloud computing, the deployment of services, and assessing security risks.",
        link:"https://konfhub.com/cc-tharang?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']],
    },
    {
        id: 16,
        title: 'Flutter',
        img: img16,
        category: '#workshop',
        desc:"As new technologies emerge, it begins to transform the world around us in its own subtle ways. One such instance is where App Making has transitioned into an art form that embodies the artistic traits and the technical prowess of the creator.To cut to the chase, a workshop will be held by Pacelab on Flutter and its many utilities as a part of IHRD THARANG. ",
        link:"https://konfhub.com/flutter-tharang?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']],
    },
    {
        id: 15,
        title: 'Deep Fake',
        img: img15,
        category: '#workshop',
        desc:"Are you interested in learning about the latest technology in the field of Artificial Intelligence (AI)? Deepfake technology, a category of synthetic media that is intended to look authentic but is produced by a computer, was made possible in large part thanks to AI.As part of IHRD Tharang, we warmly welcome each one of you to the Deepfake Workshop by Pacelab.",
        link:"https://konfhub.com/df-tharang?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹500'], ['available', 'Open']],
    },
    {
        id: 14,
        title: 'PCB Designing',
        img: img14,
        category: '#workshop',
        desc:"Dwelling in the digital era, humankind is constantly evolving in terms of technology. The intervention of the electronics sector in our everyday lives is getting massive.IHRD Tharang, in association with Octgaon Technologies,  is here with an apprising workshop on PCBs.",
        link:"https://konfhub.com/pcb-tharang?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹350'], ['available', 'Open']],
    },
    {
        id: 13,
        title: 'GitHub',
        img: img13,
        category: '#workshop',
        desc:"IHRD Tharang is delighted to bring to you a GitHub Workshop hosted by the College of Engineering Chengannur. The session will be handled by Mr. Alwin John, GitHub Campus Expert.",
        link:"https://konfhub.com/github-tharang?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹400'], ['available', 'Open']],
    },
    {
        id: 12,
        title: 'PLC and SCADA',
        img: img12,
        category: '#workshop',
        desc:"The safe and efficient operation of industrial processes relies heavily on PLCs and SCADA systems.IHRD Tharang  is delighted to invite you to a workshop on PLC and SCADA conducted by Pacelab.  ",
        link:"https://konfhub.com/plcscada-tharang?utm_source=tharangweb",
        general: [['points', '40'], ['fee', '₹450'], ['available', 'Open']],
    },
    {
        id: 11,
        title: 'Self-driving using AI',
        img: img11,
        category: '#workshop',
        desc:"The advent of artificial intelligence has led to a groundbreaking technological innovation- self-driving cars. Today, self-driving cars which were once only an ambitious idea is a reality. Several AI-related technologies such as deep learning and computer vision have contributed to this development.IHRD Tharang, in association with Pacelab, is bringing you a Self-driving using AI workshop. ",
        link:"https://konfhub.com/SelfDrivingAI-tharang?utm_source=tharangweb",
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
        general: [['prize', '10,000'], ['fee', '₹299 (Team)'], ['available', 'Open']],
    },
    {
        id: 8,
        title: 'SHOTS TO SHORT',
        img: img8,
        category: '#competition',
        desc:"IHRD Tharang  is here with a Short Film Competition on the topic \"Sustainable Tourism\".This competition is your chance to share your vision for a better future & inspire change through the power of film! Grab your camera, let your creativity run wild & your artistic talent gleam!",
        link:"https://konfhub.com/Sfc-tharang?utm_source=tharangweb",
        general: [['prize', '10,000'], ['fee', '₹250 (Team)'], ['available', 'Open']],
    },
    {
        id: 7,
        title: 'CONQUEROR',
        img: img6,
        category: '#hackathons',
        desc:"🚀 Get ready for CONQUEROR, the ultimate 12 hour hackathon by IHRD Tharang focused on tackling the biggest health issues faced by the society today! Teams will have the opportunity to build a prototype app, website, or software to showcase their innovative solutions. The best and brightest minds will come together to conquer the challenges facing the health sector, and emerge victorious as true CONQUERORS.",
        link:"https://konfhub.com/conqueror?utm_source=tharangweb",
        general: [['prize', '20,000'], ['fee', '₹399 (Team)'], ['available', 'Open']],
    },
    {
        id: 3,
        title: 'SURVIVAL OF FITTEST',
        img: img4,
        category: '#competition',
        desc:"Are you ready to put your engineering skills to the test and prove your mettle? Gather your toolkit & get your thinking cap on, coz a thrilling competition is coming your way! IHRD Tharang presents Survival Of The Fittest, an exciting event filled with challenges and tasks that will put your skills to the ultimate test. The event includes three rounds, and students can choose between two baskets",
        link:"http://konfhub.com/survival-of-fittest-tharang?utm_source=tharangweb",
        general: [['prize', '8,600'], ['fee', '₹150 (Team)'], ['available', 'Open']],
    },
    {
        id: 2,
        title: 'Vezeto',
        img: img5,
        category: '#conclaves',
        desc:"IHRD THARANG is ecstatic to present you VEZETO, an idea-pitching competition under the III Conclave. Throughout the event, Google experts will lead sessions on innovation and entrepreneurship, culminating in a task for qualified students to present their pitch decks. Vezeto aims to provide the necessary mentorship and resources to students to pull a perfect pitch deck. TEAM Eligibility: Students of classes 11 and 12, Polytechnical, ITI, Arts & Science, Applied Science and Engineering students are eligible for the event.",
        link:"https://konfhub.com/vezeto-tharang?utm_source=tharangweb",
        general: [['prize', '25,000'], ['fee', '₹400 (Team)'], ['available', 'Open']],
    },
    {
        id: 1,
        title: 'AUXPO',
        img: img7,
        category: '#conclaves',
        desc:"IHRD Tharang is elated to host AUXPO, a mock IPL auction under the III Conclave. The event comprises a preliminary stage in which the participants must complete certain tasks to qualify for the mega mock auction. The top three teams will be awarded a cash prize of Rs. 15000/- and a Course package: Start-up Idea to Scaling (constituting of courses on Product, Marketing, Revenue & Funding totally worth Rs 5,400) from Markoknow for free.",
        link:"https://konfhub.com/auxpo-tharang?utm_source=tharangweb",
        general: [['prize', '15,000'], ['fee', '₹500 (Team)'], ['available', 'Open']],
    },
    {
        id: 6,
        title: 'Road to Glory',
        img: img2,
        category: '#game',
        desc:"Blades of grass flying with every kick, a quick and loud heartbeat, and an irresistible desire for triumph define both gamers and sportsmen. Rekindle your football passion and prepare your teams for the highly anticipated eFootball tournament. IHRD Tharang warmly invites each one of you to the first edition of eFootball - Road to Glory. So what are you waiting for? Coin your teams and get ready to compete and showcase your skills on the virtual pitch. ⚽",
        link:"https://konfhub.com/road-to-glory?utm_source=tharangweb",
        general: [['prize', '5,000'], ['fee', '₹25'], ['available', 'Closed']],
    },
    {
        id: 5,
        title: 'RESURENZE',
        img: img1,
        category: '#game',
        desc:"Excited about online tactical battle shooter games? Then brace for an exhilarating Valorant showdown - a team-based tactical PVP where your shooting skills, strategy, and team spirit are put to the test. So, don your finest attire and arm yourself with cunning and wit, for the battle of wits is about to begin. Assemble your squad and get ready for a pulse-pounding showdown as IHRD Tharang presents the first edition of RESURENZE. 🔴 Note : A team must have 5 members.",
        link:"http://konfhub.com/resurenze-tharang?utm_source=tharangweb",
        general: [['prize', '8,000'], ['fee', '₹250 (Team)'], ['available', 'Closed']],
    },
    {
        id: 4,
        title: 'COMPCOD',
        img: img3,
        category: '#game',
        desc:"Attention all gaming maniacs! 🎮 Load, Aim, and Fire! It's COD season, and what better time to join the ranks of the elite and put your talents to the test in the adrenaline-fueled bouts of Call of Duty Mobile. IHRD Tharang presents to you COMPCOD. Get ready to battle along with your comrades in the world of Call Of Duty. Show off your skills and dominate the battleground.",
        link:"https://konfhub.com/call-of-duty-tharang?utm_source=tharangweb",
        general: [['prize', '3,000'], ['fee', '₹100 (Team)'], ['available', 'Closed']],
    },
    
]

export default dataProject;
