import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo";
import RedirectPage from "./RedirectPage";
// import ComingSoon from "./ComingSoon";
import Community from "./Community";
import FAQ from "./FAQ";
import Page404 from "./404";
import RoadMapOne from "./RoadMapOne";
import RoadMapTwo from "./RoadMapTwo";
import NftItem from "./NftItem";
import NftItemDetails from "./NftItemDetails";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import TeamDetail from "./TeamDetail";


const routes = [
  { path: '/', component: <HomeOne />},
  { path: '/events', component: <NftItem />},
  { path: '/event-details/:id', component: <NftItemDetails />},
  { path: '/contact', component: <Contact />},

  //external redirect to other website with new tab
  { path: '/arcade', component: <RedirectPage url="https://s3.us-west-2.amazonaws.com/arcadev1.0.0/Arcade_v1.0.5/index.html" />},

  // { path: '/', component: <ComingSoon />},
  // { path: '/home-v2', component: <HomeTwo />},
  // { path: '/home-v3', component: <HomeThree />},
  // { path: '/about-v1', component: <AboutOne />},
  // { path: '/about-v2', component: <AboutTwo />},
  // { path: '/coming-soon', component: <ComingSoon />},
  { path: '/about', component: <Community />},
  { path: '/faq', component: <FAQ />},
  { path: '/404', component: <Page404 />},
  { path: '/road-map-v1', component: <RoadMapOne />},
  { path: '/road-map-v2', component: <RoadMapTwo />},
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/team-details', component: <TeamDetail />},

]

export default routes;