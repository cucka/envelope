import React, {useState} from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
    display: flex;
`;

const Button = styled.button`
    background: #000;
    color: #fff;
    padding: 10px;
    margin: 0 10px 0 0;
    &:disabled{
        opacity: 0.7;
        cursor: default;
    }
`;

const ButtonToggle = styled(Button)`
    opacity: 0.6;
    ${({active})=>
    active &&
    `
    opacity: 1;
    `}
`;

const types = ['Add', 'Delete', 'Current', 'State'];

function Buttons(){
    const [active, setActive] = useState(types[0]);
    return(
        <ButtonGroup>
                {
                    types.map(type =>(
                        <ButtonToggle
                            key= {type}
                            active={active===type}
                            onClick={()=>setActive(type)}
                        >
                            {type}
                        </ButtonToggle>
                    ))
                }
        </ButtonGroup>
    );
}

export default Buttons;