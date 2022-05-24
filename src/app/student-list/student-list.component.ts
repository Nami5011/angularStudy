import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

	constructor(private _router: Router) { }

	ngOnInit(): void {
	}

	navigateToHome() {
		this._router.navigateByUrl('')
	}
}
