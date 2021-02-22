import React from "react";
import { Form, Button } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-5">
        <h4 className="mb-4">Tambah Data</h4>
      <Form>
        <Form.Group controlId="namaMakanan">
            <Form.Label>Nama Makanan</Form.Label>
            <Form.Control type="text" name="namaMakanan" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="harga" className="mb-3">
            <Form.Label>Harga</Form.Label>
            <Form.Control type="number" name="harga" />
        </Form.Group>
        <Button variant="primary" className="mb-5" type="submit">
          Tambah
        </Button>
      </Form>
    </div>
  );
};

export default Formulir;
