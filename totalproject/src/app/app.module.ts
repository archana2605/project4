import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{RouterModule,Routes} from '@angular/router';
import { FormvalidationsComponent } from './formvalidations/formvalidations.component';
import { ValidationsComponent } from './validations/validations.component';
import{FormsModule} from '@angular/forms';
import { Component2ndlevelComponent } from './component2ndlevel/component2ndlevel.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';



const routing: Routes =[
{path:'http',
loadChildren:'./http/http.module#HttpModule'},
{path:'formsss',
loadChildren:'./formsss/formsss.module#FormsssModule'},
{path:'binding',
loadChildren:'./binding/binding.module#BindingModule'},
{path:'pipes',
loadChildren:'./pipes/pipes.module#PipesModule'},
{path:'directives',
loadChildren:'./directives/directives.module#DirectivesModule'},
{path:'Formvalidations',component:FormvalidationsComponent},
 




]
@NgModule({
  declarations: [
    AppComponent,
    FormvalidationsComponent,
    ValidationsComponent,
    Component2ndlevelComponent,
    FormComponent,
    InputComponent,
    



    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
