
// OUTPUT:-

import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  @Output() rakesh=new EventEmitter();
  pushdata(data){
    console.log('form component',data);
    this.rakesh.emit(data);
  }
  ngOnInit() {
  }

}
