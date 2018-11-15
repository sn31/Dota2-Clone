import React from 'react'
import logoBig from '../assets/images/dota_logo.png';
function Welcome() {
    return(
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SmnqsdeHFT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img src={logoBig}/>
        </div>
    );

}

export default Welcome