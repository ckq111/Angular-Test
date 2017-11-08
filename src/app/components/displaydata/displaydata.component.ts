import { Component, OnInit } from '@angular/core';
import { DatafetchserviceService } from '../../datafetchservice.service';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  dataFromServer = [];
  processedArray = [];
  sortCol = '';
  static sortDir: number;
  constructor(public dataFetchService : DatafetchserviceService ) { }

  ngOnInit() {
    DisplaydataComponent.sortDir = 1;
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
