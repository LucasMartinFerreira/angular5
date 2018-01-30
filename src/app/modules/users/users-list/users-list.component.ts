import { Component, OnInit } from '@angular/core';
import { MOCKUSERS } from '../../../models/users/mockUsers';
import { User } from '../../../models/users/user';
import { Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  @Input() userList: User[];

  constructor() { }

  ngOnInit() {
    this.userList = MOCKUSERS;
  }

}
