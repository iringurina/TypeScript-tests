import { IPost } from "../models/postModel";
import { INewPost } from "../models/postModel";

export const expectedPost: IPost = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
export const newPost: INewPost = {
    "title": "Test title",
    "body": "Test body"
}
export const updatedPost: IPost = {
    "userId": 1,
    "id": 7,
    "title": "Updated title",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
}