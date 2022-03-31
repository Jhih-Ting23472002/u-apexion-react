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
        <Modal.Title id="contained-modal-title-vcenter">創建帳戶</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>註冊成功</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberSignUpModal;
