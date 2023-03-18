import { expectedPost, newPost, updatedPost } from "../data/constants/postData";
import { getPostById, getPosts, createPost, updatePost, deletePost } from "../api/posts";

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

    test("GET: get post by a not existing id", async () => {
        const apiResponse = await getPostById(1000);
        expect(apiResponse.statusCode).toEqual(404);   
    });

});
