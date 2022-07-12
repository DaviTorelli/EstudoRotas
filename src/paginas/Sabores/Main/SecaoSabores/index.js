import React from "react";

export default function SecaoSabores(){
    return(
        <section id="saboresSabores" className="SecaoSabores">
            <h2>Sabores de sorvete</h2>
            <div className="opcoesSabores">
                <div className="cardSabor">
                    <img src="assets/sabor-oreo.png"/>
                    <h4>Sorvete de Oreo</h4>
                    <p>Delicioso sorvete sabor Oreo, uma explosão de sabor.</p>
                </div>
                <div className="cardSabor">
                    <img src="assets/sabor-pistache.png"/>
                    <h4>Sorvete de Pistache</h4>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>
                <div className="cardSabor">
                    <img src="assets/sabor-cookies-avela.png"/>
                    <h4>Sorvete Cookies e Avelã</h4>
                    <p>Nosso melhor sorvete, você vai adorar o sabor.</p>
                </div>
            </div>
            <div className="opcoesSabores">
                <div className="cardSabor">
                    <img src="assets/sorbet-kiwi.png"/>
                    <h4>Sorvete de Kiwi</h4>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>
                <div className="cardSabor">
                    <img src="assets/sorbet-morango.png"/>
                    <h4>Sorvete de Morango</h4>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
                <div className="cardSabor">
                    <img src="assets/sorbet-limao.png"/>
                    <h4>Sorvete de Limão Siciliano</h4>
                    <p>O incrível sorvete de limão siciliano vai te encantar.</p>
                </div>
            </div>
            
        </section>
    )
}