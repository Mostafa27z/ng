import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SasaComponent } from './sasa/sasa.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PiPipe } from './pi.pipe';
import { TaskComponent } from './task/task.component';
import { ButtonComponent } from './button/button.component';
import {HttpClientModule } from '@angular/common/http';
import { InpComponent } from './inp/inp.component';
import { UpperDirective } from './upper.directive';
import { CustomFormsModule } from "ng2-validation";
@NgModule({
  declarations: [
    AppComponent,
    SasaComponent,
    NavComponent,
    AboutComponent,
    NotfoundComponent,
    PiPipe,
    TaskComponent,
    ButtonComponent,
    InpComponent,
    UpperDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
