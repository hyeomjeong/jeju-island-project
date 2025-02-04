import axios from 'axios';

axios.defaults.paramsSerializer = function(paramObj) {
    const params = new URLSearchParams()
    for (const key in paramObj) {
        //console.log(key, paramObj[key], typeof paramObj[key])
        if (typeof paramObj[key] === "object"){

            for (const value in paramObj[key]){
                params.append(key, paramObj[key][value]);
            }  
        }
        else
            params.append(key, paramObj[key]);
    }
    //console.log(params.toString());
    return params.toString();
}

const httpInstance = axios.create({ 
    baseURL: process.env.REACT_APP_BACK_END_URL, 
    timeout: 10000000, 
    headers: { 
        'content-type': 'application/json; charset=UTF-8',
    }, 
    // withCredentials: true, 
    
});


const setToken = () => {
    // console.log(sessionStorage.getItem('Authorization'));
    if (sessionStorage.getItem('Authorization') !== "undefined"){
        httpInstance.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('Authorization')}`;
    }
    else {
        httpInstance.defaults.headers.common.Authorization = ``;
    }
}



export function getAPI(url, data=null){
    // console.log(data);
    setToken();
    return httpInstance.get(url, {
        params: data
    })
    .then((Response) => {
        //console.log(Response);
        return (Response.data);
    })
    .catch((Error) => {
        console.log(Error);
        return false;
    });
}

export function headAPI(url, data=null){
    
    setToken();
    // console.log(data);
    return httpInstance.head(url, {
        params: data
    })
    .then((Response) => {
        //console.log(Response);
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
    
    setToken();
    console.log(data);
    return httpInstance.post(url, data)
    .then((Response) => {
        if (Response.status === 200){
            console.log(Response);
            return Response.data;
        }
    })
    .catch((Error) => {
        console.log(Error);
        return false;
    });
}

export function deleteAPI(url){
    
    setToken();
    return httpInstance.delete(url)
    .then(function (Response) {
        // console.log(Response);
        if (Response.status === 200){
            // console.log(Response);
            return true;
        }
    })
    .catch(function (error){
        console.log(error);
        return false;
    });
}

export function putAPI(url, data){
    
    setToken();
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
