import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 20px;
    background: #ccc;
`;

const Title = styled.h1`
    font-size: 2eml;
    text-align:center;
    color: blue;
`;


function SimpleStyle(){
    return(
        <Wrapper>
            <Title>
                Hello my friend :)!
            </Title>
        </Wrapper>
    );
}

export default SimpleStyle;