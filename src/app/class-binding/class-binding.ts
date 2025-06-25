import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [],
  templateUrl: './class-binding.html',
  styleUrl: './class-binding.css'
})
export class ClassBinding {
  public colorclass = "Mycolor";
  public fontsizeclass = "Myfontsize";
  public fontfamilyclass = "Myfontfamily";
}
