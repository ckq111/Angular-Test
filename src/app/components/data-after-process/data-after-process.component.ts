import { Component, OnInit } from '@angular/core';
import { DatafetchserviceService } from '../../datafetchservice.service';

@Component({
  selector: 'app-data-after-process',
  templateUrl: './data-after-process.component.html',
  styleUrls: ['./data-after-process.component.css']
})
export class DataAfterProcessComponent implements OnInit {
  dataFromServer = []; // Data received from json will be stored here.
  processedArray = []; // After receiving we can update
  constructor(public dataFetchService : DatafetchserviceService ) { }

  ngOnInit() {
    this.dataFetchService.getData()
      .subscribe(data => {
        this.dataFromServer = data
        this.testProcessData();
      });
  }
  testProcessData(){
    let uniqueNames = [];
    this.dataFromServer.forEach((nextObj)=>{
      if(!uniqueNames.includes(nextObj.name))
        uniqueNames.push(nextObj.name);
    });
    uniqueNames.sort((a,b)=>{
      if(a>b) return 1;
      if(a<b) return -1;
      else return 0;
    });
    uniqueNames.forEach((nextName)=>{
      let retObj = {name: nextName};
      this.dataFromServer.forEach((nextObj)=> {
        if(nextObj.category === 'C1' && nextObj.name === nextName)
          retObj['C1'] = nextObj.amount;
        if(nextObj.category === 'C2' && nextObj.name === nextName)
          retObj['C2'] = nextObj.amount;
        if(nextObj.category === 'C3' && nextObj.name === nextName)
          retObj['C3'] = nextObj.amount;
      });

      console.log(retObj);
      this.processedArray.push(retObj);
    });
  }

}
