import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth';
import { ProductsComponent } from './components/products/products';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AuthComponent },
    { path: 'products', component: ProductsComponent },
    { path: '**', redirectTo: 'login' }
];
