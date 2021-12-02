import React from 'react';

function Address({person}){
    return(
            <ol className="person">
                <li className="full-name">{person.fullName}</li>    
                <li className="address">{person.address}</li>    
                <li className="city">{person.city}</li>    
            </ol>
    );
}

export default Address;