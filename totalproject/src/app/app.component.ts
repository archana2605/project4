import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // OUTPUT:-
inp='Enter Name';
name;
abc(data){
  console.log('app component',data);
  this.name=data;
}
}
   



//THIS IS FOR INPUT:-

// hd1="user Data";
// hd2="employ data";

// arc="employeedata";

  
// data=[
// {sno:1,name:'archana',email:'archana@kalwala@gmail.com',phone:9867589045},
// {sno:2,name:'archana',email:'archana@kalwal@gmail.com',phone:4680567322},
// {sno:3,name:'archana',email:'archana@kalwal@gmail.com',phone:4680567322},
// {sno:4,name:'archana',email:'archana@kalwal@gmail.com',phone:4680567322}

// ];
// dat2=a[
// {sno:1,name:'sandhya',email:'sandhya@gamil.com',phone:97930210134},
// {sno:2,name:'appu',email:'appu@gmail.com',phone:543765983333333333},
// {sno:2,name:'appu',email:'appu@gmail.com',phone:543765983333333333},
// {sno:2,name:'appu',email:'appu@gmail.com',phone:543765983333333333},
// ]

