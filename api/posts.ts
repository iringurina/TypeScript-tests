import superagent from 'superagent';

const baseUrlPosts = 'https://jsonplaceholder.typicode.com/posts';

export async function getPostById(reqId: number) {  
    const response = await superagent.get(baseUrlPosts).query({id: reqId}); 
    const respObj = {
        statusCode: response.statusCode,
        postData: response.body[0]
    };
    return respObj;
}
export async function getPosts() {  
    const response = await superagent.get(baseUrlPosts); 
    const respObj = {
        statusCode: response.statusCode,
        postData: response.body
    };
    return respObj;
}
export async function createPost(titleToSet: string, bodyToSet: string) {
    const response = await superagent.post(baseUrlPosts).set('Content-type', 'application/json').send({title: titleToSet, body: bodyToSet});
    const respObj = {
        statusCode: response.statusCode,
        postData: response.body
    };
    return respObj;
}
export async function updatePost(idToUpdate: number, titleToSet: string) {
    const response = await superagent.post(baseUrlPosts).query({id: idToUpdate}).set('Content-type', 'application/json').send({title: titleToSet});
    const respObj = {
        statusCode: response.statusCode,
        postData: response.body
    };
    return respObj;
}
export async function deletePost(reqId: number) {  
    const response = await superagent.get(baseUrlPosts).query({id: reqId}); 
    const respObj = {
        statusCode: response.statusCode,
        postData: response.body
    };
    return respObj;
}
export async function getPostsByUserId(reqId: number) {  
    const response = await superagent.get(baseUrlPosts).query({userId: reqId})
    const respObj = {
        statusCode: response.statusCode,
        postData: response.body
    };
    // console.log(respObj.statusCode);
    // console.log(respObj.postData);
    return respObj;
}
