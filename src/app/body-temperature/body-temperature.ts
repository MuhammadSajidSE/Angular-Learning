import { Component } from '@angular/core';

@Component({
  selector: 'app-body-temperature',
  imports: [],
  templateUrl: './body-temperature.html',
  styleUrl: './body-temperature.css'
})
export class BodyTemperature {
  public temp = "";
  public b = "below";
  public n = "normal";
  public h = "high";
  public result = "";
GetTemp(temps:any){
temps = parseInt(temps);
this.temp =  temps;
if (!temps) {
  this.result = "";
  this.temp = "";
}
if (temps<=35) {
  this.b = "below";
  this.result = "Cold";
}
if (temps>=36 && temps<=38) {
  this.b = "normal";
  this.result = "Normal"
}
if (temps>39) {
  this.b="high";
  this.result = "Hot"
}
}
}
