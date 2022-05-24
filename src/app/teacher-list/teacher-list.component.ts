import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-teacher-list',
	templateUrl: './teacher-list.component.html',
	styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

	constructor(private _router: Router) { }

	ngOnInit(): void {
	}

	navigateToHome() {
		this._router.navigateByUrl('')
	}
}
