import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/users/user';
import { UsersService } from '../../../services/users/users.service';
import { AppComponent } from './../../../app.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'app-users-create-and-edit',
	templateUrl: './users-create-and-edit.component.html',
	styleUrls: ['./users-create-and-edit.component.scss']
})
export class UsersCreateAndEditComponent implements OnInit {

	//Objeto usuario.
	public user: User;

	//Atributos que muestran u ocultan texto y/o botones.
	private hiddenAdd: boolean;
	private hiddenUpdate: boolean;
	private hiddenError: boolean;


	//Constructor de la clase.
	constructor(public router : Router, public usersService: UsersService, public appComponent: AppComponent, private route: ActivatedRoute) {

	}

	//Inicialización de atributos.
	ngOnInit() {

		this.hiddenError = true;

		let changeView = this.route.routeConfig.path;

		console.log('URL?¿?', changeView)

		if (null !== changeView && "" !== changeView && changeView.indexOf('users/add') > 0) {
			this.hiddenAdd = false;
			this.hiddenUpdate = true;
			//Inicializamos el objeto usuario.
			this.user = new User();

		} else if (null !== changeView && "" !== changeView && changeView.indexOf('users/update') > 0) {
			this.hiddenUpdate = false;
			this.hiddenAdd = true;
			//Inicializamos el objeto usuario. Cuando enlacemos con la vista del listado no haria falta.
			this.user = new User();
		}

	}


	//Función que crea un nuevo usuario.
	private addUser() {

		//mostramos el spinner
		this.appComponent.isLoadingActive = true;

		if (this.validateUser()) {
			console.log("El usuario es correcto.");

			this.usersService.addUser(this.user).subscribe(
				result => {
					this.user = result;
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

		} else {
			console.log("El usuario no es correcto.");
			this.hiddenError = false;
			this.appComponent.isLoadingActive = false;
		}
	}


	//Función que actualiza un nuevo usuario.
	private updateUser() {

		//mostramos el spinner
		this.appComponent.isLoadingActive = true;

		if (this.validateUser()) {
			console.log("El usuario es correcto.");

			this.usersService.updateUser(this.user).subscribe(
				result => {
					this.user = result;
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

		} else {
			console.log("El usuario no es correcto.");
			this.hiddenError = false;
			this.appComponent.isLoadingActive = false;
		}
	}

	//El botón volver, regresa al listado.
	private volverListado(){
		this.router.navigateByUrl(`blockListComponent/users`);
	}







	//Validamos que todos los datos del usuario esten rellenos.
	private validateUser() {

		let validUser: boolean = true;

		if (null === this.user || null == this.user.name || null === this.user.username || null == this.user.email
			|| null == this.user.phone || "" === this.user.name || "" === this.user.username ||
			"" === this.user.email || "" === this.user.phone) {
			console.log("Usuario no válido.");
			validUser = false;
		}

		return validUser;
	}

}
