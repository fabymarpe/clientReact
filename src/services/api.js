/**
 * Created by fabymarpe on 7/27/18.
 */
export const apiComunication = {
    post
};

const baseURL = 'https://tornadoapi.herokuapp.com/';
//const baseURL = 'http://localhost:5000/';

function post(type, data) {
    return new Promise((resolve, reject) =>{
        fetch(baseURL+type, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}