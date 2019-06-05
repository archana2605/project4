// OUTPUT:-


import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
public inp;
  constructor() { }
@Output() srinivas=new EventEmitter();

pushdata(){
  console.log('input component',this.inp);
  this.srinivas.emit(this.inp);
}

  ngOnInit() {
  }

}
