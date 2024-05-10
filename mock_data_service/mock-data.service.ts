// mock-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyData } from './my-data.model'; // Assuming you have a data model

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getData(): Observable<MyData[]> {
    // Return mock data here
    const mockData: MyData[] = [
      { id: 1, name: 'Mock Item 1' },
      { id: 2, name: 'Mock Item 2' },
      // Add more mock data as needed
    ];
    return of(mockData);
  }
}
