import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  public form: FormGroup;
  @Input() public order = new Order();
  public states = Object.values(StateOrder);
  @Output() clicked: EventEmitter<Order> = new EventEmitter();

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formB.group({
      tjmHt: [this.order.tjmHt, Validators.compose([Validators.required, Validators.minLength(3)])],
      nbJours: [this.order.nbJours],
      tva: [this.order.tva],
      state: [this.order.state],
      client: [this.order.client, Validators.compose([Validators.required, Validators.minLength(3)])],
      comment: [this.order.comment, Validators.minLength(2)],
      typePresta: [this.order.typePresta],
      id: [this.order.id]
    });
  }

  public onSubmit() {
    if(this.form.invalid) {
      alert("Veuillez corriger le formulaire");
    } else {
      this.clicked.emit(this.form.value);
    }
  }

}
