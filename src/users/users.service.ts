import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users =[
        {
            id: 1,
            name: 'John Doe',
            age: 25
        },
        {
            id: 2,
            name: 'Jane Doe',
            age: 26
        }
    ];

    getUser() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(user => user.id == id);
    }

    createUser(user: { id: number; name: string; age: number; }) {
        this.users.push(user);
        return user;
    }

    deleteUser(id: number) {
        this.users = this.users.filter(user => user.id != id);
        return this.users;
    }
}
