import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent {
   searchText:string='';
   filterWeatherList:any[];
   sortBy:string="";
   sortAsinding:boolean=true;
   weatherList:any[]=[
    {id:"1",city:"ashmoon",temperature:12},
    {id:"2",city:"shebinElkom",temperature:34},
    {id:"3",city:"sadatCity",temperature:0},
   ];
   constructor(private _router:Router){
     this.filterWeatherList = this.weatherList;
   }
   navigateWeather(tempCity:number){
      this._router.navigate(['/weather'],{queryParams:{tempCity}})
   }

   handleFilterWeatherList(){
    if(!this.searchText){
    this.filterWeatherList = this.weatherList;
    } else{
      this.filterWeatherList = this.weatherList.filter((cityWeather) => {
       return cityWeather.city.toLowerCase().includes(this.searchText.toLowerCase());
      })
    }
   }
   handleResetFilterList(){
    this.searchText="";
    this.filterWeatherList = this.weatherList;
   }

   sortWeatherCitis(property:string){
    this.sortBy = property;
    this.sortAsinding =!this.sortAsinding;
    this.filterWeatherList.sort((a,b)=>{
      const aValue = a[property];
      const bValue = b[property];
      if(aValue<bValue){
        return this.sortAsinding ? -1:1;
      }else if(aValue > bValue){
        return this.sortAsinding ? 1:-1;
      }
      return 0;
    })
   }


}
