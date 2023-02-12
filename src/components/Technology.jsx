import TechnologyDetails from "./TechnologyDetails";
import '../styles/technology.css';
import TechnologyData from "../TechnologyData";
import { useState } from 'react';

const Technology = () => {

  const [isBtnOneActive, setIsBtnOneActive] = useState(true);
  const [isBtnTwoActive, setIsBtnTwoActive] = useState(false);
  const [isBtnThreeActive, setIsBtnThreeActive] = useState(false);

    const handleFirstRoundBtn = () => {
      setIsBtnOneActive(true)
      setIsBtnTwoActive(false)
      setIsBtnThreeActive(false)
    }

    const handleSecondRoundBtn = () => {
      setIsBtnOneActive(false)
      setIsBtnTwoActive(true)
      setIsBtnThreeActive(false)
    }

    const handleThirdRoundBtn = () => {
      setIsBtnOneActive(false)
      setIsBtnTwoActive(false)
      setIsBtnThreeActive(true)
    }

  return (
    <>
      {isBtnOneActive && <TechnologyDetails isBtnOneActive = {isBtnOneActive} handleFirstRoundBtn = {handleFirstRoundBtn} handleSecondRoundBtn ={handleSecondRoundBtn} handleThirdRoundBtn = {handleThirdRoundBtn} TechnologyData = {TechnologyData} cardIndex = {0} />}

      {isBtnTwoActive && <TechnologyDetails isBtnTwoActive = {isBtnTwoActive} handleFirstRoundBtn = {handleFirstRoundBtn} handleSecondRoundBtn ={handleSecondRoundBtn} handleThirdRoundBtn = {handleThirdRoundBtn} TechnologyData = {TechnologyData} cardIndex = {1} />}

      {isBtnThreeActive && <TechnologyDetails isBtnThreeActive = {isBtnThreeActive} handleFirstRoundBtn = {handleFirstRoundBtn} handleSecondRoundBtn ={handleSecondRoundBtn} handleThirdRoundBtn = {handleThirdRoundBtn} TechnologyData = {TechnologyData} cardIndex = {2} />}
    </>
  )
}

export default Technology;
