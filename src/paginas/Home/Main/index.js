import React from "react";

import SecaoBanner from "./SecaoBanner";
import SecaoSabores from "./SecaoSabores";
import SecaoEventos from "./SecaoEventos";
import SecaoSobre from "./SecaoSobre";

export default function Main() {
    return (
        <div className="Main">
            <SecaoBanner />
            <SecaoSabores />
            <SecaoEventos />
            <SecaoSobre />
        </div>
    );
}
