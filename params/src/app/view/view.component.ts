import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
public email;
  ngOnInit() {
    this.email=this.route.snapshot.paramMap.get('email');
  }

}
