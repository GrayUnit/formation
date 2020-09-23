import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  private subscription: any;
  constructor(private ordersService: OrdersService) { }

  public orders: Order[] = [];
  ngOnInit(): void {
    this.subscription = this.ordersService.collection.subscribe(
      (datas) => {
        console.log(datas);
        let listOrders = [];
        datas.forEach((data) => {
          let order = new Order(data);
          this.orders.push(order);
        });

        this.orders.forEach((order) => {
          console.log(order.totalHt());
        })
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
