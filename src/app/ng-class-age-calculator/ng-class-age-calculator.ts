import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-age-calculator',
  imports: [CommonModule],
  templateUrl: './ng-class-age-calculator.html',
  styleUrl: './ng-class-age-calculator.css'
})
export class NgClassAgeCalculator {
  public age="";
  public result = "";
  takeinput(a:any){
this.age = a;
  }

  CheckAge():boolean{
    let a = parseInt(this.age);
    if (this.age=="") {
      this.result = "";
    }
    if (a>=18) {
      this.result = "Can vote";
      return true;
    }
        if (a<18) {
      this.result = "Can not vote";
      return false;
    }
    return false;
    // else{
    //   this.result = "Can not vote";
    //   return false;
    // }
  }
}
