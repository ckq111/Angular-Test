import { Component, OnInit } from '@angular/core';
import { DatafetchserviceService } from '../../datafetchservice.service';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  dataFromServer = []; // Data received from json will be stored here.
  sortCol = ''; // last sorted column
  static sortDir: number; // sorting direction - static as we need to access it from sort function.
  constructor(public dataFetchService : DatafetchserviceService ) { }

  ngOnInit() {
    DisplaydataComponent.sortDir = 1; // default value
    // Fetch data from server using service
    this.dataFetchService.getData()
      .subscribe(data => {
        this.dataFromServer = data
      });
  }


  sortData =(col: string)=>{
    // check if same column is clicked
    if(this.sortCol === col) DisplaydataComponent.sortDir = DisplaydataComponent.sortDir * -1;
    this.sortCol = col;
    // Enhanced sort operation to sort object array.
    this.dataFromServer.sort((a,b)=> {
      if (a[col] > b[col]) return 1 * DisplaydataComponent.sortDir;
      if (a[col] < b[col]) return -1 * DisplaydataComponent.sortDir;
      return 0;
    });
  }

}
