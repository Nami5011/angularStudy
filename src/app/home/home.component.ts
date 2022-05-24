import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private _router: Router) { }

	ngOnInit(): void {
	}

	navigateToStudentList() {
		this._router.navigateByUrl('/studentList')
	}
	navigateToTeacherList() {
		this._router.navigateByUrl('/teacherList')
	}
	navigateToForm() {
		this._router.navigateByUrl('/form')
	}
}
