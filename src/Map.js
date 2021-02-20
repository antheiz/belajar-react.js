import React from 'react'

const menu = [
    {
        nama:"Bakso",
        harga:10000,
    },
    {
        nama:"Nasi Kuning",
        harga:12000,
    },
    {
        nama:"Mie Ayam",
        harga:8000,
    },
    {
        nama:"Lalapan Ayam Bakar",
        harga:25000,
    }
]

// Reduce = Menjumlahkan Total Harga semua Menu

const total_bayar = menu.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga
}, 0)

const Map = () => {
    // Map sama dengan Looping
    return (
        <div>
            <h2>MAP Sederhana</h2>
            <ul>
                {menu.map((makanan, index) => (
                    <li>{index+1}. {makanan.nama} - {makanan.harga}</li>
                ))}
            </ul>

            <h2>Map Filter harga lebih dari 10.000</h2>
            <ul>
                {menu.filter((makanan) => makanan.harga >= 10000).map((makanan, index) => (
                    <li>{index+1}. {makanan.nama} - {makanan.harga}</li>
                ))}
            </ul>
            <h3>Jumlah Total Harga : {total_bayar}</h3>
        </div>
    )
}

export default Map
