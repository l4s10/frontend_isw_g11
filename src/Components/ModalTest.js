import React, { useState } from 'react';
import {Button, Modal, Form, FloatingLabel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function ModalTest(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            {props.buttonName}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.titleModal}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form action="POST">
                    <Form.Group className="mb-3" controlId="nameMantention">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Sin tildes o carácteres especiales" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nameEncargado">
                        <Form.Label>Empresa encargada</Form.Label>
                        <Form.Control type="text" placeholder="Máx 100 carácteres" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dateMantention">
                        <Form.Label>Fecha</Form.Label>
                        {/* Datepicker */}
                        <DatePicker
                            required
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat='dd/MM/yyyy'
                            minDate={new Date("01/01/2022")}
                            // maxDate={new Date("01/01/2122")}
                            placeholderText="Ingrese fecha"
                        />
                    </Form.Group>

                    <Form.Group controlId="descripcion">
                    <Form.Label>Descripción</Form.Label>
                    <FloatingLabel label="max 2000 caracteres">
                        <Form.Control
                        required
                        as="textarea"
                        placeholder="Deje una descripcion aqui"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group controlId="imagenPrevia" className="mb-3">
                        <Form.Label>Imagen previa</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>

                    <Form.Group controlId="imagenPosterior" className="mb-3">
                        <Form.Label>Imagen posterior</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>

                    <Form.Group controlId="documentoAdicional" className="mb-3">
                        <Form.Label>Documento adicional</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                <Button variant="primary" type="submit">Enviar</Button>
            </Modal.Footer>

        </Modal>
        </>
    );
}
