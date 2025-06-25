import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
  public toggle = false;
  public count = 0;
  public name = "";
  public inputtoggle = false;
  toggleAction(){
    this.toggle = !this.toggle;
  }
  counting(){
    this.count++;
  }
  updatevalue(names:string){
    if (this.name.length>=10) {
      this.inputtoggle = true;
    }
    this.name=names;
  }
}
