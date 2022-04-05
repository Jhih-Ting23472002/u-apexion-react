import { Button, Modal } from 'react-bootstrap';

function ForumPublishPageModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">發佈新文章</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: '16px' }}>發佈成功！</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{
            backgroundColor: '#05f2f2',
            color: 'grey',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '2px',
            padding: '5px 10px',
            borderRadius: '30px',
            border: '3px double gray',
          }}
        >
          關閉視窗
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ForumPublishPageModal;
