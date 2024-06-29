import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(private translate: TranslateService) {}
  posts: Post[] = posts;
  blogBanner: Post = blogBanner;
  currentLanguage: string = localStorage.getItem('language') || 'en';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    });

    this.translate.use(this.currentLanguage);

    this.setPostsData();
    this.translate.onLangChange.subscribe(() => {
      this.setPostsData();
    });
  }

  setPostsData() {
    this.posts = [
      {
        title: this.translate.instant('posts.post1.title'),
        description: this.translate.instant('posts.post1.description'),
        image:
          'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: this.translate.instant('posts.post2.title'),
        description: this.translate.instant('posts.post2.description'),
        image:
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: this.translate.instant('posts.post3.title'),
        description: this.translate.instant('posts.post3.description'),
        image:
          'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: this.translate.instant('posts.post4.title'),
        description: this.translate.instant('posts.post4.description'),
        image:
          'https://images.unsplash.com/photo-1556011308-d6aedab5ed8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: this.translate.instant('posts.post5.title'),
        description: this.translate.instant('posts.post5.description'),
        image:
          'https://images.unsplash.com/photo-1599847987657-881f11b92a75?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: this.translate.instant('posts.post6.title'),
        description: this.translate.instant('posts.post6.description'),
        image:
          'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: this.translate.instant('posts.post7.title'),
        description: this.translate.instant('posts.post7.description'),
        image:
          'https://images.unsplash.com/photo-1715420078667-e3e1cae7959c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ];

    this.blogBanner = {
      title: this.translate.instant('posts.banner.title'),
      description: '',
      image: './assets/banners/rtx-4090.jpg',
    };
  }
}
