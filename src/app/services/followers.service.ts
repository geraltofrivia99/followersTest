import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../types';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http: HttpClient) { }

  getFollowers() {
    // const dataSub = new Subject<string>();
    return this.http.get<Array<Data>>(
      'http://api.github.com/users/mosh-hamedani/followers'
    )
  }
}
