import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit, OnDestroy {

  private subscription: any;
  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.subscription = this.clientService.collection.subscribe(
      (datas) => {
        console.log(datas);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
