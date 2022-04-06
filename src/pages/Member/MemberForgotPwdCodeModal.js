import { Button, Modal } from 'react-bootstrap';

function MemberForgotPwdCodeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">驗證碼正確</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>驗證碼正確，請至下一步更改密碼。</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberForgotPwdCodeModal;
