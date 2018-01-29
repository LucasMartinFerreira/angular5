import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**Componentes**/
import { UsersCreateAndEditComponent } from './users-create-and-edit/users-create-and-edit.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersCreateAndEditComponent,
    UsersListComponent
  ]
})
export class UserModule { }
