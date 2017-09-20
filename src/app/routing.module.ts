    import { NgModule } from '@angular/core';
    import { RouterModule } from '@angular/router';
    import { AppComponent } from './app.component';
    import { LecturerinfoComponent } from './lecturerinfo/lecturerinfo.component';
    import { LecturesComponent } from './lectures/lectures.component';
    import { CourseComponent } from './course/course.component';


    @NgModule({
        imports:[
            RouterModule.forRoot([
             {  path:'',redirectTo:'/lecturerinfo',pathMatch:"full" },
             {  path:'lecturerinfo',component: LecturerinfoComponent},
             { path:'lectures',component:LecturesComponent },
             { path:'course',component: CourseComponent},


            ]),
        ],
        exports:[
            RouterModule
        ]

    })

        export class RoutingModule{} 