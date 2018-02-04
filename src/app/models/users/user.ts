export class User {

    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;

    user : any;
    editUser: boolean;
    addUser :  boolean;

    public setUser(userData){
        this.user = userData;
    };

    public getUser(): User{
        return this.user;
    };
}
