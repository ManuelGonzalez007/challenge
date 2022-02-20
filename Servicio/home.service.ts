import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getMeds(): Observable<any> {
    const path = 'https://run.mocky.io/v3/1f00949f-adc2-4484-ad6d-4f565e82ad30';
    return this.http.get(path);
  }

  getRespuestas(): Observable<any> {
    const path = 'https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f';
    return this.http.get(path);
  }
}
