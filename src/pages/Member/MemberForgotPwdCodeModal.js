import { Button, Modal } from 'react-bootstrap';

function MemberForgotPwdCodeModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: 'white', fontSize: '30px' }}
        >
          驗證碼
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: 'white', fontSize: '20px' }}>
          驗證碼正確，請至下一步設定密碼。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberForgotPwdCodeModal;
