import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './components/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewCourseTypesComponent } from './components/view-course-types/view-course-types.component';
import { ManageCourseTypesComponent } from './components/manage-course-types/manage-course-types.component';
import { ViewInstructorsComponent } from './components/view-instructors/view-instructors.component';
import { ManageInstructorsComponent } from './components/manage-instructors/manage-instructors.component';
import { SlicePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ViewCourseTypesComponent,
    ManageCourseTypesComponent,
    MessageComponent,
    ViewInstructorsComponent,
    ManageInstructorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlicePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
