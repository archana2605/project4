import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {
    public logindata:FormGroup;
    constructor(public fb:FormBuilder){

    }
    login()    {
        console.log(this.logindata.value)
    }
    ngOnInit(){
        this.logindata=this.fb.group({
            username:[null,Validators.required],
            password:[null,Validators.required]
        })
    }



/* REACTIVE FORMS
    inputgroup = new FormGroup({
    name:new FormControl('archana'),
    Email:new FormControl('')
});*/
/*
name=new FormControl('archana');
email=new FormControl('');*/
sendData(){
    /* console.log(this.name.value);
    console.log(this.Email.value);
    
  console.log(this.inputgroup.value);
   console.log('form working');
}
ngOnInit(){
    this.inputgroup=this.fb.group({
        name:['raghu'],
        Email:['']
    });
}*/
}
}






