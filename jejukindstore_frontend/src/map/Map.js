import React, {useState} from 'react';
import {headAPI, deleteAPI} from '../common/API';
const Map =() => {

    async function test(){
        //await headAPI("/api/v1/session");
        await headAPI("/api/v1/user?id=1");
    }
    
    return(
        <div>
            <button onClick={test}>TEST</button>
        </div>
    );
}

export default Map;