import BackgroundImage from '../images/background-destination-desktop.jpg';
import '../styles/destination.css';

import DestinationDetails from './DestinationDetails';

import Data from '../DestinationData.js';
import { useState } from 'react';

const Destination = () => {

  const [isMoonClicked, setIsMoonClicked] = useState(false);
  const [isMarsClicked, setIsMarsClicked] = useState(true);
  const [isEuropaClicked, setIsEuropaClicked] = useState(false);
  const [isTitanClicked, setIsTitanClicked] = useState(false);

  const showMoonDetails = () => {
    setIsMoonClicked(true)
    setIsMarsClicked(false)
    setIsEuropaClicked(false)
    setIsTitanClicked(false)
  }

   const showMarsDetails = () => {
    setIsMoonClicked(false)
    setIsMarsClicked(true)
    setIsEuropaClicked(false)
    setIsTitanClicked(false)
  }

   const showEuropaDetails = () => {
    setIsMoonClicked(false)
    setIsMarsClicked(false)
    setIsEuropaClicked(true)
    setIsTitanClicked(false)
  }

   const showTitanDetails = () => {
    setIsMoonClicked(false)
    setIsMarsClicked(false)
    setIsEuropaClicked(false)
    setIsTitanClicked(true)
  }


  return (
    <>
      {isMoonClicked && <DestinationDetails BackgroundImage={BackgroundImage}  data = {Data} showMoonDetails = {showMoonDetails} showMarsDetails = {showMarsDetails} showEuropaDetails = {showEuropaDetails} showTitanDetails = {showTitanDetails} cardIndex = {0} />}
      {isMarsClicked && <DestinationDetails BackgroundImage={BackgroundImage} data = {Data} showMoonDetails = {showMoonDetails} showMarsDetails = {showMarsDetails} showEuropaDetails = {showEuropaDetails} showTitanDetails = {showTitanDetails} cardIndex = {1} />}
      {isEuropaClicked && <DestinationDetails BackgroundImage={BackgroundImage} data = {Data} showMoonDetails = {showMoonDetails} showMarsDetails = {showMarsDetails} showEuropaDetails = {showEuropaDetails} showTitanDetails = {showTitanDetails} cardIndex = {2} />}
      {isTitanClicked && <DestinationDetails BackgroundImage={BackgroundImage} data = {Data} showMoonDetails = {showMoonDetails} showMarsDetails = {showMarsDetails} showEuropaDetails = {showEuropaDetails} showTitanDetails = {showTitanDetails} cardIndex = {3} />}
    </>
  )
}

export default Destination;
