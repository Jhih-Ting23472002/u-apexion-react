import { Button, Modal } from 'react-bootstrap';

function MemberPwdEditModal(props) {
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
          更改密碼
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p id="change-pwd-msg" style={{ color: 'white', fontSize: '20px' }}>
          更改密碼成功。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberPwdEditModal;
