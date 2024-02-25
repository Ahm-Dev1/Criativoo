import './App.css';


//Components
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Services from './Components/Services';
import History from './Components/History';
import LatestProjects from './Components/LatestProjects';
import Partners from './Components/Partners';
import ChooseUs from './Components/ChooseUs';
import OurTeam from './Components/OurTeam';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import OurBlog from './Components/OurBlog';
import GetInTouch from './Components/GetInTouch';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Services/>
      <AboutUs/>
      <History/>
      <LatestProjects/>
      <Partners/>
      <ChooseUs/>
      <OurTeam/>
      <Portfolio/>
      <Testimonials/>
      <OurBlog/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
