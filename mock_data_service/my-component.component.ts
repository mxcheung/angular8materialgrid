// my-component.component.ts
import { Component, OnInit } from '@angular/core';
import { MyData } from './my-data.model';
import { DataService } from './data.service'; // Your actual data service
import { MockDataService } from './mock-data.service'; // Your mock data service

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {
  data: MyData[];

  constructor(private dataService: DataService, private mockDataService: MockDataService) { }

  ngOnInit(): void {
    // Inject either the real data service or the mock data service based on your environment
    // For example, you could use environment variables or configuration settings to determine this
    const useMockService = true; // Set this based on your environment
    if (useMockService) {
      this.mockDataService.getData().subscribe(data => this.data = data);
    } else {
      this.dataService.getData().subscribe(data => this.data = data);
    }
  }
}
