import styled from 'styled-components';

type ContainerProps ={
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: flex;
    background-color: #0047FF;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        color: white;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    
`
));

export const input = styled.h1`
    bottom: 100%;
    color: black;
    align-items: left;
    
`;

export const image = styled.button`
display: flex;
background-color: #0047FF;
border-radius: 5px;
align-items: center;
    
`;