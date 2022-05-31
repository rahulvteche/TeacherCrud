import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
//  import { NgModel } from '@angular/forms';
//  import  {FormGroup } from '@angular/forms'
// import { NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDataComponent,
      
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // FormGroup, CommonModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
