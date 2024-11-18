import React from 'react';

function Footer(props){
    return(
        <div id="Footer">
            Codziennie od {props.poczontek} do {props.koniec}
        </div>
    );
}

export default Footer;