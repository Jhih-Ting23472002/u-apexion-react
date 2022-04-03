import { Button, Modal } from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';

function MemberPersonEditModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">修改檔案</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>修改個人檔案成功</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉視窗</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MemberPersonEditModal;
