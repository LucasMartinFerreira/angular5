import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from "../../../models/posts/post.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-create-and-edit',
  templateUrl: './post-create-and-edit.component.html',
  styleUrls: ['./post-create-and-edit.component.scss']
})
export class PostCreateAndEditComponent implements OnInit {

  objectPost : PostModel ;
  idPost : number;
  titlePost : string;
  bodyPost : string
  userId : number

  constructor(public router : ActivatedRoute, public postModel : PostModel) { }

  ngOnInit() {
    let changeView = this.router.params.subscribe(params => {
      console.log("Paramentros", params)
    });

    this.objectPost = this.postModel.getPost();

    console.log('Obtenemos el post', this.objectPost)

    this.idPost = this.objectPost.id;
    this.userId = this.objectPost.userId;
    this.titlePost = this.objectPost.title;
    this.bodyPost = this.objectPost.body;



  }

}
