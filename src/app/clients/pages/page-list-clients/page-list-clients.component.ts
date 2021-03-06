import { Component, OnDestroy, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit, OnDestroy {

  private subscription: any;
  public headersClient: string[];
  public collectionClient: Client[];

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.collection.subscribe(
      (datas) => {
       this.collectionClient = datas;
      }
    );
    this.headersClient = [
      "Nom",
      "Chiffre d'affaire",
      "Commentaire",
      "Etat",
      "TVA",
      "Actions"
    ]
  }

  public deleteItem(item: Client) {
    this.clientService.deleteItem(item).subscribe(
      (result) => {
        this.clientService.collection.subscribe(
          (datas) => {
            this.collectionClient = datas;
          }
        )
      }
    )
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

}
