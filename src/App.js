import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = '/' element = {<HeroSection />} />
          <Route path = 'destination' element = {<Destination />} />
          <Route path = 'crew' element = {<Crew />} />
          <Route path = 'technology' element = {<Technology />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
