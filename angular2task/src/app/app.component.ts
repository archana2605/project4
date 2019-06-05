import { Component, OnInit } from '@angular/core';

import {HttpService} from '../app/http.service';


@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(public http: HttpService){}

  FormData={
    name:null,
    email:null,
    phone:null,
    state:null,
    city:null,
  }
  private data;
  private data1;
lableData = {
name: "Enter Name",
email: "Enter Email",
phone: "Enter Phone",
city: "Enter City",
state: "Enter State",
}
//constructor
// constructor(private http:HttpClient){

// }
//end
nameOutput(data) {
  this.FormData.name = data;
}
emailOutput(data) {
  this.FormData.email = data;
}
phoneOutput(data) {
  this.FormData.phone = data;

}
stateOutput(data) {
  this.FormData.state = data;

}
cityOutput(data) {
  this.FormData.city = data;

}
createAccount(){
  console.log(this.FormData)
}
//start
getState(){
  this.http.getData()
  .subscribe(
    (success)=>{
      console.log(success)
      this.data=success;
    },
    (error)=>{

    }
  );
}

//end
//city
getcity(){
  this.http.getData()
  .subscribe(
    (success)=>{
      console.log(success)
      this.data1=success;
    },
    
(error)=>{

}
  );
}
//end
ngOnInit(){
  this.getState();
  this.getcity();
}

}


  // // GET DATA:-
  // //public fm=new hostviewClassName(); //style
  // constructor(public http:HttpClient ){
  // }
  // public data:any;
  // ngOnInit(){
  //   this.http.get('http://localhost:3000/users')
  //   .subscribe(
  //     (success:any)=>{
  //       console.log(success);
  //       this.data=success;
  //     },
  //     (fail)=>{
  //       console.log(fail);
  //       this.data=fail;

  //     }
  //   )
 //   }














  
