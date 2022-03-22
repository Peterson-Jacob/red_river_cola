import react from 'react';
import can from './images/drink.png';


export default function Main(){
    return(
        <>
        <div>
            <h1>Red River Cola Is always Refreshing</h1>
            <h2>Order our Orignal Cola Now</h2>
            <button>Order</button>
        </div>
        <div>
            <img src={can} alt="soda can" />
        </div>
        </>
    );
}