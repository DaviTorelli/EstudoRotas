import React from "react";

import SecaoBanner from './SecaoBanner';
import SecaoImagem from "./SecaoImagem";
import SecaoInfo from "./SecaoInfo";

export default function Main() {
    return (
        <main>
            <SecaoBanner />
            <SecaoInfo/>
            <SecaoImagem/>
        </main>
    )
}