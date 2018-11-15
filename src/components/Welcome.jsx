import React from 'react'
import logoBig from '../assets/images/dota_logo.png'
import Download from './Download'

function Welcome() {
  return(
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SmnqsdeHFT0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <img src={logoBig}/>
      <h1>"A MODERN MULTIPLAYER MASTERPIECE"</h1>
      <h4>–DESTRUCTOID</h4>
      <Download/>
    </div>
  )

}

export default Welcome