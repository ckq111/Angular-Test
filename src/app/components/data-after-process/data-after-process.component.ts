import { Component, OnInit } from '@angular/core';
import { DatafetchserviceService } from '../../datafetchservice.service';

@Component({
  selector: 'app-data-after-process',
  templateUrl: './data-after-process.component.html',
  styleUrls: ['./data-after-process.component.css']
})
export class DataAfterProcessComponent implements OnInit {
  dataFromServer = []; // Data received from json will be stored here.
  processedArray = []; // To store processed data
  constructor(public dataFetchService : DatafetchserviceService ) { }

  ngOnInit() {
    // On component init fetching data from data.json using service
    this.dataFetchService.getData()
      .subscribe(data => {
        this.dataFromServer = data;
        this.processInputData();
      });
  }
  // generate object that perfectly maps to UI requirement
  processInputData(){
    // From input array this will create array of unique 'names'
    let uniqueNames = [];
    this.dataFromServer.forEach((nextObj)=>{
      if(!uniqueNames.includes(nextObj.name))
        uniqueNames.push(nextObj.name);
    });
    // Now we will sort it to fulfill requirement
    uniqueNames.sort((a,b)=>{
      if(a>b) return 1;
      if(a<b) return -1;
      else return 0;
    });

    // Lastly forEach operation on unique name
    // values to fetch relevant category and amount from data fetched from server
    // and create separate object for each name property.
    uniqueNames.forEach((nextName)=>{
      let retObj = {name: nextName};
      this.dataFromServer.forEach((nextObj)=> {
        if(nextObj.name === nextName)
          retObj[nextObj.category] = nextObj.amount;
      });

      // Push new object for each unique name value
      this.processedArray.push(retObj);
    });
  }

}
