import React from 'react'


// Const
// const harga = 3000
// harga = 4000

// Var
// var harga = 3000
// if (true) {
//     var harga = 2000
// }

// Let
let harga = 3000
if (true) {
    let harga = 2000
}

{/*
    gunakan let hindari var (dikarenakan pada let tidak mengijinkan adanya duplikasi variabel sedangkan var tidak)
    gunakan const untuk variabel yg nilainya statis atau tidak berubah
*/}



export const Variabel = () => {
    return (
        <div>
            <h2>Harga : {harga}</h2>
        </div>
    )
}

