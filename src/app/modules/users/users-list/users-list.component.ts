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

}
