import axios from "axios";

export enum DBMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export enum tableType {
    HEROES = 'heroes',
    ITEMS = 'items',
    DUELS = 'duels',
}

export type searchType<T> = {
    [key in keyof T]?: T[key];
}

export const db = async (method: DBMethod, type: tableType, id?: string, body?: any, search?: searchType<any>) => {

    // contruct the search string
    const searchString = search ? `?${Object.keys(search).map((key) => `${key}=${search[key]}`).join('&')}` : '';

    const url = `http://localhost:3000/${type}/${id || ''}${searchString}`;
    
    return await axios({
        method,
        url,
        data: body
    }).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
        return err;
    });
}