import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  imports: [CommonModule],
  templateUrl: './ngif-directive.html',
  styleUrl: './ngif-directive.css'
})
export class NgifDirective {
  public count = 0;
  public pincode = "";
  public disable = false;
  countvalue(pin: string) {
    this.pincode = pin;
    this.count = 6 - this.pincode.length;
    if (this.pincode.length==6) {
      this.disable = true;
    }
  }
}
