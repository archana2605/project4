import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpService {
public ip='http://localhost:3000/';
  constructor() { }
}
