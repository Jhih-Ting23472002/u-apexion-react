import React from 'react';
import ReactPlayer from 'react-player';
import './VedioEnd.css';

function VedioEnd() {
  return (
    <div className="video-end">
      {/* <video controls autoPlay loop id="video-end-i" muted>
        <source src="./end.mp4" type="video/mp4" />
      </video> */}
      <ReactPlayer url="./end.mp4" width="100%" height="100%" playing={true} />
    </div>
  );
}

export default VedioEnd;
