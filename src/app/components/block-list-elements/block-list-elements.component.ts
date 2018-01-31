import { Component, OnInit, Input } from '@angular/core';
import { PostService} from "../../services/posts/post.service";
import { AppComponent} from './../../app.component';
import { ActivatedRoute } from '@angular/router';
import {PostListComponent} from "../../modules/posts/post-list/post-list.component";
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-block-list-elements',
  templateUrl: './block-list-elements.component.html',
  styleUrls: ['./block-list-elements.component.scss']
})
export class BlockListElementsComponent implements OnInit {

  private arrayList = [];
  constructor(public appComponent : AppComponent, public postService: PostService, public usersService: UsersService, private route: ActivatedRoute) {
    this.appComponent.isLoadingActive = true;

  }

  ngOnInit() {
    let changeView = this.route.params.subscribe(params => {
      console.log('URL?¿?', params)
      if(params.name === 'posts'){
        this.getAllPost();
      }else if(params.name ==='users'){
        this.getAllUsers()
      }
    });

  }

  public getAllPost(){

    this.postService.postList().subscribe(
      result => {
        this.arrayList = result;

        console.log('Resultado',  this.arrayList)
        this.appComponent.isLoadingActive = false;
      },
      error => {
        console.log('Error al obtener todos los posts')
      }
    )
  }


  public getAllUsers (){
    this.usersService.usersList().subscribe(
      result => {
        this.arrayList = result;

        console.log('Resultado',  this.arrayList)
        this.appComponent.isLoadingActive = false;
      },
      error => {
        console.log('Error al obtener todos los usuarios')
      }
    )
  }

}
