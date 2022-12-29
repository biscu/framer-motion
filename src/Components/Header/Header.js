import React from "react";
import './Header.css';

export const Header = (props) => {
    return (
        <div className="header-container">
            <h1>{ props.header }</h1>
        </div>
    )
}