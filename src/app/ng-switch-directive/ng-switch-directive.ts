import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  imports: [CommonModule],
  templateUrl: './ng-switch-directive.html',
  styleUrl: './ng-switch-directive.css'
})
export class NgSwitchDirective {
public result = 0;
public grade = "";
GenerateResult(english:string,urdu:string,math:string){
this.result = (((parseInt(english)+parseInt(urdu)+parseInt(math))/300)*100);
    if (this.result >= 90) this.grade = 'A+';
    else if (this.result >= 80) this.grade = 'A';
    else if (this.result >= 70) this.grade = 'B';
    else if (this.result >= 60) this.grade = 'C';
    else if (this.result >= 50) this.grade = 'D';
    else if (this.result >= 40) this.grade = 'E';
    else this.grade = 'F';
}
}
