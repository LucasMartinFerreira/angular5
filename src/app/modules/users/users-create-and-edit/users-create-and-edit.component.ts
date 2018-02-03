import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users/user';
import { UsersService } from '../../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './../../../app.component';
import { Router } from '@angular/router';


import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-users-create-and-edit',
	templateUrl: './users-create-and-edit.component.html',
	styleUrls: ['./users-create-and-edit.component.scss']
})
export class UsersCreateAndEditComponent implements OnInit {

	//Atributos que muestran u ocultan texto y/o botones.
	private hiddenAdd: boolean;
	private hiddenUpdate: boolean;
	private hiddenError: boolean;

	//formulario
	private userForm : FormGroup;

	

	//Constructor del componente
	constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router : Router, 
		private usersService: UsersService, private appComponent:AppComponent){

	}


	ngOnInit() {

		let changeView = this.route.routeConfig.path;

		

		if (null !== changeView && "" !== changeView && changeView.indexOf('users/add') > 0) {
			this.hiddenAdd = false;
			this.hiddenUpdate = true;
			
			//datos del formulario.
			this.userForm = this.formBuilder.group({
				id: [''],
				name:  ['', Validators.required],
				username:  ['', Validators.required],
				email: ['', Validators.required],
				phone: ['', Validators.required],
			});

		} else if (null !== changeView && "" !== changeView && changeView.indexOf('users/update') > 0) {
			this.hiddenUpdate = false;
			this.hiddenAdd = true;

			//Inicializamos el objeto usuario.
			this.route.queryParams.subscribe(params => {

				//datos del formulario.
				this.userForm = this.formBuilder.group({
					id: [params["id"]],
					name:  [params["name"], Validators.required],
					username:  [params["username"], Validators.required],
					email: [params["email"], Validators.required],
					phone: [params["phone"], Validators.required],
				});
			});
		}
	}

	//Funcion que realiza la llamada a crear usuario de la API.
	private addUser(){

		console.log("Añadir usuario...");

		let user = new User();		
		user.name = this.userForm.controls.name.value;
		user.username = this.userForm.controls.username.value;
		user.email = this.userForm.controls.email.value;
		user.phone = this.userForm.controls.phone.value;

		this.usersService.addUser(user).subscribe(
			result => {
				user = result;
				console.log('Usuario creado correctamente');
				this.appComponent.isLoadingActive = false;
				this.router.navigateByUrl(`blockListComponent/users`);
			},
			error => {
				console.log('Error al crear el usuario.');
				this.appComponent.isLoadingActive = false;
				this.router.navigateByUrl(`blockListComponent/users`);
			}
		);
	}


	//Función que realiza la actualización de un usuario.
	private updateUser(){

		console.log("Actualizar usuario...");
		
		let user = new User();		
		user.name = this.userForm.controls.name.value;
		user.username = this.userForm.controls.username.value;
		user.email = this.userForm.controls.email.value;
		user.phone = this.userForm.controls.phone.value;
		user.id = this.userForm.controls.id.value;

		this.usersService.updateUser(user).subscribe(
			result => {
				user = result;
				console.log('Usuario actualizado correctamente');
				this.appComponent.isLoadingActive = false;
				this.router.navigateByUrl(`blockListComponent/users`);
			},
			error => {
				console.log('Error al actualizar el usuario.');
				this.appComponent.isLoadingActive = false;
				this.router.navigateByUrl(`blockListComponent/users`);
			}
		);
	}

	//El botón volver, regresa al listado.
	private volverListado(){
		this.router.navigateByUrl(`blockListComponent/users`);
	}
}