import { Component, OnInit } from '@angular/core';
import { BlockListElementsComponent } from './../../../components/block-list-elements/block-list-elements.component'
import { User } from '../../../models/users/user';
import { Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  @Input('item') objectItem : User[];
  @Input('itemList') itemList : any;

  existsUserData: boolean;

  constructor(public blockListElementsComponent :  BlockListElementsComponent) {
    this.blockListElementsComponent
  }

  ngOnInit() {
    console.log('User list component onInit')
    this.existsUserData = this.itemList != undefined;
  }

  private editUser(user:User){
    console.log("Editando el usuario "+ user.id)
  }

  private deleteUser(user:User){
    console.log("Editando el usuario "+ user.id)
    const index: number = this.itemList.indexOf(this.objectItem);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }

  private addUser(){
    console.log("Añadiendo usuario ")
  }
}
