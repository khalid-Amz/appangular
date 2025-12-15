import { Injectable } from '@angular/core';
import { db } from '../db/app-db';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

    getAll() {
        return db.products.toArray();
    }

    add(product: Product) {
        return db.products.add(product);
    }

    delete(id: number) {
        return db.products.delete(id);
    }
}
