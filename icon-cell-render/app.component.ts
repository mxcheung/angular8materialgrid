import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Icon', field: 'icon', cellRenderer: 'iconCellRenderer' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, icon: '👍' },
    { make: 'Ford', model: 'Mondeo', price: 32000, icon: '🚗' },
    { make: 'Porsche', model: 'Boxster', price: 72000, icon: '🏎️' }
  ];

  frameworkComponents = {
    iconCellRenderer: IconCellRendererComponent
  };
}
