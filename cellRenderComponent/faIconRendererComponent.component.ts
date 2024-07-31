import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from 'ag-grid-community';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  imports: [FontAwesomeModule], // alternatively, individual components can be imported
  template: `
  <div>{{micsId}} <fa-icon  [icon]="faInfoCircle"  style="color:green"  title="{{value}}"></fa-icon></div>
  `,
})

export class FaIconRendererComponent implements ICellRendererAngularComp {
  faCoffee = faCoffee;
  faInfoCircle = faInfoCircle;
  accountId = 123
  savingsAccount = true
  mydata = {accountId: 123, savingsAccount:true }
  value = JSON.stringify(this.mydata)
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
      return true;
  }

}
