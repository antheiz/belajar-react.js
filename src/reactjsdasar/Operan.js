import React, { Component } from 'react'

export default class Operan extends Component {

    // Tidak Bisa terganti dikarenakan dia Props
    // gantiMakanan(makanan_baru) {
    //     this.setState({
    //         makanan:makanan_baru
    //     })
    // }

    // Namun dapat diganti apabila di set dari file StatePropsnya (gantiMakanan) bukan dari operan
    // Jadi kita harus menghapus function gantiMakanan di file Operan
    // tapi kita harus oper function gantiMakanan dari StateProps ke file Operannya

    render() {
        // Triks agar tidak mengulang tulis this.props
        const {makanan, gantiMakanan} = this.props
        return (
            <div>
                <h2>Operan dari State ke Props : {makanan}</h2>
                {/* Jika Props tidak ubah makan gunakan this.gantiMakanan */}
                {/* <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button> */}
                {/* Jika hendak di ubah dari operan stateProps gunakan this.props.gantiMakanan */}
                <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>

            </div>
        )
    }
    // Jadi props adalah hasil operan komponen utama ke komponen bawaannya
    // berupa state atau arrow function
}
