import React from 'react';
import logo from './logo.png';

function Header(props){
    return(
        <div id="Header">
            <h1>Witamy w naszej {props.name}</h1>
            <img src={logo} alt="Zdjęcie" />
        </div>
    );
}

export default Header;