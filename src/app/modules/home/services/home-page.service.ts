import { Injectable, inject } from '@angular/core';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private apiService=inject(ApiService)
  getAction(){
    return this.apiService.getAll('popular');
  }

  getPremier(){
    return this.apiService.getAll('top_rated')
  }
  getAllMovies(){
    return this.apiService.getAll('upcoming')
  }

  getAllCounry(){
    return this.apiService.getAll('now_playing')
  }
}
