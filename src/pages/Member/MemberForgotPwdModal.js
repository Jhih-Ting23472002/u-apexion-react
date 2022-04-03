import { Button, Modal } from 'react-bootstrap';

function MemberForgotPwdModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          電子郵件及手機號碼驗證正確
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>請您至輸入的電子郵件收取驗證碼。</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberForgotPwdModal;
