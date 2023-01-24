import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo";
import RedirectPage from "./RedirectPage";
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
import PreEvents from "./PreEvents";
import GalleryPage from "./GalleryPage";
import DownloadsPage from "./DownloadsPage";
import Guidelines from "./Guidelines";

const routes = [
  { path: '/', component: <HomeOne />},
  { path: '/events', component: <NftItem />},
  { path: '/event-details/:id', component: <NftItemDetails />},
  { path: '/contact', component: <Contact />},
  { path: '/pre-events', component: <PreEvents/>},
  //external redirect to other website with new tab
  { path: '/arcade', component: <RedirectPage url="https://s3.us-west-2.amazonaws.com/arcadev1.0.0/Arcade_v1.0.5/index.html" />},
  { path: '/register', component: <RedirectPage url="http://min.lc/NOsvJ" />},
  { path: '/company-list', component: <RedirectPage url="http://min.lc/job-fair-company-list" />},
  { path: '/fba', component: <RedirectPage url="https://konfhub.com/accomodationboys-tharangtechfest" />},
  { path: '/fga', component: <RedirectPage url="https://konfhub.com/Accomodationgirls-tharangtechfest" />},
  { path: '/steps-job-fair', component: <RedirectPage url="https://docs.google.com/document/d/1bf-9xS8Hqx-Lx-N_v2ixnMwRkl_xUw5z_S-omLjD_HY/edit?usp=drivesdk" />},
  {path: '/gallery', component:<GalleryPage/>},
  {path: '/download', component:<DownloadsPage/>},
  {path: '/guidelines', component:<Guidelines/>},
  { path: '/about', component: <Community />},
  { path: '/faq', component: <FAQ />},
  { path: '/404', component: <Page404 />},
  { path: '/road-map-v1', component: <RoadMapOne />},
  { path: '/road-map-v2', component: <RoadMapTwo />},
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/team-details/:id', component: <TeamDetail />},

]

export default routes;