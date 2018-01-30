import { Component, OnInit,Input } from '@angular/core';
import { User } from '../../../models/users/user';



@Component({
  selector: 'app-users-create-and-edit',
  templateUrl: './users-create-and-edit.component.html',
  styleUrls: ['./users-create-and-edit.component.scss']
})
export class UsersCreateAndEditComponent implements OnInit {

	private hiddenAdd :  boolean;

	private hiddenUpdate : boolean;

	private hiddenError : boolean;s

 	private user: User;

	constructor() { 

		this.user = new User();
		

		this.hiddenAdd = false;
		this.hiddenUpdate = true;
		this.hiddenError = true;


		
		this.user.name = "name0asfd";

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
