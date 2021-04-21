import axios from 'axios';

export function getAPI(url){
    return axios.get(process.env.REACT_APP_URL + url)
    .then((Response) => {
        return (Response.data);
    })
    .catch((Error) => {
        return false;
    });
}

export function headAPI(url){
    // console.log(url);
    return axios.head(process.env.REACT_APP_URL+url)
    .then((Response) => {
        if (Response.status === 204)
            return false;
        else 
            return true;
    })
    .catch((Error) => {
        return false;
    });
}

export function postAPI(url, data){
    return axios.post(process.env.REACT_APP_URL + url, data)
    .then((Response) => {
        return true;
    })
    .catch((Error) => {
        console.log(Error);
        return false;
    });
}

export function deleteAPI(url){
    axios.delete(process.env.REACT_APP_URL+url)
    .then(function(Response) {
        return true;
    })
    .catch(function(ex){
        throw new Error(ex);
        return false;
    });
}
export function putAPI(url, data){
    axios.put(process.env.REACT_APP_URL+url, data).then((Response) => {
        console.log(Response);
        return true;
    }).catch((Error) => {
        console.log(Error);
        return false;
    });
}
    