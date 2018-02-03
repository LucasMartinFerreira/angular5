import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constants } from './../../constants'
import { HeadersApp } from './../../headers';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class PostService {

  constructor(public httpClient :HttpClient) {};

  public postList() : Observable <any> {
    return this.httpClient.get(Constants.HOME_DEV +'/posts', { headers: HeadersApp.getGeneralHeader()})
  }

  public postComments(id){
    return null;
  }
}
