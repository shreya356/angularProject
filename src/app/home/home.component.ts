import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BlogApiService} from '../blog-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home$: object;

  constructor(private data: BlogApiService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      (result)=>{
        this.home$ = result;
      }
    );
  }

}
