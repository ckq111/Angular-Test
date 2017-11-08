import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DatafetchserviceService {

  constructor(public http: Http) { }

  getData(){
    return this.http.get('assets/data.json')
      .map(result => result.json());
  }
}
