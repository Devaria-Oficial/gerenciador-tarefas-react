import axios from 'axios';
const URL  =process.env.REACT_APP_API_URL+'/api/';
const instance = axios.create({
    baseURL : URL,
    timeout: 30000
});

export const executaRequisicao = (endpoint, metodo, body) => {

    const accessToken =  localStorage.getItem('accessToken');

    let headers = {'Content-Type' : 'application/json'};
    if(accessToken){
        headers['Authorization'] = 'Bearer ' + accessToken;
    }

    console.log(`executando: ${URL}${endpoint}, metodo ${metodo}, body ${body}, headers ${headers}`);
    return instance.request({
        url : endpoint,
        method: metodo,
        data : body? body : '',
        headers : headers
    });
}