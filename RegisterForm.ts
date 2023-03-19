class RegisterForm{
    email: string;
    password: string;
    username: string;
    age: number;
    termsAgreement: boolean;
    registered: boolean;
    constructor (email: string, password: string, username: string, age: number, termsAgreement: boolean, registered: boolean) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.age = age;
        this.termsAgreement = termsAgreement;
        this.registered = registered;
    }
    setEmail(email: string) {
        let regexp = /(\w+\.)+\w+/g;
        if (email.match(regexp)) {
            this.email = email;    
        }
        else {
            console.log('email введен неверно');
        }
    }
    setPassword(password: string) {
        //let regexp = '/[0-9]/';
        if (password.length >= 8) { // && password.match(regexp)
            this.password = password;    
        }
        else {
            console.log('пароль должен содержать минимум 8 символов и минимум 1 цифру');
        }
    }
    setUsername(username: string) { 
        if (username.length > 0) { 
            this.username = username;    
        }
        else {
            console.log('username не введен');
        }
    }
    setAge(age: number) {
        if (age > 0 && age < 150) { 
            this.age = age;    
        }
        else {
            console.log('возраст должен быть в диапазоне от 0 до 150');
        }
    }
    agreeWithTerms() {
        this.termsAgreement = true;
    }
    register(email: string, password: string, username: string, age: number, termsAgreement: boolean) {
        this.setEmail(email);
        this.setPassword(password);
        this.setUsername(username);
        this.setAge(age);
        this.agreeWithTerms();
        this.registered = true;
        let registerDate = new Date();
        return (`The user was succeessfully registered on ${registerDate}`);  
    }    
}

export {RegisterForm}
