import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Login } from './login/login';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  imports: [Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  husband = "Muhammad Sajid";
  wife = "urooj Fatima";
  protected title = 'Sajid & Urooj';
}
