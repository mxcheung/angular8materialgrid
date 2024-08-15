import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service'; // Adjust the import to your service

@Component({
  selector: 'app-my-component',
  template: `
    <select>
      <option *ngFor="let client of clients" [value]="client.key">
        {{ client.value }}
      </option>
    </select>
  `,
})
export class MyComponent implements OnInit {
  clients: { key: string, value: string }[] = [];

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.getClients().subscribe((data: string[]) => {
      this.clients = data.map(client => ({ key: client, value: client }));
    });
  }
}
