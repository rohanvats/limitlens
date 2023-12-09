import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getCartData();
  }

  getCartData() {
    this.dataService.getCartData().subscribe((data) => {
      this.cartItems = data;
    });
  }

  getTotalPrice() {
    if (this.cartItems.length > 0) {
      return this.cartItems.reduce((acc: number, el: any) => {
        return acc + el?.price;
      }, 0);
    }
  }
}
