import axios from 'axios';


function getAPI(url){
    axios.get(url)
    .then((Response)=> {
        return(Response.data);
    })
    .catch((Error) => {
        console.log(Error);
        return false;
    });
}

function postAPI(url, data){
    axios.post(url, data)
    .then((Response)=> {
        return true;
    })
    .catch((Error) => {
        console.log(Error);
        return false;
    });
}

function deleteAPI(url){
    axios.delete(url)
    .then(function(Response) {
        return true;
    })
    .catch(function(ex){
        throw new Error(ex);
        return false;
    });
}
function putAPI(url, data){
    axios.put(url, data).then((Response) => {
        console.log(Response);
        return true;
    }).catch((Error) => {
        console.log(Error);
        return false;
    });
}
