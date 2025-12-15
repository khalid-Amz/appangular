import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface StaticProduct {
  id: number;
  name: string;
  price: number;
}

interface InvoiceItem {
  product: StaticProduct;
  quantity: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {

  // 🔹 Produits statiques
  products: StaticProduct[] = [
    { id: 1, name: 'PC Portable', price: 6000 },
    { id: 2, name: 'Imprimante', price: 1200 },
    { id: 3, name: 'Clavier', price: 150 },
    { id: 4, name: 'Souris', price: 80 }
  ];

  invoice: InvoiceItem[] = [];

  addToInvoice(product: StaticProduct) {
    const item = this.invoice.find(i => i.product.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      this.invoice.push({ product, quantity: 1 });
    }
  }

  remove(item: InvoiceItem) {
    this.invoice = this.invoice.filter(i => i !== item);
  }

  getTotal(): number {
    return this.invoice.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
}
