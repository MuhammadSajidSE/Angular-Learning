import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-advance',
  imports: [CommonModule],
  templateUrl: './login-advance.html',
  styleUrl: './login-advance.css'
})
export class LoginAdvance {
public result = '';
public Myemail = "muhammadsajid.dh@gmail.com";
public Mypassword = "123#sajid";
public Ng = false;

notification():boolean{
  return this.Ng;
}

Login(email: string, password: string): boolean {
  if (email === this.Myemail && password === this.Mypassword) {
    this.result = "Login successfully";
    this.Ng = true;
    console.log(true);
    return true;
  } else {
    this.result = "Login Failed";
    console.log(false);
    this.Ng = false;
    // this.Ng = false; // Optional: reset flag if login fails
    return false;
  }
}

clear(ema:any,pass:any){
  ema.value = '';
  pass.value='';
  this.Ng = false;
  this.result = '';
}
}
