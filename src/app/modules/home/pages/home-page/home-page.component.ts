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
        for (let index = 0; index < 4; index++) {
          console.log('img')
          switch(index){
            case 0:
              this.actions[0].poster_path="./assets/barbie.jpg"
              break;
            case 1:
              this.actions[1].poster_path="./assets/flash.jpeg"
              break;
            case 2:
              this.actions[2].poster_path="./assets/transformers.jpg"
              break;
            case 3: 
             this.actions[3].poster_path="./assets/sirenita.jpg"
              break;     
          }
        }
        console.log(this.actions)
      }
    })
  }
  
}
