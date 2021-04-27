import React, {useState} from 'react';
import {deleteAPI} from '../common/API';
const Map =() => {

    async function test(){
        await deleteAPI("/api/v1/session");
    }
    
    return(
        <div>
            <button onClick={test}>TEST</button>
        </div>
    );
}

export default Map;