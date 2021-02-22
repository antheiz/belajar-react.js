import React, { Component } from 'react'
import Operan from './Operan'

export default class StateProps extends Component {
    // Kodingan yang pertama dieksekusi
    constructor(props) {
        super(props);
        this.state = {
            makanan: "Bakso"
        }
    }

    // Jika error makan harus gunakan arrow function
    // Lebih baik jika membuat fucntion gunakan Arrow Function
    gantiMakanan = (makanan_baru) => {
        this.setState ({
            makanan:makanan_baru
        })
    }

    render() {
        return (
            // Jsx atau htmlnya
            <div>
                {/* STATE
                State dapat diganti sedangkan Props tidak karena bersifat ReadOnly */}
                {/* 
                CONTOH STATE 1
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.setState({makanan:"Soto"}) }>Ganti Makanan</button> 
                */}

                {/* 
                CONTOH STATE 2
                Menggunakan Arrow Function
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button> 
                */}

                {/* PROPS 
                Kapan state dapat di jadi Props, ketika di oper ke komponen lain
                */}

                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
