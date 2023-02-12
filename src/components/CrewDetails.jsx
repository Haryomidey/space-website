
import ImageOne from '../images/assets/crew/image-anousheh-ansari.png';

const CrewDetails = ({ BackgroundImage, isBtnOneActive, isBtnTwoActive, isBtnThreeActive, isBtnFourActive, handleFirstRoundBtn, handleSecondRoundBtn, handleThirdRoundBtn, handleFourthRoundBtn, data, cardIndex }) => {
    
    return (
        <>
            { data[cardIndex].map(item => (
            <section className="crew" style={{backgroundImage: `url(${BackgroundImage})`}} key = {item.name}>
                <main>
                    <p>02<span>MEET YOUR CREW</span></p>
                    <div className="crew-main-content">
                        <h2>{item.role}</h2>
                        <h1>{item.name}</h1>
                        <p>
                            {item.bio}
                        </p>
                        <div className="round-buttons">
                            <div className={isBtnOneActive ? "round-button active" : "round-button"} onClick={handleFirstRoundBtn}></div>
                            <div className={isBtnTwoActive ? "round-button active" : "round-button"} onClick={handleSecondRoundBtn}></div>
                            <div className={isBtnThreeActive ? "round-button active" : "round-button"} onClick={handleThirdRoundBtn}></div>
                            <div className={isBtnFourActive ? "round-button active" : "round-button"} onClick={handleFourthRoundBtn}></div>
                        </div>
                    </div>
                </main>
                <aside>
                    <img src = {item.images.png} />
                </aside>
            </section>
      ))}  
        </>
  )
}

export default CrewDetails;
