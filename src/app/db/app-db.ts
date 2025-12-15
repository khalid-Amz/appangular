import Dexie, { Table } from 'dexie';
import { User } from '../models/user.model';
import { Product } from '../models/product.model';

export class AppDB extends Dexie {
    users!: Table<User, number>;
    products!: Table<Product, number>;

    constructor() {
        super('FacturationDB');

        this.version(1).stores({
            users: '++id, username, role',
            products: '++id, name, price'
        });
    }
}

export const db = new AppDB();
