import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  imports: [CommonModule],
  templateUrl: './ng-for-directive.html',
  styleUrl: './ng-for-directive.css'
})
export class NgForDirective {
public students = ['Ali','Ayan','Usman','Umar'];
check(name: string): boolean {
  if (name == "Usman") {
    return false;
  }
  return true;
}
}
