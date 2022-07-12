import React from "react";

export default function SecaoSobre(){
    return(
        <section id="sobreHome" className="SecaoSobre">
            <img src='assets/sobre-image.jpg'/>
            <div className="caixaTexto">
                <h2>Sobre nós</h2>
                <span>Alegria em cada casquinha!</span>
                <p>
                    Venha tomar o melhor sorvete da região aqui com a gente!
                    Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente, e você não pode ficar fora dessa.
                    Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                </p>
            </div>
        </section>
    )
}