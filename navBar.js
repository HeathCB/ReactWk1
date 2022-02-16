import React from "react";
import './navbar.css';


export default class NavBar extends React.Component {
    render() {
        return (
            <div class="nav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        )
    }
}