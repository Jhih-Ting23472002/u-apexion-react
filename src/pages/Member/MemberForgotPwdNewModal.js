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
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: 'white', fontSize: '30px' }}
        >
          設定密碼
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: 'white', fontSize: '20px' }}>
          設定密碼成功，請用更改後的新密碼登入。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberForgotPwdNewModal;
