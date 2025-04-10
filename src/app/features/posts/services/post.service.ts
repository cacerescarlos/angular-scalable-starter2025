import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { HttpService } from '../../../core/services/http.service';
import { LoadingService } from '../../../core/services/loading.service';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService extends HttpService {
  constructor(
    http: HttpClient,
    auth: AuthService,
    loading: LoadingService
  ) {
    super(http, auth, loading);
  }

  list(): Observable<Post[]> {
    return this.get<Post[]>('/posts', true);
  }

  getOne(id: number): Observable<Post> {
    return this.get<Post>(`/posts/${id}`, true);
  }
}
