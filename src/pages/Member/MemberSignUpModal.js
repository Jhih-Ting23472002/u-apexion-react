import { Button, Modal } from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';

function MemberSignUpModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: 'white', fontSize: '30px' }}
        >
          創建帳戶
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: 'white', fontSize: '20px' }}>
          註冊成功，請至會員首頁登入。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberSignUpModal;
