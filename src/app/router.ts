import {RouterModule, Routes} from "@angular/router";
import { PostListComponent } from "./modules/posts/post-list/post-list.component"
import { UsersListComponent } from './modules/users/users-list/users-list.component'
import { UsersCreateAndEditComponent } from './modules/users/users-create-and-edit/users-create-and-edit.component'

const router : Routes = <Routes>[
  {path: 'posts', component: PostListComponent},
  {path: 'users', component: UsersListComponent},
   {path: 'users/add', component: UsersCreateAndEditComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'posts'}
];

export const app_routing = RouterModule.forRoot(router, {useHash:true})
