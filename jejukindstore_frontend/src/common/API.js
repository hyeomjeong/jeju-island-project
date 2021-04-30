import axios from 'axios';
import Cookies from 'js-cookie';

const httpInstance = axios.create({ 
    baseURL: process.env.REACT_APP_BACK_END_URL, 
    timeout: 5000, 
    headers: { 
        'content-type': 'application/json; charset=UTF-8',
    }, 
    // withCredentials: true, 
    
});

httpInstance.defaults.headers.common.Authorization = `Bearer ${Cookies.get('Authorization')}`;
console.log("API -> ", 'Bearer ' + Cookies.get('Authorization'));

export function getAPI(url){
    return httpInstance.get(url)
    .then((Response) => {
        console.log(Response);
        return (Response.data);
    })
    .catch((Error) => {
        console.log(Error);
        return false;
    });
}

export function headAPI(url){
    return httpInstance.head(url)
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

export function postAPI(url, data){
    return httpInstance.post(url, data)
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
    return httpInstance.delete(url)
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
    httpInstance.put(url, data)
    .then((Response) => {
        console.log(Response);
        return true;
    }).catch((Error) => {
        console.log(Error);
        return false;
    });
}
    




export function testPost(url, data){

    return axios.post(url, data)
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
