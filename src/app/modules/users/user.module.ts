import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';



/**Componentes**/
import { UsersCreateAndEditComponent } from './users-create-and-edit/users-create-and-edit.component';
import { UsersService } from '../../services/users/users.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    UsersCreateAndEditComponent
  ],
  providers :[
    UsersService
  ]
})
export class UserModule { }
