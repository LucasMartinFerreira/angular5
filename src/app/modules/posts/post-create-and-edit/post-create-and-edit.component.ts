import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from "../../../models/posts/post.model"

@Component({
  selector: 'app-post-create-and-edit',
  templateUrl: './post-create-and-edit.component.html',
  styleUrls: ['./post-create-and-edit.component.scss']
})
export class PostCreateAndEditComponent implements OnInit {


  @Input('post') post : PostModel[];
  @Input('postList') postList : any
  constructor() { }

  ngOnInit() {
    console.log('Pintamos:', this.post)
    console.log('Todos', this.postList)
  }

  private editPost (){
    const index: number = this.postList.indexOf(this.post);
    if (index !== -1) {
      this.postList.splice(index, 1);
    }
  }

}
