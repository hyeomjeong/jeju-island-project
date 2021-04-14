import React from 'react';
import Menu from './Menu';

const MenuList = (props) => {

    const { data } = props;

    const list = data.map(
        (info, index) => <Menu key={index} name={info.name} price={info.price} />
    );

    return(
        <div>
            {list}
        </div>
    );
}

MenuList.defaultProps = {
    data: []
};

export default MenuList;