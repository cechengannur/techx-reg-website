// import img1 from '../images/common/game-valorant.jpeg'
// import img2 from '../images/common/game-roadToGlory.jpeg'
// import img3 from '../images/common/game-compcod.jpeg'
// import img4 from '../images/common/comp-survival.jpeg'
// import img5 from '../images/common/con-veznto.jpeg'
// import img6 from '../images/common/hack-conquerer.jpeg'
// import img7 from '../images/common/con-auxpo.jpeg'
// import img8 from '../images/common/comp-shot.jpeg'
import { region } from 'caniuse-lite';
// import img4 from '../images/common/img4.jpg'
// import img5 from '../images/common/img5.jpg'
// import img6 from '../images/common/img6.jpg'
// import img7 from '../images/common/img7.jpg'
// import img9 from '../images/common/img9.jpg'
// import img10 from '../images/common/img10.jpg'
// import img11 from '../images/common/img11.jpg'
// import img12 from '../images/common/img12.jpg'
// import img13 from '../images/common/img13.jpg'
// import img14 from '../images/common/img14.jpg'
import { Link } from 'react-router-dom';
import img9 from '../images/common/comp-radiant.jpeg'




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
        id: 9,
        title: 'Radiant',
        img: img9,
        category: '#competition',
        desc:"Creativity awaits!! Looking for a chance to stand out and show off your unique design style? Then this is the chance to let your artistic side shine!.Introducing Radiant by IHRD Tharang- the ultimate online UI/UX designathon. ",
        link:"https://konfhub.com/radiant-thrng",
        prize:"₹10,000",
        fee:"₹399 (Team)",
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
        id: 1,
        title: 'AUXPO',
        img: img7,
        category: '#conclaves',
        desc:"IHRD Tharang is elated to host AUXPO, a mock IPL auction under the III Conclave. The event comprises a preliminary stage in which the participants must complete certain tasks to qualify for the mega mock auction. The top three teams will be awarded a cash prize of Rs. 15000/- and a Course package: Start-up Idea to Scaling (constituting of courses on Product, Marketing, Revenue & Funding totally worth Rs 5,400) from Markoknow for free.",
        link:"https://konfhub.com/auxpo-tharang?utm_source=tharangweb",
        prize:"₹15,000",
        fee:"₹500 (Team)",
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
    
    
    
    
    // {
    //     id: 4,
    //     title: 'CYBOX #04',
    //     img: img4,
    // },
    // {
    //     id: 5,
    //     title: 'CYBOX #05',
    //     img: img5,
    // },
    // {
    //     id: 6,
    //     title: 'CYBOX #06',
    //     img: img6,
    // },
    // {
    //     id: 7,
    //     title: 'CYBOX #07',
    //     img: img7,
    // },
    // {
    //     id: 8,
    //     title: 'CYBOX #08',
    //     img: img2,
    // },

    // {
    //     id: 9,
    //     title: 'CYBOX #09',
    //     img: img9,
    // },
    // {
    //     id: 10,
    //     title: 'CYBOX #10',
    //     img: img10,
    // },
    // {
    //     id: 11,
    //     title: 'CYBOX #11',
    //     img: img11,
    // },
    // {
    //     id: 12,
    //     title: 'CYBOX #12',
    //     img: img12,
    // },
    // {
    //     id: 13,
    //     title: 'CYBOX #13',
    //     img: img13,
    // },
    // {
    //     id: 14,
    //     title: 'CYBOX #14',
    //     img: img14,
    // },
    // {
    //     id: 15,
    //     title: 'CYBOX #15',
    //     img: img1,
    // },
    // {
    //     id: 16,
    //     title: 'CYBOX #16',
    //     img: img3,
    // },
    // {
    //     id: 17,
    //     title: 'CYBOX #01',
    //     img: img1,
    // },
    // {
    //     id: 18,
    //     title: 'CYBOX #02',
    //     img: img2,
    // },
    // {
    //     id: 19,
    //     title: 'CYBOX #03',
    //     img: img3,
    // },
    // {
    //     id: 20,
    //     title: 'CYBOX #04',
    //     img: img4,
    // },
    // {
    //     id: 21,
    //     title: 'CYBOX #05',
    //     img: img5,
    // },
    // {
    //     id: 22,
    //     title: 'CYBOX #06',
    //     img: img6,
    // },
    // {
    //     id: 23,
    //     title: 'CYBOX #07',
    //     img: img7,
    // },
    // {
    //     id: 24,
    //     title: 'CYBOX #08',
    //     img: img2,
    // },
]

export default dataProject;