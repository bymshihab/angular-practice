import { Component } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
import { CommonModule } from '@angular/common';
import { ReuseableButtonComponent } from "../reusable-components/reuseable-button/reuseable-button.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, ReuseableButtonComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  allPosts: Post[] = [];
  posts: Post[] = [];
  loading = false;
  postsPerPage = 5;
  currentPage = 0;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.loading = true;
    this.postService.getPosts().subscribe(posts => {
      this.allPosts = posts;
      this.loadInitialPosts();
      this.loading = false;
    });
  }

  loadInitialPosts() {
    this.currentPage = 1;
    this.posts = this.allPosts.slice(0, this.postsPerPage);
  }

  loadMorePosts() {
    if (this.hasMorePosts()) {
      this.loading = true;
      setTimeout(() => {
        const startIndex = this.currentPage * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const newPosts = this.allPosts.slice(startIndex, endIndex);
        this.posts = [...this.posts, ...newPosts];
        this.currentPage++;
        this.loading = false;
      }, 500); // Small delay to show loading state
    }
  }

  hasMorePosts(): boolean {
    return this.posts.length < this.allPosts.length;
  }
}

