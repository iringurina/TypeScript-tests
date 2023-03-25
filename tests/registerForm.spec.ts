import { RegisterForm } from "../RegisterForm";

describe("RegisterForm positive tests", () => {
    let newUser = new RegisterForm('initial@mail.com', 'initialPass', 'initialUsername', 20, false, false);
    
    test("Setting email", () => {
        newUser.setEmail('jonny@gmail.com');
        expect(newUser.email).toBe('jonny@gmail.com');   
    })

    test("Setting password", () => {
        newUser.setPassword('hello1234');
        expect(newUser.password).toBe('hello1234');   
    })

    test("Setting username", () => {
        newUser.setUsername('johny100');
        expect(newUser.username).toBe('johny100');   
    })

    test("Setting username with symbols", () => {
        newUser.setUsername('happy_jony!');
        expect(newUser.username).toBe('happy_jony!');   
    })

    test("Setting age", () => {
        newUser.setAge(30);
        expect(newUser.age).toBe(30);   
    })

    test("Setting terms agreement to true", () => {
        newUser.agreeWithTerms(true);
        expect(newUser.termsAgreement).toBe(true);   
    })

    test("User registration", () => {
        let successMessage = newUser.register('susan@mail.com', 'hello1234', 'susy', 16, true);
        console.log(successMessage);
        expect(newUser.email).toBe('susan@mail.com'); 
        expect(newUser.password).toBe('hello1234');
        expect(newUser.username).toBe('susy');
        expect(newUser.age).toBe(16);
        expect(newUser.termsAgreement).toBe(true);   
    })

})

describe("RegisterForm negative tests", () => {
    let newUser = new RegisterForm('initial@mail.com', 'initialPass', 'initialUsername', 18, false, false);
    
    test("Setting incorrect email - without domain part", () => {
        newUser.setEmail('jonny@');
        expect(newUser.email).toBe('initial@mail.com');   
    })

    test("Setting incorrect email - without username part", () => {
        newUser.setEmail('@mail');
        expect(newUser.email).toBe('initial@mail.com');   
    })

    test("Setting incorrect email - without @", () => {
        newUser.setEmail('jonnymail');
        expect(newUser.email).toBe('initial@mail.com');   
    })

    test("Setting incorrect password - < 8 symbols", () => {
        newUser.setPassword('hello1');
        expect(newUser.password).toBe('initialPass');   
    })

    test("Setting incorrect password - without a number", () => {
        newUser.setPassword('hellopass');
        expect(newUser.password).toBe('initialPass');   
    })

    test("Setting incorrect username - empty string", () => {
        newUser.setUsername('');
        expect(newUser.username).toBe('initialUsername');   
    })

    test("Setting incorrect age - negative number", () => {
        newUser.setAge(-10);
        expect(newUser.age).toBe(18);   
    })

    test("Setting incorrect age - 0", () => {
        newUser.setAge(0);
        expect(newUser.age).toBe(18);   
    })

    test("Setting incorrect age - > 150", () => {
        newUser.setAge(160);
        expect(newUser.age).toBe(18);   
    })

    test("Leaving terms agreement as false", () => {
        newUser.agreeWithTerms(false);
        expect(newUser.termsAgreement).toBe(false);   
    })

    test("User registration - without agreement with terms", () => {
        let errorMessage = newUser.register('susan@mail.com', 'susanpass1', 'susy', 16, false);
        console.log(errorMessage);
        expect(newUser.registered).toBe(false);   
    })

    test("User registration - with incorrect email", () => {
        let errorMessage = newUser.register('susan', 'susanpass1', 'susy', 16, true);
        console.log(errorMessage);
        expect(newUser.registered).toBe(false);   
    })

    test("User registration - with incorrect password", () => {
        let errorMessage = newUser.register('susan@mail.com', 'pass', 'susy', 16, true);
        console.log(errorMessage);
        expect(newUser.registered).toBe(false);   
    })

    test("User registration - with incorrect username", () => {
        let errorMessage = newUser.register('susan@mail.com', 'susanpass1', '', 16, true);
        console.log(errorMessage);
        expect(newUser.registered).toBe(false);   
    })

    test("User registration - with incorrect age", () => {
        let errorMessage = newUser.register('susan@mail.com', 'susanpass1', 'susy', 160, true);
        console.log(errorMessage);
        expect(newUser.registered).toBe(false);   
    })

}) 