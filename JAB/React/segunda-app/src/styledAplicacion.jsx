import styled from "styled-components"


export const Btn = styled.button`

    padding:35px;
    font-size:2rem;
    cursor:pointer;
    background-color: #9af08c;
    transition: background-color 0.3s ease;

    &:hover{
        background-color : #76cc69;
    }

`

export const Row = styled.div`

    display:grid;
    grid-template-columns: 50% 50%;

`