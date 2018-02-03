import { Component, OnInit, Input } from '@angular/core';
import { PostService} from "../../../services/posts/post.service";
import {AppComponent} from "../../../app.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  @Input('item') objectCommentPost : any;
  @Input('itemList') commentsListsPost : any;

  constructor(public appComponent :AppComponent, public router: Router, public postService :PostService) { }

  ngOnInit() {

  }

  private backListPost () {
    this.router.navigate(['/blockListComponent', 'posts']);
  }
}
