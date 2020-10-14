import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { InvalidMessageDirective } from './invalid-message.directive';

@Directive({
  selector: '[invalidType]'
})
export class InvalidTypeDirective implements OnInit {

  @Input() invalidType: string;

  constructor(
    private invalidMessage: InvalidMessageDirective,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {
    this.invalidMessage.controlValue$.subscribe(
      () => {
        this.setVisible();
      }
    )
  }

  private setVisible() {
    console.log(this.invalidType)
    if(this.invalidMessage.match(this.invalidType)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
