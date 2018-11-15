import React from 'react'
import logoBig from '../assets/images/dota_logo.png'
import Download from './Download'
import background from '../assets/images/background.jpg'

function Welcome() {
  return(
    <div style={{backgroundImage: `url(${background})`}}>
      <style jsx>{`
      div {
        text-align: center;
        padding-top: 2em;
      }
      `}</style>
      <iframe width="1120" height="630" src="https://www.youtube.com/embed/SmnqsdeHFT0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>
      <img src={logoBig}/>
      <h1>"A MODERN MULTIPLAYER MASTERPIECE"</h1>
      <h3>–DESTRUCTOID</h3>
      <Download/>
    </div>
  )

}

export default Welcome