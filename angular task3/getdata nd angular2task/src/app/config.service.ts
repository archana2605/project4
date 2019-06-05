import { Injectable } from '@angular/core';
import {IpService} from './ip.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(public ip:IpService) { }
  public getDataUrl=this.ip.ip+'data';
  public postUser=this.ip.ip+'data1';
  
}
