import React, { Component } from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanans : [],
             namaMakanan : "",
             keterangan : "",
             harga : 0,
             id : "",
        }
    }

    // Ketika user mengisi input forms
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    // Ketika user mengpost data
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Data :", this.state);
        this.setState({
            makanans:[
                ...this.state.makanans,
                {
                    id : this.state.makanans.length+1,
                    namaMakanan : this.state.namaMakanan,
                    keterangan : this.state.keterangan,
                    harga : this.state.harga
                }
            ]
        })

        this.setState({
            namaMakanan : "",
            keterangan : "",
            harga : 0,
            id : "",
        })

    }
    
    render() {
        console.log(this.state.makanans);
        return (
            <div>
                <NavbarComponent/>
                <div className="container mt-4">
                    <h2 className="text-center mb-5">Data Warung Makan</h2>
                    <Tabel makanans={this.state.makanans}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}