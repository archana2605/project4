import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(public http:HttpClient,public config:ConfigService) { }

getData(){
  var response=this.http.get(this.config.getDataUrl);
  return response;
}


}
