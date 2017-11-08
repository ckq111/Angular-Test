import { Component, OnInit } from '@angular/core';
import { DatafetchserviceService } from '../../datafetchservice.service';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  constructor(public dataFetchService : DatafetchserviceService ) { }

  ngOnInit() {
    this.dataFetchService.getData()
      .subscribe(data =>console.log(data));
  }

}
