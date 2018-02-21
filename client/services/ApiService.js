import {HTTP_SERVER_PORT} from "../../server/constants";

export const ApiService = {
    get: (url) => {
        return fetch(HTTP_SERVER_PORT + url)
            .then(res => res.json())
            .catch(err => console.error(err))
    },
    post: (url, body) => {
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
        let options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers
        };

        return fetch(HTTP_SERVER_PORT + url, options)
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    remove: (url) => {
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
        let options = {
            method: 'DELETE',
            headers: headers
        };

        return fetch(HTTP_SERVER_PORT + url, options)
            .then(res => res.json())
            .catch(err => console.error(err));
    }
};
