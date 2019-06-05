import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpworkComponent } from './httpwork/httpwork.component';
import { ServicesComponent } from './services/services.component';
import {RouterModule,Routes} from '@angular/router';
const routing:Routes =[
  {path:'httpwork',component:HttpworkComponent},
  {path:'services',component:ServicesComponent}
]
@NgModule({
  declarations: [HttpworkComponent, ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class HttpModule { }
