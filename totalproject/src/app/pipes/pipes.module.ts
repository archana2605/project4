import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalpipesComponent } from './normalpipes/normalpipes.component';
import { ParameterpassingComponent } from './parameterpassing/parameterpassing.component';
import { RouterModule ,Routes} from '@angular/router';

const routing: Routes=[
{path:'Normalpipes',component:NormalpipesComponent},
{path:'Parameterpassing',component:ParameterpassingComponent}

]



@NgModule({
  declarations: [NormalpipesComponent, ParameterpassingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class PipesModule { }
