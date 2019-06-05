import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivessDirective } from './directivess.directive';
import { DirectiveComponent } from './directive/directive.component';
import { RouterModule,Routes } from '@angular/router';
 const routing: Routes =[
   {path:'directives',component:DirectiveComponent}

  
 ]



@NgModule({
  declarations: [DirectivessDirective, DirectiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)

  ]
})
export class DirectivesModule { }
