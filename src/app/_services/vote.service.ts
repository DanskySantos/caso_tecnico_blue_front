import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Enterprise} from "../_models/enterprise";
import {map} from "rxjs/operators";
import {User} from "../_models/user";
import {SendVote} from "../_models/sendVote";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  vote(model: SendVote) {
    console.log('service')
    return this.http.post(this.baseUrl + 'vote', model);
  }
}
