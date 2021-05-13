import React from 'react';
import './menu.css';

const Menu = (props) => {
    const { name, price } = props;
    return(
        <div className="menu-info">
                <p className="menu-name">{name}</p>
                <p className="menu-price">{price}</p>
        </div>
    );
}

Menu.defaultProps = {
    name: "",
    price: 0
};

export default Menu;
