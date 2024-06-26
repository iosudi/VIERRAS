import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { blogBanner } from 'src/assets/data/posts';
import { Post } from '../../interfaces/post';
import { posts } from './../../../../../assets/data/posts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts: Post[] = posts;
  blogBanner: Post = blogBanner;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });
  }
}
