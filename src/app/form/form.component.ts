import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	textarea: string = '';

	constructor(private _router: Router) { }

	ngOnInit(): void {
	}

	navigateToHome() {
		this._router.navigateByUrl('')
	}
}
