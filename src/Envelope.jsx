import React from 'react';
import PropTypes from 'prop-types';
import Address from './Address';
import Stamp from './Stamp';
import './Envelope.css';
import StampImage from './stamp.png';

function Envelope({fromPerson, toPerson}){
    return(
        <main className="envelope">
            <section className="fromPerson">
                <Address person={fromPerson} />    
            </section>
            <section className="toPerson">
                <Address person={toPerson} />    
            </section>
            <Stamp image={StampImage} />
        </main>
    );
}

Envelope.propTypes = {
    fromPerson: PropTypes.string,
    toPerson: PropTypes.string
};

export default Envelope;