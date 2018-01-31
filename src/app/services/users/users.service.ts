import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../constants';
import { HeadersApp } from '../../headers';
import { User } from '../../models/users/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(public httpClient :HttpClient) {};

  public usersList() : Observable <any> {
    return this.httpClient.get(Constants.HOME_DEV +'/users', { headers: HeadersApp.getGeneralHeader()})
  }

  public addUser(user:User): Observable <any>{
    return this.httpClient.post(Constants.HOME_DEV +'/users/', user, { headers: HeadersApp.getGeneralHeader()});;
  }

}
