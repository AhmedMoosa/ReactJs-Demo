import http from '../../utilities/httpClient';
const todosUrl = process.env.REACT_APP_API_URL + 'todos/';
const getAll = (limit) => {
    return http.get(todosUrl, {
        params: {
            '_limit': limit
        }
    });
}
const getBy = (id) => {
    return http.get(todosUrl + id)
}

export {
    getAll,
    getBy
}