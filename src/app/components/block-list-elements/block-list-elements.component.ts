import { Component, OnInit, Input } from '@angular/core';
import { PostService} from "../../services/posts/post.service";
import { AppComponent} from './../../app.component';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { PostListComponent } from "../../modules/posts/post-list/post-list.component";
import { PostModel } from "../../models/posts/post.model"
import { User } from "../../models/users/user"

@Component({
  selector: 'app-block-list-elements',
  templateUrl: './block-list-elements.component.html',
  styleUrls: ['./block-list-elements.component.scss']
})
export class BlockListElementsComponent implements OnInit {
  public existsUserData: boolean = false;
  
  private arrayList = [];

  private idPost : number;

  flagView : string  = '';

  constructor(public appComponent : AppComponent, public usersService:UsersService,
              public postService: PostService,
              private route: ActivatedRoute,
              public postModel : PostModel, public userModel : User) {
    this.appComponent.isLoadingActive = true;

  }

  ngOnInit() {
    let changeView = this.route.params.subscribe(params => {

      console.log('URL?¿?', params)
      this.existsUserData = false;

      if(params.name === 'posts'){
        this.getAllPost();
        this.flagView = 'posts'
      }else if(params.name ==='users'){
        this.getAllUsers();
        this.flagView = 'users'
      }else if(params.name ==='commentsForPost'){
        this.idPost = this.postModel.getPostId();
        this.getAllCommentsForPost()
        this.flagView = 'commentsForUser'
      }
    });

  }

  public getAllPost(){

    this.postService.postList().subscribe(
      result => {
        this.arrayList = result;
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
        this.existsUserData = true;

        let userFromModel = this.userModel.getUser();

        if(undefined!==userFromModel){
      
          if(this.userModel.addUser){
            this.userModel.addUser = false;
            this.arrayList.push(userFromModel);
          }

          if(this.userModel.editUser){
            this.userModel.editUser = false;
            let modifiedUser = this.userModel.getUser();

            console.log("actualizando en la lista el usuario " + modifiedUser.id)

            for(let i=0; i<this.arrayList.length; i++) {
              let user = this.arrayList[i];
              if(user.id == modifiedUser.id){
                this.arrayList[i] = modifiedUser;
              }
            }

          }
    
          this.userModel.setUser(null);
      
        };

        console.log('Resultado',  this.arrayList)
        this.appComponent.isLoadingActive = false;
      },
      error => {
        console.log('Error al obtener todos los usuarios');
      });

    }

  public getAllCommentsForPost(){
    this.appComponent.isLoadingActive = true;
    this.postService.postComments(this.idPost).subscribe(
      result =>{
        this.arrayList = result;
        this.appComponent.isLoadingActive = false;
      }
    )
  }

}
