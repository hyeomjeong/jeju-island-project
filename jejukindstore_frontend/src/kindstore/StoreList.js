import React, {useState, useEffect} from 'react';
import {getAPI} from '../common/API';

import StoreInfo from './StoreInfo';

const StoreList = (props) => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const getStores = async() => {
            setStores(await getAPI("/api/v1/store", props.location.state.params));
        }
        getStores();
    }, [props.location.state.params])

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