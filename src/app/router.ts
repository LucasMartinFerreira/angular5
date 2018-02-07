import {RouterModule, Routes} from "@angular/router";
import { PostListComponent } from "./modules/posts/post-list/post-list.component";
import { UsersListComponent } from './modules/users/users-list/users-list.component';
import { BlockListElementsComponent } from './components/block-list-elements/block-list-elements.component';
import { PostCommentsComponent } from './modules/posts/post-comments/post-comments.component'
import { PostCreateAndEditComponent } from './modules/posts/post-create-and-edit/post-create-and-edit.component'

const router : Routes = <Routes>[
  {path: 'blockListComponent/:name', component: BlockListElementsComponent},
  {path: 'createEditPost/:action/:idPost', component: PostCreateAndEditComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'blockListComponent/posts'}
];

export const app_routing = RouterModule.forRoot(router, {useHash:true})
