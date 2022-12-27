import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(private http: HttpClient) {
  }

  listEnterprises() {
    return this.http.get(environment.baseUrl + 'enterprises/list');
  }
}
