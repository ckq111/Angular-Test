import { Component, OnInit } from '@angular/core';
import { DatafetchserviceService } from '../../datafetchservice.service';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  dataFromServer = [];
  sortCol = '';
  static sortDir: number;
  constructor(public dataFetchService : DatafetchserviceService ) { }

  ngOnInit() {
    DisplaydataComponent.sortDir = 1;
    this.dataFetchService.getData()
      .subscribe(data => this.dataFromServer = data);
  }

  sortData =(col: string)=>{
    if(this.sortCol === col) DisplaydataComponent.sortDir = DisplaydataComponent.sortDir * -1;
    this.sortCol = col;
    this.dataFromServer.sort(function(a,b) {
      if (a[col] > b[col]) return 1 * DisplaydataComponent.sortDir;
      if (a[col] < b[col]) return -1 * DisplaydataComponent.sortDir;
      return 0;
    });
  }

}
