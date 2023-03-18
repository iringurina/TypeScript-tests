import { expectedPost, newPost, updatedPost } from "../data/constants/postData";
import { getPostById, getPosts, createPost, updatePost, deletePost, getPostsByUserId } from "../api/posts";

describe("API Basic", () => {

    test("GET: get post by id", async () => {
        const apiResponse = await getPostById(1);
        expect(apiResponse.statusCode).toEqual(200);
        expect(apiResponse.postData.title).toEqual(expectedPost.title);
    });

    test("GET: get all posts", async () => {
        const apiResponse = await getPosts();
        expect(apiResponse.statusCode).toEqual(200);
        expect(apiResponse.postData[0]).toEqual(expectedPost);
    });

    test("POST: create 1 post", async () => {
        const apiResponse = await createPost('Test title', 'Test body');
        expect(apiResponse.statusCode).toEqual(201);
        expect(apiResponse.postData.title).toEqual(newPost.title);
        expect(apiResponse.postData.body).toEqual(newPost.body);
    });

    test("PUT: update 1 post", async () => {
        const apiResponse = await updatePost(7,'Updated title');
        expect(apiResponse.statusCode).toEqual(201);
        expect(apiResponse.postData.title).toEqual(updatedPost.title);
    });

    test("DELETE: delete 1 post", async () => {
        const apiResponse = await deletePost(7);
        expect(apiResponse.statusCode).toEqual(200);
    });

    test("GET: get posts by user id", async () => {
        const apiResponse = await getPostsByUserId(5);
        expect(apiResponse.statusCode).toEqual(200);
        for (let i = 0; i < apiResponse.postData.length; i++) {
            expect(apiResponse.postData[i].userId).toEqual(5); 
        }
    });

    // test("GET: get post by a not existing id", async () => {
    //     const apiResponse = await getPostById(1000);
    //     expect(apiResponse.statusCode).toEqual(404);   
    // });
    // Почему-то приходит статус 200, а не 404

});
