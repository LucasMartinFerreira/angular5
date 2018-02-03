import { Component, OnInit } from '@angular/core';
import { BlockListElementsComponent } from './../../../components/block-list-elements/block-list-elements.component'
import { User } from '../../../models/users/user';
import { Input } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  @Input('item') objectItem : User[];
  @Input('itemList') itemList : any;

  existsUserData: boolean;
  constructor(public blockListElementsComponent :  BlockListElementsComponent, 
    public usersService: UsersService, private router:Router,public  userModel : User) {
    this.blockListElementsComponent
  }

  ngOnInit() {
    console.log('User list component onInit')

    this.existsUserData = this.itemList != undefined;
  }

  private editUser(user:User){
    console.log("Editando el usuario "+ user.id);

    this.userModel.setUser(user);
    this.router.navigate(['blockListComponent/users/update']);
  }

  private deleteUser(user:User){
    console.log("Editando el usuario "+ user.id)
    this.usersService.deleteUser(user).subscribe(
      result => {
        this.localDelete(user)
        console.log('Borrado ok')
      },
      error => {
        console.log('Error al borrar usuario')
      }
    )
    
  }

  private localDelete(user:User){
    const index: number = this.itemList.indexOf(this.objectItem);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }

  private addUser(){
    console.log("Añadir usuario")
    this.router.navigate(['blockListComponent/users/add']);
  }
}
