import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'studentList', component: StudentListComponent },
	{ path: 'teacherList', component: TeacherListComponent },
	{ path: 'form', component: FormComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingConponent = [
	StudentListComponent,
	TeacherListComponent,
	FormComponent,
	HomeComponent
]