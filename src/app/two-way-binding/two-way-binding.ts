import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  imports: [CommonModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css'
})
export class TwoWayBinding {
public name = "Muhammad Sajid"
updatevalue(n:string){
  this.name = n;
}
}
