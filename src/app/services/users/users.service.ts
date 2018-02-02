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

  //Función que crea un usuario.
  public addUser(user:User): Observable <any>{
    return this.httpClient.post(Constants.HOME_DEV +'/users/', user, { headers: HeadersApp.getGeneralHeader()});;
  }

  //Función que crea un usuario.
  public updateUser(user:User): Observable <any>{
    let url : string;
    url = Constants.HOME_DEV +'/users/' + user.id;
    return this.httpClient.patch(url, user, { headers: HeadersApp.getGeneralHeader()});;
  }

    //Función que crea un usuario.
    public deleteUser(user:User): Observable <any>{
      return this.httpClient.delete(Constants.HOME_DEV + '/users/' + user.id, { headers: HeadersApp.getGeneralHeader()});;
    }

}
