import { Injectable } from '@angular/core';
import { db } from '../db/app-db';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    register(user: User) {
        return db.users.add(user);
    }

    async login(username: string, password: string): Promise<boolean> {
        const user = await db.users.where('username').equals(username).first();
        return !!(user && user.password === password);
    }
}
