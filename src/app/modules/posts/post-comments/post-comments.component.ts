import { Component, OnInit, Input } from '@angular/core';
import { PostService} from "../../../services/posts/post.service";
import {AppComponent} from "../../../app.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  //@Input('item') objectCommentPost : any;
  //@Input('itemList') commentsListsPost : any;

  constructor(public appComponent :AppComponent, private route: ActivatedRoute, public postService :PostService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      console.log('Que llega', params)
      this.id = +params['idPost']; // (+) converts string 'id' to a number
      this.getCommentsForPost(this.id);

    });


  }



  getCommentsForPost (id){
    this.appComponent.isLoadingActive = true;
    this.postService.postComments(id).subscribe(
      result =>{
        console.log('Resultado')
        this.objectCommentPost = result;

        this.appComponent.isLoadingActive = false;
      }
    )
  }

}
