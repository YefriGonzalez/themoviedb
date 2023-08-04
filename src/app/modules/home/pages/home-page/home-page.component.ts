import { Component, OnInit, inject } from '@angular/core';
import { environment } from '@environment/environment';
import { MovieModel } from '@modules/home/models';
import { HomePageService } from '@modules/home/services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  readonly apiUrl=environment.apiUrl;
  private homeService=inject(HomePageService)
  
  actions:MovieModel[];
  trends:MovieModel[];
  premiers:MovieModel[];
  constructor(){
    this.actions=[];
    this.trends=[];
    this.premiers=[];
  }
  ngOnInit(): void {
    this.getPremier();
    this.getAction();
  }

  getPremier(){
    this.homeService.getPremier().subscribe({
      next:(resp)=>{
        console.log(resp)
        this.premiers=resp.results||[];
      }
    })
  }

  getAction(){
    this.homeService.getAction().subscribe({
      next:(resp)=>{
        this.actions=resp.results||[];
      }
    })
  }
  
}
