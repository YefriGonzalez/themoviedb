import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl:string=environment.apiUrl;
  private http=inject(HttpClient);
  store(path: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${path}`, data);
  }

  getAll(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${path}`);
  }

  getById(path: string, id: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${path}/${id}`);
  }

  update(path: string, data: any, id: number | string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${path}/${id}`, data);
  }

  delete(path: string, id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${path}/${id}`);
  }
}
