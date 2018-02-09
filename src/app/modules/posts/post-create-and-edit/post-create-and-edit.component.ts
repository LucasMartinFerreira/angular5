import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from "../../../models/posts/post.model";
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../services/posts/post.service'
import { AppComponent } from '../../../app.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-create-and-edit',
  templateUrl: './post-create-and-edit.component.html',
  styleUrls: ['./post-create-and-edit.component.scss']
})
export class PostCreateAndEditComponent implements OnInit {

  objectPost : PostModel ;
  objectEditPost : PostModel;
  idPost : number;
  titlePost : string;
  bodyPost : string;
  userId : number;

  constructor(public toastr : ToastrService, public appComponent : AppComponent, public router : Router, public route : ActivatedRoute, public postModel : PostModel, public postService: PostService) { }

  ngOnInit() {

    let changeView = this.route.params.subscribe(params => {
      console.log("Paramentros", params)
    });

    this.objectPost = this.postModel.getPost();

    console.log('Obtenemos el post', this.objectPost)

    this.idPost = this.objectPost.id;
    this.userId = this.objectPost.userId;
    this.titlePost = this.objectPost.title;
    this.bodyPost = this.objectPost.body;
  }

  private editPost (){
    this.appComponent.isLoadingActive = true;

    this.objectEditPost = new PostModel();
    this.objectEditPost.id= this.idPost;
    this.objectEditPost.title = this.titlePost;
    this.objectEditPost.body = this.bodyPost;
    this.objectEditPost.userId = this.userId;


    this.postService.postEdit(this.objectEditPost).subscribe(
        result => {
        this.appComponent.isLoadingActive = false;
        console.log('Item Editado', this.objectPost);
        this.toastr.success('Post Editado correctamente');
       this.router.navigate(['/blockListComponent', 'posts']);
      },
      error => {
        console.log('Error al borrar el post', this.objectPost);
      })
  }

  private backList (){
    this.router.navigate(['/blockListComponent', 'posts']);
  }
}
