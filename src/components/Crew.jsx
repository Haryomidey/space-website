import CrewDetails from "./CrewDetails";
import '../styles/crew.css';

import BackgroundImage from '../images/assets/crew/background-crew-desktop.jpg';
import CrewData from "../CrewData";

import { useState } from "react";

const Crew = () => {

  const [isBtnOneActive, setIsBtnOneActive] = useState(true);
    const [isBtnTwoActive, setIsBtnTwoActive] = useState(false);
    const [isBtnThreeActive, setIsBtnThreeActive] = useState(false);
    const [isBtnFourActive, setIsBtnFourActive] = useState(false);

    const handleFirstRoundBtn = () => {
        setIsBtnOneActive(true)
        setIsBtnTwoActive(false)
        setIsBtnThreeActive(false)
        setIsBtnFourActive(false)
    }

    const handleSecondRoundBtn = () => {
        setIsBtnOneActive(false)
        setIsBtnTwoActive(true)
        setIsBtnThreeActive(false)
        setIsBtnFourActive(false)
    }

    const handleThirdRoundBtn = () => {
        setIsBtnOneActive(false)
        setIsBtnTwoActive(false)
        setIsBtnThreeActive(true)
        setIsBtnFourActive(false)
    }

    const handleFourthRoundBtn = () => {
        setIsBtnOneActive(false)
        setIsBtnTwoActive(false)
        setIsBtnThreeActive(false)
        setIsBtnFourActive(true)

    }

  return (
    <>
      {isBtnOneActive && <CrewDetails BackgroundImage={BackgroundImage} isBtnOneActive = {isBtnOneActive} handleFirstRoundBtn={handleFirstRoundBtn} handleSecondRoundBtn={handleSecondRoundBtn} handleThirdRoundBtn={handleThirdRoundBtn} handleFourthRoundBtn={handleFourthRoundBtn} data={CrewData} cardIndex = {0} />}
      
      {isBtnTwoActive && <CrewDetails BackgroundImage={BackgroundImage} isBtnTwoActive = {isBtnTwoActive} handleFirstRoundBtn={handleFirstRoundBtn} handleSecondRoundBtn={handleSecondRoundBtn} handleThirdRoundBtn={handleThirdRoundBtn} handleFourthRoundBtn={handleFourthRoundBtn} data={CrewData} cardIndex = {1} />}
      
      {isBtnThreeActive && <CrewDetails BackgroundImage={BackgroundImage} isBtnThreeActive = {isBtnThreeActive} handleFirstRoundBtn={handleFirstRoundBtn} handleSecondRoundBtn={handleSecondRoundBtn} handleThirdRoundBtn={handleThirdRoundBtn} handleFourthRoundBtn={handleFourthRoundBtn} data={CrewData} cardIndex = {2} />}
      
      {isBtnFourActive && <CrewDetails BackgroundImage = {BackgroundImage} isBtnFourActive = {isBtnFourActive} handleFirstRoundBtn = {handleFirstRoundBtn} handleSecondRoundBtn = {handleSecondRoundBtn} handleThirdRoundBtn = {handleThirdRoundBtn} handleFourthRoundBtn = {handleFourthRoundBtn} data = {CrewData} cardIndex = {3} />}
    </>
  )
}

export default Crew;
