import { Component } from '@angular/core';

@Component({
  selector: 'icon-cell-renderer',
  template: `<span>{{params.value}}</span>`
})
export class IconCellRendererComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
