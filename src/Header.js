import classes from './Header.module.css';
import React from 'react';
import CartIcon from './CartIcon';
import Cart from './Store/Cart';
import { useState } from 'react';
const Header = (props) => {

    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(!showCart);
        props.showProduct();
    }
    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>E-Kart.com</h1>
                <button className={classes.headerButton} onClick={showCartHandler}>
                    <div>Cart
                        <CartIcon />
                    </div>
                </button>
            </div>
            {showCart && <Cart onClick={showCartHandler}></Cart>}
        </React.Fragment>
    )
};

export default Header;