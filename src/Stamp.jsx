import React from 'react';
//import './Envelope.css';

function Stamp({image}){
    return(
        <aside className="stamp">
            <img alt="stamp" className="stampImg" src={image} />
        </aside>
    );
}

export default Stamp;