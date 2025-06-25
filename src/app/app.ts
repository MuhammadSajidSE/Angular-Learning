import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Login } from './login/login';
import { Events } from './events/events';
import { PropertyBinding } from './property-binding/property-binding';
import { ClassBinding } from './class-binding/class-binding';
import { BodyTemperature } from './body-temperature/body-temperature';
import { NgClassDirective } from './ng-class-directive/ng-class-directive';
import { NgClassAgeCalculator } from './ng-class-age-calculator/ng-class-age-calculator';
import { TextBox } from './text-box/text-box';
import { LoginAdvance } from './login-advance/login-advance';
import { CounterApp } from './counter-app/counter-app';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { NgifDirective } from './ngif-directive/ngif-directive';
import { NgIfElseDirective } from './ng-if-else-directive/ng-if-else-directive';
import { NgSwitchDirective } from './ng-switch-directive/ng-switch-directive';
import { NgForDirective } from './ng-for-directive/ng-for-directive';

@Component({
  selector: 'app-root',
  imports: [NgForDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  husband = "Muhammad Sajid";
  wife = "urooj Fatima";
  protected title = 'Sajid & Urooj';
}
