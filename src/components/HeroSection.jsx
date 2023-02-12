import '../styles/hero-section.css';
import BackgroundImageDesktop from '../images/background-home-desktop.jpg';


const HeroSection = () => {
  return (
    <section className='hero-section' style={{ backgroundImage: `url(${BackgroundImageDesktop})` }}>
      <main className='hero-section-main'>
        <h2>So, you want to travel to</h2>
        <h1>Space</h1>
        <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </main>
      <aside>
        <div className='explore'>
            <p>EXPLORE</p>
        </div>
      </aside>
    </section>
  )
}

export default HeroSection;
