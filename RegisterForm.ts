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
    setEmail(email: string): boolean {
        let regexp = /(\w+\.)+\w+/g;
        if (email.match(regexp)) {
            this.email = email;
            return true;    
        }
        else {
            console.log('email введен неверно');
            return false;
        }
    }
    setPassword(password: string): boolean {
        let regexp = /\d/;
        if (password.length >= 8 && password.match(regexp)) { 
            this.password = password;
            return true;    
        }
        else {
            console.log('пароль должен содержать минимум 8 символов и минимум 1 цифру');
            return false;
        }
    }
    setUsername(username: string): boolean { 
        if (username.length > 0) { 
            this.username = username;
            return true;    
        }
        else {
            console.log('username не введен');
            return false;
        }
    }
    setAge(age: number): boolean {
        if (age > 0 && age < 150) { 
            this.age = age;
            return true;    
        }
        else {
            console.log('возраст должен быть в диапазоне от 0 до 150');
            return false;
        }
    }
    agreeWithTerms(agree: boolean): boolean {
        if (agree) {
            this.termsAgreement = true;
            return true;
        }
        else {
            console.log('для регистрации необходимо согласие с условиями');
            return false;
        }
    }
    register(email: string, password: string, username: string, age: number, agree: boolean): string {
        if (this.setEmail(email) && (this.setPassword(password)) && (this.setUsername(username)) && (this.setAge(age)) && this.agreeWithTerms(agree)) {
            this.registered = true;
            let registerDate = new Date();
            return (`пользователь был зарегистрирован ${registerDate}`); 
        }
        else {
            return (`пользователь не был зарегистрирован из-за проблемы, указанной выше`);
        } 
    }    
}

export {RegisterForm}
