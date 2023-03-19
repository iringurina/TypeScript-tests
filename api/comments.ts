import superagent from 'superagent';

const baseUrlComments = 'https://jsonplaceholder.typicode.com/comments';

export async function getCommentsByPostId(reqId: number) {  
    const response = await superagent.get(baseUrlComments).query({postId: reqId})
    const respObj = {
        statusCode: response.statusCode,
        postData: response.body
    };
    console.log(respObj.statusCode);
    console.log(respObj.postData);
    return respObj;
}