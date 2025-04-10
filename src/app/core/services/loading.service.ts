import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _loading = signal(false);
  loading = computed(() => this._loading());

  show(): void {
    this._loading.set(true);
  }

  hide(): void {
    setTimeout(() => {
      this._loading.set(false);
    }, 5000);
  }
}
