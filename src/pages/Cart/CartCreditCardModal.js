import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import './CartCreditCardModal.css';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'

// import './CartCreditCardModal.css';

function CartCreditCardModal({cartConfirmModalShow, setCartConfirmModalShow}) {
  return (
    <>
<React.Fragment >
			<ModalVideo channel='custom' autoplay isOpen={cartConfirmModalShow} url="./end.mp4" onClose={() => setCartConfirmModalShow(false)}/>
		</React.Fragment>
          {/* <div className="video-end">
            <ReactPlayer
              id="video-end-player"
              url="./end.mp4"
              width="100%"
              height="100%"
              playing={true}
            />
          </div> */}

    </>
  );
}

export default CartCreditCardModal;
