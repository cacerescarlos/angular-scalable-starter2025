import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { LoadingService } from './loading.service';
import { environment } from '../../../environments/environment';

export abstract class HttpService {
  protected DOMAIN = environment.apiUrl;

  constructor(
    protected http: HttpClient,
    protected auth: AuthService,
    private loading: LoadingService
  ) {}

  protected _loadCache<T>(data: T[]): Observable<T[]> {
    return of(data);
  }

  protected get<T>(url: string, showSpinner = true): Observable<T> {
    return this._execute(this.http.get<T>(this.DOMAIN + url), true, showSpinner);
  }

  protected post<T>(url: string, body: any, showError = true, showSpinner = true): Observable<T> {
    return this._execute(this.http.post<T>(this.DOMAIN + url, body), showError, showSpinner);
  }

  protected put<T>(url: string, body: any, showError = true, showSpinner = true): Observable<T> {
    return this._execute(this.http.put<T>(this.DOMAIN + url, body), showError, showSpinner);
  }

  protected delete<T>(url: string, showSpinner = true): Observable<T> {
    return this._execute(this.http.delete<T>(this.DOMAIN + url), true, showSpinner);
  }

  private _execute<T>(
    apiCall: Observable<T>,
    showError: boolean,
    showSpinner: boolean
  ): Observable<T> {
    if (showSpinner) this.loading.show();

    return new Observable((observer) => {
      apiCall
        .pipe(finalize(() => showSpinner && this.loading.hide()))
        .subscribe({
          next: (res) => observer.next(res),
          error: (error: HttpErrorResponse) => {
            const message = this.extractErrorMessage(error);
            if (showError) this.showError([message]);
            observer.error(message);
          },
          complete: () => observer.complete(),
        });

      return { unsubscribe() {} };
    });
  }

  private extractErrorMessage(error: HttpErrorResponse): string {
    if (!error || !error.error) return 'Error inesperado.';
    if (typeof error.error === 'string') return error.error;
    if (error.error.message) return error.error.message;
    return 'Error en la respuesta del servidor.';
  }

  protected showError(message: string[]): void {
    Swal.fire('Error', message[0], 'error');
  }

  protected showWarning(message: string[]): void {
    Swal.fire('Advertencia', message[0], 'warning');
  }
}
