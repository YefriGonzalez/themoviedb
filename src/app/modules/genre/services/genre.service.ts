import { Injectable, inject } from '@angular/core';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiService=inject(ApiService);

  getAllMovies(){
    return this.apiService.getAll('upcoming');
  }
}
