import React from "react";

import SecaoBanner from "./SecaoBanner";
import SecaoSabores from "./SecaoSabores";

export default function Main() {
    return (
        <div className="Main">
            <SecaoBanner />
            <SecaoSabores />
        </div>
    );
}
