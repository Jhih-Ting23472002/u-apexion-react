import React from 'react';
import './IndexFirst.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IndexEnter = styled(Link)`
  position: absolute;
  bottom: 25%;
  left: 40%;
  width: 300px;
`;

const IndexFirst = () => (
  <>
    <div className="index-vedio">
      <video controls autoPlay loop id="bg-video" muted>
        <source src="./index_img/rocket.mp4" type="video/mp4" />
      </video>
      <img
        src="./index_img/indexfirst_title.png"
        alt=""
        className="index_first_title"
      />
      <IndexEnter to="/u-apexion">
        <img src="./index_img/index-enter.png" alt="" />
      </IndexEnter>
    </div>
  </>
);
export default IndexFirst;
