import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constants } from './../../constants'
import { HeadersApp } from './../../headers';
import { PostModel } from './../../models/posts/post.model'
import { Headers, RequestOptions } from '@angular/http';




@Injectable()
export class PostService {

  constructor(public httpClient :HttpClient) {};

  public postList() : Observable <any> {
    return this.httpClient.get(Constants.HOME_DEV +'/posts', { headers: HeadersApp.getGeneralHeader()})
  }

  public postDelete (idPost : number): Observable <any> {
    return this.httpClient.delete(Constants.HOME_DEV +'/posts/'+idPost, { headers: HeadersApp.getGeneralHeader()})
  }

  public postComments (idPost :number) :Observable <any>{
    return this.httpClient.get(Constants.HOME_DEV +'/posts/'+idPost+'/comments', { headers: HeadersApp.getGeneralHeader()})
  }

  public postEdit (post: PostModel) :Observable <any>{

    console.log('Editamos..', post)
    let body : Object ={
      id: post.id,
      title: post.title,
      body: post.body,
      userId: post.userId
    };

    return this.httpClient.patch(Constants.HOME_DEV +'/posts/'+post.id, body,{headers: HeadersApp.getGeneralHeader()})
  }

}
