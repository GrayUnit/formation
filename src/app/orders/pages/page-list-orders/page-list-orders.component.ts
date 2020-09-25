import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  private subscription: any;
  public collectionOrders$: Observable<Order[]>;
  public headers: string[];
  public states = Object.values(StateOrder);
  constructor(
    private ordersService: OrdersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.collectionOrders$ = this.ordersService.collection;
    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
      'Actions'
    ];
  }

  public changeState(item: Order, event) {
    this.ordersService.changeState(item, event.target.value).subscribe(
      (result) => {
       item.state = result.state;
    }, (error) => {
      event.target.value = item.state;
    });
  }


  public edit(item: Order) {
    this.router.navigate(["orders", "edit", item.id])
  }

  public testButton() {
    alert("Click sur le bouton");
  }


  ngOnDestroy(): void {
  }
}
