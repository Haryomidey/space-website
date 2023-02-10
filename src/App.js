import Navbar from './components/Navbar';
import BackgroundImageDesktop from './images/background-home-desktop.jpg';
const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${BackgroundImageDesktop})` }}>
      <Navbar />
    </div>
  );
}

export default App;
