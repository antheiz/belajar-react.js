import React, { Component } from 'react'

export default class Operan extends Component {

    // gantiMakanan(makananBaru) {
    //     this.state({
    //         makanan : makananBaru
    //     })
    // }

    render() {
        const {makanan, gantiMakanan} = this.props
        return (
            <div>
                <h2>Operan state yang menjadi props : {makanan}</h2>
                <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
                {/* <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button> */}
            </div>
        )
    }
}
