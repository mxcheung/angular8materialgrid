import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CompanyLogoRenderer } from './companyLogoRenderer.component';
import { MissionResultRenderer } from "./missionResultRenderer.component";
import { PriceRenderer } from "./priceRenderer.component";
import { CompanyRenderer } from "./companyRenderer.component";
import { CustomButtonComponent  } from './customButtonComponent.component';
import { FaIconRendererComponent  } from './faIconRendererComponent.component';


// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular, FontAwesomeModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
  title = 'cii-demo-client';

  themeClass = "ag-theme-quartz";
  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true,  "company": "Oracle",  "website": "https://www.oracle.com/", logo: "oracle", revenue: 49950000000, hardware: false  },
    { make: "Ford", model: "F-Series", price: 33850, electric: true,  "company": "Microsoft", "website": "https://www.microsoft.com/",logo: "microsoft", revenue: 2502000000, hardware: true   },
    { make: "Toyota", model: "Corolla", price: 29600, electric: true,  "company": "Meta",  "website": "https://www.meta.com/", logo: "meta", revenue: 32000000000, hardware: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
    { field: "mics account" , cellRenderer: FaIconRendererComponent },
    { field: "company"  },
    { field: "website" , cellRenderer: CompanyRenderer },
    { field: "logo" , cellRenderer: CompanyLogoRenderer },
    { field: "revenue" , cellRenderer: PriceRenderer },
    { field: "hardware" , cellRenderer: MissionResultRenderer },
    { field: "actions" , cellRenderer: CustomButtonComponent }



  ];
  defaultColDef: ColDef = {
    flex: 10,
  };



}
