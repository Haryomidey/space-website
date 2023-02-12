import BackgroundImage from '../images/assets/technology/background-technology-desktop.jpg';
import ImageOne from '../images/assets/technology/image-launch-vehicle-landscape.jpg';

const TechnologyDetails = ({isBtnOneActive, isBtnTwoActive, isBtnThreeActive, handleFirstRoundBtn, handleSecondRoundBtn, handleThirdRoundBtn, TechnologyData, cardIndex}) => {
  return (
    <>
      {TechnologyData[cardIndex].map(item => (
        <section className="technology" style = {{backgroundImage: `url(${BackgroundImage})`}} key = {item.name}>
          <main>
            <p>03<span>SPACE LAUNCH 101</span></p>
            <div className='technology-details'>
                <ul className='number-section'>
                    <li className={isBtnOneActive ? 'number active' : 'number'} onClick={handleFirstRoundBtn}>1</li>
                    <li className={isBtnTwoActive ? 'number active' : 'number'} onClick={handleSecondRoundBtn}>2</li>
                    <li className={isBtnThreeActive ? 'number active' : 'number'} onClick={handleThirdRoundBtn}>3</li>
                </ul>
                <div className='text-section'>
                  <h2>THE TECHNOLOGY...</h2>
                  <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
          </main>
          <aside>
            <img src={item.images.landscape} />
          </aside>
    </section>
      ))
      }
    </>
  )
}

export default TechnologyDetails;
