import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
   a = 0;
myEvent(){
  this.a++;
}
EventObj(e:any){
console.log(e);
}
}
