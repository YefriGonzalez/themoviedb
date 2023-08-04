import { Component, OnInit, inject } from '@angular/core';
import { MovieModel } from '@modules/home/models';
import { HomePageService } from '@modules/home/services/home-page.service';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: []
})
export class GenrePageComponent implements OnInit {
  genres:MovieModel[];
  private genreService=inject(HomePageService);
  constructor(){
    this.genres=[];
  }
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.genreService.getAllMovies().subscribe({
      next:(resp)=>{
        this.genres=resp.results||[];
        this.genres.forEach((item)=>{
          item.poster_path="./assets/sirenita.jpg";
        })
      }
    })
  }
} 
