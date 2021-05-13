import React, {useState, useEffect} from 'react';
import Menu from './Menu';
import {getAPI} from '../../common/API';
const MenuList = (props) => {

    const [menu, setMenu] = useState([]);
    useEffect(async function(){
        const m = await getAPI("/api/v1/store/" + props.store_id + "/menu");
        setMenu(m);
    }, [props.store_id])

    const list = menu.map(
        (info, index) => <Menu key={index} name={info.name} price={info.price} />
    );

    return(
        <div>
            {list}
        </div>
    );
}

MenuList.defaultProps = {
    store_id: 1
};

export default MenuList;