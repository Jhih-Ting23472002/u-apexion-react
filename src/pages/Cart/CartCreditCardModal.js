import { Button, Modal } from 'react-bootstrap';

function CartCreditCardModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // style={{ border: '1px solid red' }}
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{ color: 'white', margin: 'auto',fontSize: '30px' }}
          id="contained-modal-title-vcenter"
          // style={{ border: '1px solid red' }}
        >
          準備好啟程了嗎？
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: '16px', color: 'white', textAlign: 'center' }}>
          期待在太空與您相遇
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{
            backgroundColor: '#05f2f2',
            color: 'black',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '2px',
            padding: '5px 10px',
            borderRadius: '30px',
            border: '3px double gray',
          }}
        >
          確定
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartCreditCardModal;
