import { HttpHeaders} from '@angular/common/http';
export class HeadersApp {

  public static getGeneralHeader(): HttpHeaders {

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=UTF-8')
    return headers;

  }

}
