import { getAlbumById, getAlbums, addAlbum, getAlbumsByUserId } from "../api/albums"; 
import { expectedAlbum, newAlbum} from "../data/constants/albumData"; 

describe("API Albums", () => {

    test("GET: get album by id", async () => {
        const apiResponse = await getAlbumById(1);
        expect(apiResponse.statusCode).toEqual(200);
        expect(apiResponse.albumData.title).toEqual(expectedAlbum.title);
    });

    test("GET: get all albums", async () => {
        const apiResponse = await getAlbums();
        expect(apiResponse.statusCode).toEqual(200);
        expect(apiResponse.albumData[0]).toEqual(expectedAlbum);
    });

    test("POST: create 1 album", async () => {
        const apiResponse = await addAlbum('Test title', 1);
        expect(apiResponse.statusCode).toEqual(201);
        expect(apiResponse.albumData.title).toEqual(newAlbum.title);
        expect(apiResponse.albumData.userId).toEqual(newAlbum.userId);
    });

    test("GET: get albums by user id", async () => {
        const apiResponse = await getAlbumsByUserId(5);
        expect(apiResponse.statusCode).toEqual(200);
        for (let i = 0; i < apiResponse.albumData.length; i++) {
            expect(apiResponse.albumData[i].userId).toEqual(5); 
        }
    });
});