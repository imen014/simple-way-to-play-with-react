import React, { useState } from 'react';
import datas from './datas.json';


function ListeData(){
    const [numbers, setNumbers] = useState([1,2,3,4,5])
    const [value, setValue] = useState([5,10,15,20,25,30])
    const [numberReduced, setNumberReduced] = useState(false)
    const [valueReduced, setValueReduced] = useState(false)

    let datas_exp = datas

    function sum_numbers(){
         const sum = numbers.reduce((accmulator, current_value) => accmulator - current_value, 0);
         setNumbers(sum);
    }

    function valueSetter(){
        const value_reduced = value.reduce((accmulator2, current_value2) => accmulator2 + current_value2,0);
        setValue(value_reduced);
    }

    function toggleNumbersButton(){
        setNumberReduced(!numberReduced);
    };

    function toggleValueReduced(){
        setValueReduced(!valueReduced);
    };


    //const numbers = [1, 2, 3, 4, 5];
    //const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
    const [price, setPrice] = useState(datas.price)

    function modify_price(price){
        price *= 5;
        setPrice(price)

    };

    return (
        <div>
            <div>
                <button onClick={() => { sum_numbers(); toggleNumbersButton(); }} disabled={numberReduced? true : false} > sum </button>
               <p>result: {numberReduced? numbers:0} </p>
            </div>
            <div>
                <button onClick={() => {valueSetter(); toggleValueReduced();}} disabled={valueReduced? true:false} > reduce values </button>
                <p>value reduced: {valueReduced? value : 0} </p>
            </div>
            
            <ul>
            {datas_exp
            .filter(datas => datas.price = 7)
            .map((product,product_index) => (
                <li key={product_index}>
                    
                <strong>product{product_index} - {product.product} - {product.price} - {product.fournisseur} - { product.location } </strong> 
                <button onClick={() => modify_price(product.price)}>Modifier prix</button> 
                <p>{price}</p>
                <button>Supprimer</button>      
                 </li>
            ))}
            </ul>
            

        </div>
    )
}

export default ListeData;