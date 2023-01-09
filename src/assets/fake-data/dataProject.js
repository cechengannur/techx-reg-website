
import { region } from 'caniuse-lite';
import { Link } from 'react-router-dom';
import img9 from '../images/common/comp-radiant.jpeg'
import img10 from '../images/common/work-vr.jpeg'
import img11 from '../images/common/work-ai.jpeg'
import img12 from '../images/common/work-plc.jpeg'
import img13 from '../images/common/work-git.jpeg'
import img14 from '../images/common/work-pcb.jpeg'
import img15 from '../images/common/work-deep.jpeg'
import img16 from '../images/common/work-flutter.jpeg'
import img17 from '../images/common/work-cloud.jpeg'
import img18 from '../images/common/work-ds.jpeg'
import img19 from '../images/common/work-ar.jpeg'

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
        id: 19,
        title: 'AR & Game Development',
        img: img19,
        category: '#workshop',
        desc:"In the present day, it is perceived that the boundary between the virtual world and the real one is a bit of a blur.To explore and learn more about this novelty, Pacelab will be holding a workshop on AR & Game Development as a part of IHRD THARANG.",
        link:"https://konfhub.com/aagd-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹500",
        available:"Open"
    },
    {
        id: 18,
        title: 'Data Science',
        img: img18,
        category: '#workshop',
        desc:"As data is the new oil and data science is the new refinery, IHRD THARANG, in partnership with Pacelab, presents a Data Science workshop to help you understand the quickly developing field that involves using statistical and computational techniques to extract insights and knowledge from data, with applications in finance, healthcare, technology, and marketing.",
        link:"https://konfhub.com/ds-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹400",
        available:"Open"
    },
    {
        id: 17,
        title: 'Cloud Computing',
        img: img17,
        category: '#workshop',
        desc:"IHRD Tharang is here with a one-day workshop on Cloud Computing by Pacelab that provides an in-depth understanding of the components and infrastructure of the cloud, the benefits and future of cloud computing, the deployment of services, and assessing security risks.",
        link:"https://konfhub.com/cc-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹450",
        available:"Open"
    },
    {
        id: 16,
        title: 'Flutter',
        img: img16,
        category: '#workshop',
        desc:"As new technologies emerge, it begins to transform the world around us in its own subtle ways. One such instance is where App Making has transitioned into an art form that embodies the artistic traits and the technical prowess of the creator.To cut to the chase, a workshop will be held by Pacelab on Flutter and its many utilities as a part of IHRD THARANG. ",
        link:"https://konfhub.com/flutter-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹350",
        available:"Open"
    },
    {
        id: 15,
        title: 'Deep Fake',
        img: img15,
        category: '#workshop',
        desc:"Are you interested in learning about the latest technology in the field of Artificial Intelligence (AI)? Deepfake technology, a category of synthetic media that is intended to look authentic but is produced by a computer, was made possible in large part thanks to AI.As part of IHRD Tharang, we warmly welcome each one of you to the Deepfake Workshop by Pacelab.",
        link:"https://konfhub.com/df-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹500",
        available:"Open"
    },
    {
        id: 14,
        title: 'PCB Designing',
        img: img14,
        category: '#workshop',
        desc:"Dwelling in the digital era, humankind is constantly evolving in terms of technology. The intervention of the electronics sector in our everyday lives is getting massive.IHRD Tharang, in association with Octgaon Technologies,  is here with an apprising workshop on PCBs.",
        link:"https://konfhub.com/pcb-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹350",
        available:"Open"
    },
    {
        id: 13,
        title: 'GitHub',
        img: img13,
        category: '#workshop',
        desc:"IHRD Tharang is delighted to bring to you a GitHub Workshop hosted by the College of Engineering Chengannur. The session will be handled by Mr. Alwin John, GitHub Campus Expert.",
        link:"https://konfhub.com/github-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹400",
        available:"Open"
    },
    {
        id: 12,
        title: 'PLC and SCADA',
        img: img12,
        category: '#workshop',
        desc:"The safe and efficient operation of industrial processes relies heavily on PLCs and SCADA systems.IHRD Tharang  is delighted to invite you to a workshop on PLC and SCADA conducted by Pacelab.  ",
        link:"https://konfhub.com/plcscada-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹450",
        available:"Open"
    },
    {
        id: 11,
        title: 'Self-driving using AI',
        img: img11,
        category: '#workshop',
        desc:"The advent of artificial intelligence has led to a groundbreaking technological innovation- self-driving cars. Today, self-driving cars which were once only an ambitious idea is a reality. Several AI-related technologies such as deep learning and computer vision have contributed to this development.IHRD Tharang, in association with Pacelab, is bringing you a Self-driving using AI workshop. ",
        link:"https://konfhub.com/SelfDrivingAI-tharang?utm_source=tharangweb",
        prize:"NA",
        fee:"₹600",
        available:"Open"
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
        desc:"Creativity awaits!! Looking for a chance to stand out and show off your unique design style? Then this is the chance to let your artistic side shine!.Introducing Radiant by IHRD Tharang- the ultimate online UI/UX designathon. ",
        link:"https://konfhub.com/radiant-thrng?utm_source=tharangweb",
        prize:"₹10,000",
        fee:"₹299 (Team)",
        available:"Open"
    },
    {
        id: 8,
        title: 'SHOTS TO SHORT',
        img: img8,
        category: '#competition',
        desc:"IHRD Tharang  is here with a Short Film Competition on the topic \"Sustainable Tourism\".This competition is your chance to share your vision for a better future & inspire change through the power of film! Grab your camera, let your creativity run wild & your artistic talent gleam!",
        link:"https://konfhub.com/Sfc-tharang?utm_source=tharangweb",
        prize:"₹10,000",
        fee:"₹250",
        available:"Open"
    },
    {
        id: 7,
        title: 'CONQUEROR',
        img: img6,
        category: '#hackathons',
        desc:"🚀 Get ready for CONQUEROR, the ultimate 12 hour hackathon by IHRD Tharang focused on tackling the biggest health issues faced by the society today! Teams will have the opportunity to build a prototype app, website, or software to showcase their innovative solutions. The best and brightest minds will come together to conquer the challenges facing the health sector, and emerge victorious as true CONQUERORS.",
        link:"https://konfhub.com/conqueror?utm_source=tharangweb",
        prize:"₹20,000",
        fee:"₹399 (Team)",
        available:"Open"
    },
    {
        id: 6,
        title: 'Road to Glory',
        img: img2,
        category: '#game',
        desc:"Blades of grass flying with every kick, a quick and loud heartbeat, and an irresistible desire for triumph define both gamers and sportsmen. Rekindle your football passion and prepare your teams for the highly anticipated eFootball tournament. IHRD Tharang warmly invites each one of you to the first edition of eFootball - Road to Glory. So what are you waiting for? Coin your teams and get ready to compete and showcase your skills on the virtual pitch. ⚽",
        link:"https://konfhub.com/road-to-glory?utm_source=tharangweb",
        prize:"₹5000",
        fee:"₹25",
        available:"Open"
    },
    {
        id: 5,
        title: 'RESURENZE',
        img: img1,
        category: '#game',
        desc:"Excited about online tactical battle shooter games? Then brace for an exhilarating Valorant showdown - a team-based tactical PVP where your shooting skills, strategy, and team spirit are put to the test. So, don your finest attire and arm yourself with cunning and wit, for the battle of wits is about to begin. Assemble your squad and get ready for a pulse-pounding showdown as IHRD Tharang presents the first edition of RESURENZE. 🔴 Note : A team must have 5 members.",
        link:"http://konfhub.com/resurenze-tharang?utm_source=tharangweb",
        prize:"₹8000",
        fee:"₹250 (Team)",
        available:"Open"
    },
    {
        id: 4,
        title: 'COMPCOD',
        img: img3,
        category: '#game',
        desc:"Attention all gaming maniacs! 🎮 Load, Aim, and Fire! It's COD season, and what better time to join the ranks of the elite and put your talents to the test in the adrenaline-fueled bouts of Call of Duty Mobile. IHRD Tharang presents to you COMPCOD. Get ready to battle along with your comrades in the world of Call Of Duty. Show off your skills and dominate the battleground.",
        link:"https://konfhub.com/call-of-duty-tharang?utm_source=tharangweb",
        prize:"₹3000",
        fee:"₹100 (Team)",
        available:"Open"
    },
    {
        id: 3,
        title: 'SURVIVAL OF FITTEST',
        img: img4,
        category: '#competition',
        desc:"Are you ready to put your engineering skills to the test and prove your mettle? Gather your toolkit & get your thinking cap on, coz a thrilling competition is coming your way! IHRD Tharang presents Survival Of The Fittest, an exciting event filled with challenges and tasks that will put your skills to the ultimate test. The event includes three rounds, and students can choose between two baskets",
        link:"http://konfhub.com/survival-of-fittest-tharang?utm_source=tharangweb",
        prize:"₹8600",
        fee:"₹150 (Team)",
        available:"Open"
    },
    {
        id: 2,
        title: 'Vezeto',
        img: img5,
        category: '#conclaves',
        desc:"IHRD THARANG is ecstatic to present you VEZETO, an idea-pitching competition under the III Conclave. Throughout the event, Google experts will lead sessions on innovation and entrepreneurship, culminating in a task for qualified students to present their pitch decks. Vezeto aims to provide the necessary mentorship and resources to students to pull a perfect pitch deck. TEAM Eligibility: Students of classes 11 and 12, Polytechnical, ITI, Arts & Science, Applied Science and Engineering students are eligible for the event.",
        link:"https://konfhub.com/vezeto-tharang?utm_source=tharangweb",
        prize:"₹25,000",
        fee:"₹400 (Team)",
        available:"Open"
    },
    {
        id: 1,
        title: 'AUXPO',
        img: img7,
        category: '#conclaves',
        desc:"IHRD Tharang is elated to host AUXPO, a mock IPL auction under the III Conclave. The event comprises a preliminary stage in which the participants must complete certain tasks to qualify for the mega mock auction. The top three teams will be awarded a cash prize of Rs. 15000/- and a Course package: Start-up Idea to Scaling (constituting of courses on Product, Marketing, Revenue & Funding totally worth Rs 5,400) from Markoknow for free.",
        link:"https://konfhub.com/auxpo-tharang?utm_source=tharangweb",
        prize:"₹15,000",
        fee:"₹500 (Team)",
        available:"Open"
    }
]

export default dataProject;
