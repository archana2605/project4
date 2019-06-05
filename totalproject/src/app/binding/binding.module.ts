import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { RouterModule,Routes} from '@angular/router';
import { TwowayComponent } from './twoway/twoway.component';

const routing: Routes =[
  
  {path:'onewaybinding',component:OnewaybindingComponent},
  {path:'twoway',component:TwowayComponent}
  
  
  ]





@NgModule({
  declarations: [OnewaybindingComponent,  TwowayComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class BindingModule { }
