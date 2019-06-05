import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformssComponent } from './reactiveformss/reactiveformss.component';
import { DrivenformssComponent } from './drivenformss/drivenformss.component';
import { RouterModule ,Routes} from '@angular/router';

const routing: Routes=[
{path:'ReactiveFormss', component:ReactiveformssComponent},
{path:'Drivenformss',component:DrivenformssComponent}
]


@NgModule({
  declarations: [ReactiveformssComponent, DrivenformssComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class FormsssModule { }
