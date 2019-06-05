import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
input_value;
@Input() lable_name;
@Output() outputdata=new EventEmitter();
constructor(){}
//data from input
datafromInput(){
  this.outputdata.emit(this.input_value);
  
}
ngOnInit(){

}
}
