import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-create-and-edit',
  templateUrl: './users-create-and-edit.component.html',
  styleUrls: ['./users-create-and-edit.component.scss']
})
export class UsersCreateAndEditComponent implements OnInit {

	private hiddenAdd :  boolean;

	private hiddenUpdate : boolean;

	private hiddenError : boolean;


	constructor() { 

		this.hiddenAdd = false;
		this.hiddenUpdate = true;
		this.hiddenError = true;

	}

	ngOnInit() {

		
	}


	private addUser(){

		console.log("Add user function");
	}



	private updateUser(){

		console.log("Update user function");
	}

}
