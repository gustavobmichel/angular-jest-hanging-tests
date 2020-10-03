import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private _httpClient: HttpClient) {}

  test(): Observable<string> {
    return this._httpClient.get<string>('http://some-url');
  }
}
