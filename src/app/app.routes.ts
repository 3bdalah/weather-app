import { Routes } from '@angular/router';
import { WeatherComponent } from './Components/weather/weather.component';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [

    {path : "",redirectTo:"weather",pathMatch:"full"},
    {path : "weather",component:WeatherComponent,title:"weather"},
    {path : "weather-list",component:WeatherListComponent,title: "weather list"},
    {path : "**",component:NotfoundComponent,title:"Notfound"},
];
