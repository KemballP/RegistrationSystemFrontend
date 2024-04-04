import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCourseTypesComponent } from './components/view-course-types/view-course-types.component';
import { ManageCourseTypesComponent } from './components/manage-course-types/manage-course-types.component';
import { ViewInstructorsComponent } from './components/view-instructors/view-instructors.component';
import { ManageInstructorsComponent } from './components/manage-instructors/manage-instructors.component';

const routes: Routes = [
  { path: 'course-types', component: ViewCourseTypesComponent },
  { path: 'manage-course-type', component: ManageCourseTypesComponent },
  { path: 'manage-course-type/:id', component: ManageCourseTypesComponent },
  { path: 'instructors', component: ViewInstructorsComponent },
  { path: 'manage-instructors', component: ManageInstructorsComponent },
  { path: 'manage-instructors/:id', component: ManageInstructorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
