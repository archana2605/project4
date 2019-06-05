
// INPUT
import { Component, OnInit, Input } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-component2ndlevel',
  templateUrl: './component2ndlevel.component.html',
  styleUrls: ['./component2ndlevel.component.css']
})
export class Component2ndlevelComponent implements OnInit {
  @Input() archana;
  @Input() anusha;
  @Input() headding;
  @Input() akshitha;
  @Input() Sugan;
  constructor() { }

  ngOnInit() {
  }

}
