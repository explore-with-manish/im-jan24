import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, title, message, handleYes, handleNo }) => {
    return (
        <Modal show={show} onHide={handleNo}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={handleYes}>Yes</Button>
                <Button variant="secondary" onClick={handleNo}>No</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModal;