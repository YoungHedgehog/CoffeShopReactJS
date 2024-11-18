import React,{useState} from 'react';

function Body(props){
    const [menu1]=useState({
        pozycje : ['Kawa Biała', 'Herbata Zielona','Herbata Owocowa']
    });
    const [menu2]=useState({
        pozycje : ['Pączki', 'Sernik','Drożdżówki']
    });
    return(
        <div id="CaleMenu">
            <div id="Menu1">
                <div id="MenuCSS">Menu : {props.nazwaMenu1}</div>
                <ol>
                    {menu1.pozycje.map((pozycja,index)=>(
                        <li key={index}>{pozycja}</li>
                    ))}
                </ol>
            </div>
            <div id="Menu2">
                <div id="MenuCSS">Menu : {props.nazwaMenu2}</div>
                <ol>
                    {menu2.pozycje.map((pozycja,index)=>(
                        <li key={index}>{pozycja}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Body;