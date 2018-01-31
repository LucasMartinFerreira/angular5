import { Component, OnInit,Input } from '@angular/core';
import { User } from '../../../models/users/user';
import { UsersService } from '../../../services/users/users.service';
import { AppComponent} from './../../../app.component';

@Component({
  selector: 'app-users-create-and-edit',
  templateUrl: './users-create-and-edit.component.html',
  styleUrls: ['./users-create-and-edit.component.scss']
})
export class UsersCreateAndEditComponent implements OnInit {

	//Objeto usuario.
	public user : User;

	//Atributos que muestran u ocultan texto y/o botones.
	private hiddenAdd :  boolean;
	private hiddenUpdate : boolean;
	private hiddenError : boolean;

 	
	//Constructor de la clase.
	constructor(public usersService: UsersService, public appComponent:AppComponent) { 

	}

	//Inicialización de atributos.
	ngOnInit() {

		this.hiddenAdd = false;
		this.hiddenUpdate = true;
		this.hiddenError = true;

		//Inicializamos el objeto usuario.
		this.user = new User();		
	}


	//Función que crea un nuevo usuario.
	private addUser(){
		
		//mostramos el spinner
		this.appComponent.isLoadingActive = true;

		if(this.validateUser()){
			console.log("El usuario es correcto.");

			this.usersService.addUser(this.user).subscribe(
				result => {
				  this.user = result;		  
				  console.log('Usuario creado correctamente');
				  this.appComponent.isLoadingActive = false;
				},
				error => {
				  console.log('Error al crear el usuario.');
				  this.appComponent.isLoadingActive = false;
				}
			  );




		}else{
			console.log("El usuario no es correcto.");
			this.hiddenError = false;
			this.appComponent.isLoadingActive = false;
		}
	}


	//Función que actualiza un nuevo usuario.
	private updateUser(){

		console.log("Inicio funcion updateUser");



		console.log("Find funcion updateUser");
	}


	//Validamos que todos los datos del usuario esten rellenos.
	private validateUser(){

		let validUser : boolean = true;

		if(null===this.user || null==this.user.name || null===this.user.username || null==this.user.email 
			|| null==this.user.phone || ""===this.user.name || ""===this.user.username || 
			""===this.user.email || ""===this.user.phone){
				console.log("Usuario no válido.");
				validUser = false;
			}

		return validUser;
	}

}
