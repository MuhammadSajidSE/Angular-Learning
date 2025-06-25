import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-counter-app',
  imports: [CommonModule],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css'
})
export class CounterApp {
public count = 0;
increment(){
  this.count++;
}
decrement(){
  this.count--;
}
}
