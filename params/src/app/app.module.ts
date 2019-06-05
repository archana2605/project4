import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import  {HomeComponent} from './home/home.component';
import { PhonehidePipe } from './phonehide.pipe';
import { RouterModule ,Routes} from '@angular/router';

const routing: Routes =[
  {path:'',component:HomeComponent},
  {path:'view/:email',component:ViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HomeComponent,
    PhonehidePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
