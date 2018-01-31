import { Component, OnInit } from '@angular/core';
import { BlockListElementsComponent } from './../../../components/block-list-elements/block-list-elements.component'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {


  constructor(public blockListElementsComponent :  BlockListElementsComponent) {
    this.blockListElementsComponent
  }

  ngOnInit() {
    console.log('Qué hemos liao?')
  }

}
