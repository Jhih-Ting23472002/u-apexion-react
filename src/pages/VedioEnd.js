import React,{ useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import './VedioEnd.css';
import {useHistory } from 'react-router-dom';

function VedioEnd() {

  function card() {
    history.push('/cart-complete')
  }
  const history = useHistory();
  setTimeout(card, 30200)

  return (
    <div className="video-end">
      <ReactPlayer url="./end.mp4" width="100%" height="100%" playing={true}/>
    </div>
  );
}

export default VedioEnd;
