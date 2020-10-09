import React from 'react';
import { stock } from '../products';

function Zapatillas() {
    return (
        <main className="productos-container">
            <h1 className="header-responsive">Zapatillas</h1>
            <div className="zapatillas-container">
                {stock.map((value) => {
                    return (
                        <a href="#" class="producto-detalles">
                            <div className="img-container">
                                <img src={value.img} alt=""/>
                            </div>
                            <p className="product-name">{value.nombre}</p>
                            <p className="product-price">{value.precio}</p>
                        </a>
                    )
                })} 
            </div>
        </main>
    )
}

export default Zapatillas;