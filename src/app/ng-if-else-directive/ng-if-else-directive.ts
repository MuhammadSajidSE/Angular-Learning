import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-ng-if-else-directive',
  imports: [CommonModule],
  templateUrl: './ng-if-else-directive.html',
  styleUrl: './ng-if-else-directive.css'
})
export class NgIfElseDirective {
public result = false;
public start = false;
checkyear(year:string){
if (!year || year.trim().length === 0) {
  this.start = false;
}
else if (2025-parseInt(year)>=18) {
  this.result = true;
  this.start = false;
}
else{
  this.result = false;
  this.start = true;
}
}

startfunction(value:string){
if (!value || value.trim().length === 0) {
  this.start = false;
}
}
}
