import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  standalone: true,
  selector: 'app-post-list',
  imports: [CommonModule],
  template: `
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Lista de Posts</h2>

      <p *ngIf="loading()">Cargando posts...</p>

      <ul *ngIf="!loading()">
        <li *ngFor="let post of posts()">
          <h3 class="font-semibold">{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <hr class="my-2" />
        </li>
      </ul>
    </div>
  `
})
export class ListComponent implements OnInit {
  posts = signal<Post[]>([]);
  loading = signal(true);

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.list().subscribe({
      next: (res) => this.posts.set(res),
      error: (err) => console.error('Error al cargar posts:', err),
      complete: () => this.loading.set(false)
    });
  }
}
