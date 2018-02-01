import { Component, OnInit, Input , ViewChild} from '@angular/core';
import { AppComponent} from './../../../app.component';
import { PostModel } from "../../../models/posts/post.model"
import { BlockListElementsComponent } from "./../../../components/block-list-elements/block-list-elements.component"
import { PostService} from "../../../services/posts/post.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})


export class PostListComponent implements OnInit {

  private posts = [];


  @Input('item') objectItem : PostModel;
  @Input('itemList') itemList : any;

  constructor(public postService: PostService, public router: Router, public appComponent : AppComponent, private toastr: ToastrService) {

  };

  ngOnInit() {

  }

  private editPost (){
    console.log('Editar Item:',  this.objectItem);
  }


  /**
   * Eliminación de un post
   */
  private deletePost (){
    this.appComponent.isLoadingActive = true;
    const index: number = this.itemList.indexOf(this.objectItem);
    if (index !== -1) {
      this.itemList.splice(index, 1);
      this.postService.postDelete(this.objectItem.id).subscribe(
        result => {
          this.appComponent.isLoadingActive = false;
          console.log('Item Borrado', this.objectItem);
          this.toastr.success('Post borrado correctamente');
        },
        error => {
          console.log('Error al borrar el post', this.objectItem);
        })
    }
  };


  private viewCommentPost(){
    let idPost = this.objectItem.id ;
    this.router.navigate(['/commentsForPost', idPost]);
  }

}
