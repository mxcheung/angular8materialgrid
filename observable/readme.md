```
import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service'; // Adjust the import to your service
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-component',
  template: `
    <select>
      <option *ngFor="let client of clients | async" [value]="client.key">
        {{ client.value }}
      </option>
    </select>
  `,
})
export class MyComponent implements OnInit {
  clients: Observable<{key: string, value: string}[]>;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.clients = this.myService.getClients().pipe(
      map(clients => 
        clients.map(client => ({ key: client, value: client }))
      )
    );
  }
}
```
