import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-recap-order',
  templateUrl: './page-recap-order.component.html',
  styleUrls: ['./page-recap-order.component.scss']
})
export class PageRecapOrderComponent implements OnInit {

  public collectionOrders$: Observable<Order[]>;
  public states = Object.values(StateOrder);
  public tableHeaders: string[];

  constructor(
    private orderService: OrdersService,
    private clientService: ClientsService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.collectionOrders$ = this.currentRoute.paramMap.pipe(
    //   switchMap(
    //     (params: ParamMap) => {
    //       return this.clientService.getItemById(params.get("id")).pipe(
    //         switchMap(
    //           (client) => {
    //             return this.orderService.getOrderByClientName(client.name);
    //           }
    //         )
    //       )
    //     }
    //   )
    // )
    this.collectionOrders$ = this.currentRoute.paramMap.pipe(
      mergeMap(
        (params: ParamMap) => {
          return this.clientService.getItemById(params.get("id")).pipe(
            mergeMap(
              (client) => {
                return this.orderService.getOrderByClientName(client.name);
              }
            )
          )
        }
      )
    )
    this.tableHeaders = [
      "Type",
      "Client",
      "Nb. Jour",
      "Tjm Ht",
      "Total Ht",
      "Total TTC",
      "State",
      "Actions"
    ]

  }

  public changeState(item: Order, event) {
    this.orderService.changeState(item, event.target.value).subscribe(
      (result) => {
       item.state = result.state;
    }, (error) => {
      event.target.value = item.state;
    });
  }

}
