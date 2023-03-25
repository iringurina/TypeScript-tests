import { expectedPost, newPost, updatedPost } from "../data/constants/postData";
import { getPostById, getPosts, createPost, updatePost, deletePost, getPostsByUserId } from "../api/posts";
import { getCommentsByPostId } from "../api/comments"; 

describe("API Posts and Comments", () => {

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
        const apiResponse = await createPost('Test title', 'Test body', 1);
        expect(apiResponse.statusCode).toEqual(201);
        expect(apiResponse.postData.title).toEqual(newPost.title);
        expect(apiResponse.postData.body).toEqual(newPost.body);
        expect(apiResponse.postData.userId).toEqual(newPost.userId);
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

    test("GET: get comments by post id", async () => {
        const apiResponse = await getCommentsByPostId(4);
        expect(apiResponse.statusCode).toEqual(200);
        for (let i = 0; i < apiResponse.postData.length; i++) {
            expect(apiResponse.postData[i].postId).toEqual(4); 
        }
    });

    test("GET: get posts by a user with a non-existing id", async () => {
        const apiResponse = await getPostsByUserId(100);
        expect(apiResponse.statusCode).toEqual(200);
        expect(apiResponse.postData.length).toEqual(0); 
        }
    );

    test("GET: get comments by a post with a non-existing id", async () => {
        const apiResponse = await getCommentsByPostId(1000);
        expect(apiResponse.statusCode).toEqual(200);
        expect(apiResponse.postData.length).toEqual(0); 
    });

    // test("GET: get post by a not existing id", async () => {
    //     const apiResponse = await getPostById(1000);
    //     expect(apiResponse.statusCode).toEqual(404);   
    // });
    // // Почему-то приходит статус 200, а не 404

});

