import { Component, OnInit, inject } from '@angular/core';
import { MovieModel } from '@modules/home/models';
import { HomePageService } from '@modules/home/services';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countrys:MovieModel[];
  private genreService=inject(HomePageService);
  constructor(){
    this.countrys=[];
  }
  ngOnInit(): void {
    this.getCountrys();
  }


  getCountrys(){
    this.genreService.getAllCounry().subscribe({
      next:(resp)=>{
        this.countrys=resp.results||[];
        this.countrys.forEach((item)=>{
          item.poster_path="./assets/transformers.jpg";
        })
      }
    })
  }
}
