import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orderItems: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getCartData();
  }

  getCartData() {
    this.dataService.getCartData().subscribe((data) => {
      this.orderItems = data;
    });
  }
}
