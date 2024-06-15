import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();

  username:any;
  password:any;
  constructor(private router: Router, private loginService: LoginService) {
    console.log('login component');
    
  }

  login() {
    
    if (this.loginService.login(this.username, this.password)) {
      this.loginSuccess.emit();
      this.router.navigate(['/home']);
    }
  }
}
