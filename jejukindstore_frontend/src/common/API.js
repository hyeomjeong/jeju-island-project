import axios from 'axios';
/*
const globalAxiosConfig = {
    headers: {
      'X-CSRFToken': 'add csrf token here',
    },
}
*/
export function getAPI(url){
    return axios.get(process.env.REACT_APP_BACKEND_URL + url)
    .then((Response) => {
        return (Response.data);
    })
    .catch((Error) => {
        return false;
    });
}

export function headAPI(url){
    return axios.head(process.env.REACT_APP_BACKEND_URL + url)
    .then((Response) => {
        if (Response.status === 204)
            return false;
        else 
            return true;
    })
    .catch((Error) => {
        console.log(Error)
        return false;
    });
}

export function testPost(url, data){

    return axios.post(process.env.REACT_APP_BACKEND_URL + url, data)
    .then((Response) => {
        const { accessToken } = Response.data;
		// API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
		// accessToken을 localStorage, cookie 등에 저장하지 않는다!
    })
    .catch((Error) => {
        console.log(Error);
        return false;
    });

    
}

export function postAPI(url, data){
    return axios.post(process.env.REACT_APP_BACKEND_URL + url, data)
    .then((Response) => {
        console.log(Response);
        if (Response.status === 200){
            return Response.data;
        }
    })
    .catch((Error) => {
        console.log(Error);
        return false;
    });
}

export function deleteAPI(url){
    return axios.delete(process.env.REACT_APP_BACKEND_URL + url)
    .then(function (Response) {
        console.log(Response);
    })
    .catch(function (error){
        console.log(error);
    })
    .then(function() {

    });
}

export function putAPI(url, data){
    axios.put(process.env.REACT_APP_BACKEND_URL+url, data)
    .then((Response) => {
        console.log(Response);
        return true;
    }).catch((Error) => {
        console.log(Error);
        return false;
    });
}
    