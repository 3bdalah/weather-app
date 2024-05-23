import { Component, OnInit } from '@angular/core';
import { BackGroundColorDirective } from '../../Directives/back-ground-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TemeratureConversionPipe } from '../../Pipes/temerature-conversion.pipe';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [BackGroundColorDirective,TemeratureConversionPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent  implements OnInit{
  temperature :number=0;
  unit:string='C';
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
      this.route.queryParams.subscribe(parames => {
        const temperatureParams  = parames["tempCity"];
        if(temperatureParams){
          this.temperature = +temperatureParams;
        }
      }) 
  }

  toggleUnit(){
     this.unit = this.unit  =='C' ? 'F':'C'; 
  }
}
