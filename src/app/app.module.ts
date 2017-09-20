import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { LecturerinfoComponent } from './lecturerinfo/lecturerinfo.component';
import { LecturesComponent } from './lectures/lectures.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    LecturerinfoComponent,
    LecturesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
