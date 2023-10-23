import React from "react";
import styled from "styled-components";


const ReplyModal = ({estadoModal, cambiarEstadoModal}) => {
    return (
        <>
            {estadoModal && 
            <Ovelay>
                <ContenedorModal>
                    <EncabezadoModal>
                        <h3>Pregunta completa</h3>
                    </EncabezadoModal>

                    <BotonCerrar onClick={() => cambiarEstadoModal(false)}>x</BotonCerrar>
                </ContenedorModal>
            </Ovelay>
            }
        </>
    );
}

export default ReplyModal;


const Ovelay = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 80%;
    min-height: 100px;
    background: rgba(33, 33, 32, 0.5); 
    position: relative;
    border-radius: 10px;
    box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2);
    padding: 20px;
    backdrop-filter: blur(10px);

    transition: box-shadow 0.3s ease-in-out;
    &:hover {
    box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.3);
    }
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px; 
    padding-bottom: 20px;
`;

const BotonCerrar = styled.button`
    position: absolute;  
    top: 20px;
    right: 20px;

    width: 30px;
    height: 30px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    transition: .3s ease all;
    cursor: pointer;
    border-radius: 10px;
    color: width;

    &:hover {
        color: black;
        background: #FCF2D6;
        border-radius: 10px;
    }


`;