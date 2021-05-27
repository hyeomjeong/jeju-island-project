import React, {useState, useEffect} from 'react';
import {getAPI} from '../common/API';

import StoreInfo from './StoreInfo';

const StoreList = (props) => {
    const [params, setParams] = useState(props.location.state.params);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        setParams(props.location.state.params);
        console.log(stores, params)
        const getStores = async() => {
            setStores(await getAPI("/api/v1/store", params));
        }
        getStores();
    }, [props])

    const store_list = stores.map((info, index) => 
        <div key={index}>
            <StoreInfo data={info} /> 
            <hr className="middle-line" />
        </div>
    );

    return(
        <div>
            {store_list}
        </div>
    );
}

export default StoreList;