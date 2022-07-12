import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="informacoesFooter">
                <div className="imagemFooter">
                    <img src="assets/logo.png" />
                </div>
                <div className="boxFooter">
                    <h4>Endereço</h4>
                    <p>Av. DevMedia, 11072022</p>
                    <p>Estrela d'Oeste, SP - 12345-678</p>
                </div>
                <div className="boxFooter">
                    <h4>Contato</h4>
                    <p>davitorelli@outlook.com</p>
                    <p>Tel: (99)99999-9999</p>
                </div>
                <div className="boxFooter">
                    <h4>Horários</h4>
                    <p>Aberto todos os dias</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="autoriaFooter">
                <p>Gelateria - Desenvolvido por Davi Borges Torelli</p>
            </div>
        </footer>
    )
}