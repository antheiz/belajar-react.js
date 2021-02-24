import React from 'react'
import { Table } from "react-bootstrap";

const Tabel = ({makanans}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Makanan</th>
                    <th>Keterangan</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {makanans.map((makanan, index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{makanan.namaMakanan}</td>
                            <td>{makanan.keterangan}</td>
                            <td>Rp. {makanan.harga}</td>
                            <td></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )
}

export default Tabel
