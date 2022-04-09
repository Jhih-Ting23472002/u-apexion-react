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
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: 'white', fontSize: '30px' }}
        >
          電子郵件及手機號碼驗證
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: 'white', fontSize: '20px' }}>
          驗證通過，請至輸入的電子郵件收取驗證信。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberForgotPwdModal;
