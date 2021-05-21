import React from "react";


const Orders = (props) => {

    const { order } = props;

    return (
        <div>
            <p>New Order</p>
            <p>Name: {order.name}</p>
            <p>Size: {order.size}</p>
            <p>Pepperoni: {order.topping1}</p>
            <p>Chicken: {order.topping2.checked}</p>
            <p>Onion: {order.topping3.checked}</p>
            <p>Peppers: {order.topping4.checked}</p>
            <p>Special Instructions: {order.special}</p>
        </div>
    )
}

export default Orders;