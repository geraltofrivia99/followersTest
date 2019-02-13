import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { Data } from '../types';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  followers: Observable<Array<Data>>;

  constructor(private fs: FollowersService) { }

  ngOnInit() {
    this.followers = this.fs.getFollowers();
  }

}
