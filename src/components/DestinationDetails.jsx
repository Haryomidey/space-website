
const DestinationDatas = ({ BackgroundImage, showMoonDetails, showMarsDetails, showEuropaDetails, showTitanDetails, data, cardIndex }) => {
 
  return (
    <>
      { data[cardIndex].map(item => (
        <section className="destination" style={{backgroundImage: `url(${BackgroundImage})`}} key = {item.name}>
          <aside>
            <p>01<span>PICK YOUR DESTINATION</span></p>
            <div className='image-container'>
              <img src={item.image.png} alt={item.name} />
            </div>
          </aside>
          <main>
            <ul>
              <li onClick = {showMoonDetails}>MOON</li>
              <li onClick = {showMarsDetails}>MARS</li>
              <li onClick = {showEuropaDetails}>EUROPA</li>
              <li onClick = {showTitanDetails}>TITAN</li>
            </ul>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className='below-border'>
              <div className='section-one'>
                <h2>AVG. DISTANCE</h2>
                <h1>{item.distance}</h1>
              </div>
              <div className='section-two'>
                <h2>EST. TRAVEL TIME</h2>
                <h1>{item.travel}</h1>
              </div>
            </div>
          </main>
        </section>
        ))
      }
    </>
  )
}

export default DestinationDatas;
