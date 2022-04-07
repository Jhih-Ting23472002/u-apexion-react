import { Button, Modal } from 'react-bootstrap';

function MemberForgotPwdNewModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">更改密碼成功</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>請用更改後的新密碼登入。</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberForgotPwdNewModal;
