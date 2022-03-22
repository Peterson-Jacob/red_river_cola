import react from 'react';
import cart from './images/outline_shopping_cart.png';

export default function Header(){
    return(
        <>
        <div>
            <h1>Red River Cola</h1>
        </div>
        <div>
           
           <a href="#home">About</a>
           <a href="#home">Products</a>
           <a href="#home">Order</a>
        </div>
        <div>
        <span className="material-icons-outlined">
                <img src={cart} alt="shopping Cart" />
        </span>
        </div>
      
        </>
    );
}