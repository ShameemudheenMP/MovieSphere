import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username.trim().length === 0) {
      this.errorMsg = 'Please enter username';
    } else if(this.password.trim().length === 0) {
      this.errorMsg = 'Please enter password';
    } else {
      this.errorMsg = '';
      const authRes = this.auth.login(this.username, this.password);
      if(authRes === 200) {
        this.router.navigate(['home']);
      } else if(authRes === 403) {
        this.errorMsg = 'Invalid credentials!';
      }
    }
  }

}
