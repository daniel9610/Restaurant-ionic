import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public restaurantes() {
    return this.http.get('https://proyectocalidadd.000webhostapp.com/api/v1/restaurants').pipe(map(this.extractData));
  }
  public productos() {
    return this.http.get('https://proyectocalidadd.000webhostapp.com/api/v1/products').pipe(map(this.extractData));
  }
  public ingredientes() {
    return this.http.get('https://proyectocalidadd.000webhostapp.com/api/v1/ingredients').pipe(map(this.extractData));
  }
  private extractData(res: Response) {
    let body = res;
    console.log('hola mundo');
    return body || { };
  }

}
