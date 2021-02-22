import React, { Component } from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

export default class index extends Component {
    render() {
        return (
            <div>
                <NavbarComponent/>
                <div className="container mt-4">
                    <h2 className="text-center mb-5">Data Warung Makan</h2>
                    <Tabel/>
                    <Formulir/>
                </div>
            </div>
        );
    }
}