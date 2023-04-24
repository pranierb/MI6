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

export const db = async (method: DBMethod, type: tableType, id?: string, body?: any) => {

    const url = `http://localhost:3000/${type}/${id || ''}`;
    
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