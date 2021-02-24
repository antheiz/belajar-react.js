import React from "react";
import { Form, Button } from "react-bootstrap";

const Formulir = ({namaMakanan, keterangan, harga, handleChange, handleSubmit}) => {
  return (
    <div className="mt-5">
        <h4 className="mb-4">Tambah Data</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="namaMakanan">
            <Form.Label>Nama Makanan</Form.Label>
            <Form.Control type="text" required name="namaMakanan" value={namaMakanan} onChange={(event) => handleChange(event)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control as="textarea" required rows={3} name="keterangan" value={keterangan} onChange={(event) => handleChange(event)}/>
        </Form.Group>
        <Form.Group controlId="harga" className="mb-3">
            <Form.Label>Harga</Form.Label>
            <Form.Control type="number" required name="harga" value={harga} onChange={(event) => handleChange(event)}/>
        </Form.Group>
        <Button variant="primary" className="mb-5" type="submit">
          Tambah
        </Button>
      </Form>
    </div>
  );
};

export default Formulir;
