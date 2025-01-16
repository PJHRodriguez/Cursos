import styled,{css, keyframes} from 'styled-components'

const miColor="black"

    const animacion= keyframes`
        0%{
            transform:rotate(0deg)
        }
        100%{
            transform:rotate(180deg)
        }
    `
    const animacion2= (valor)=>keyframes`
    0%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(${valor}deg)
    }
`

    export const Titulo = styled.div`
        width:100px;
        height:100px;
        background-color: ${({color})=>color ? color : "silver" };
        margin:5px;
        
        ${props=> props.redondo && 
        css`
            border-radius:50%;
            border:2px solid black;
        `}
        &:hover{
            border:4px solid ${miColor};
            animation: ${animacion} 3s ease-in ;
            animation-fill-mode: forwards;
        }
    `
    export const Contenedor = styled.div`
        display:flex;
        text-align:center;
        
    `
    export const Moverse=styled.div`
        width:200px;
        height:100px;
        background-color:olive;
        animation: ${(props)=> animacion2(props.distancia)} 
                   ${(props)=> props.segs}s ease-out;
        animation-fill-mode: forwards;
    `

    export const Sombra = styled(Titulo)`
        box-shadow: 0 0 20px red;
    `