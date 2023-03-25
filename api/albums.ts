import superagent from 'superagent';

const baseUrlAlbums = 'https://jsonplaceholder.typicode.com/albums';

export async function getAlbumById(reqId: number) {  
    const response = await superagent.get(baseUrlAlbums).query({id: reqId}); 
    const respObj = {
        statusCode: response.statusCode,
        albumData: response.body[0]
    };
    return respObj;
}
export async function getAlbums() {  
    const response = await superagent.get(baseUrlAlbums); 
    const respObj = {
        statusCode: response.statusCode,
        albumData: response.body
    };
    return respObj;
}
export async function addAlbum (titleToSet: string, authorId: number) {
    const response = await superagent.post(baseUrlAlbums).set('Content-type', 'application/json').send({title: titleToSet, userId: authorId});
    const respObj = {
        statusCode: response.statusCode,
        albumData: response.body
    };
    return respObj;
}
export async function getAlbumsByUserId(reqId: number) {  
    const response = await superagent.get(baseUrlAlbums).query({userId: reqId})
    const respObj = {
        statusCode: response.statusCode,
        albumData: response.body
    };
    return respObj;
}