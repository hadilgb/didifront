import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from './authService.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faCoffee = faCoffee;
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });
  constructor(private http: HttpClient ,private authService : authService,private router :Router)
  {
 
  }

  ngOnInit(): void {
    localStorage.setItem('role', JSON.stringify("none"));
  }
  onSubmit() {
    let body = this.loginForm.value;
    if(this.loginForm.controls.email.value == "hadil6" && (this.loginForm.controls.password.value == "123456")){
      localStorage.removeItem('role');
      localStorage.setItem('role', 'admin');
      localStorage.removeItem('email');
      localStorage.setItem('email', this.loginForm.controls.email.value!);
      this.router.navigateByUrl('Dashboard-Admin')
    }
    else{
      this.authService.login(body)
    
      .subscribe((resultData: any)=>
      {
        const data =JSON.parse(resultData);
        localStorage.removeItem('token');
        localStorage.setItem('token', data.token);
          this.clearCart();
          localStorage.removeItem('role');
          localStorage.setItem('role', 'user');
          localStorage.removeItem('email');
          localStorage.setItem('email', this.loginForm.controls.email.value!);
          this.router.navigate(['']).then(() => {
            window.location.reload();
          });    
        });
    }
    
  }
clearCart(): void {
  localStorage.removeItem('cartItems');
}
}
