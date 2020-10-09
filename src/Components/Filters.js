import React from 'react';

function Filters() {
    const cat = ['Zapatillas', 'Zapatos', 'Botas', 'Sandalías', 'Pantuflas'];
    const talle = [36, 38, 40, 42, 44];
    const color = ['Amarillo', 'Negro', 'Verde', 'Azul', 'Blanco']
    return (
        <aside className="filters-container">
            <h1 className="__filter-category">Zapatillas</h1>
            <h3 className="__filter-action">Filtrar</h3>
            <details className="__filter-category-types">
                <summary className="__filter-category-types-name">Categoría</summary>
                {
                    cat.map((value) => 
                        <button>{value}</button>
                    )
                }
            </details>
            <details>
                <summary className="__filter-category-types-name">Talle</summary>
                {
                    talle.map((value) => 
                        <button>{value}</button>
                    )
                }
            </details>
            <details>
                <summary className="__filter-category-types-name">Color</summary>
                {
                    color.map((value) =>
                        <button>{value}</button>
                    )
                }
            </details>
        </aside>
    )
}

export default Filters;