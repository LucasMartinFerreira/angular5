import { Component, OnInit, Input , ViewChild} from '@angular/core';
import { AppComponent} from './../../../app.component';
import { PostModel } from "../../../models/posts/post.model"
import { BlockListElementsComponent } from "./../../../components/block-list-elements/block-list-elements.component"
import { PostService} from "../../../services/posts/post.service";



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})


export class PostListComponent implements OnInit {

  private posts = [];


  @Input('item') objectItem : PostModel[];
  @Input('itemList') itemList : any;

  constructor(public postService: PostService) {

  };

  ngOnInit() {

  }

  private editPost (){
    console.log('Editar Item:',  this.objectItem);
  }


  private deletePost (){
    console.log('Borrar Item:', this.objectItem)
    const index: number = this.itemList.indexOf(this.objectItem);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  };


}
