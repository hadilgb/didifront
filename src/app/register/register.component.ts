import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    nom: new FormControl('nom'),
    telephone: new FormControl('telephone'),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('password'),
    adresse  : new FormControl('adresse'),
    gouvernorat  : new FormControl('gouvernorat'),
    ville  : new FormControl('ville'),
    codepostal  : new FormControl('codepostal')
  });
  hide = true;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  gouv : Array <String> =["Tunis","Monastir","Sousse","Sfax","Gafsa","Gabes","Mahdia",
  "Jandouba","Mednine","Kairouan","Kasserine","SidiBouzid","Beja","Bizerte"]
  Monastir : Array<String> =["Kasr hlel","tbolba","bennan","Sidi Amer"];
 
 
  constructor(private http: HttpClient,private _formBuilder: FormBuilder )
  {
 
  }
  
 

  ngOnInit() {
    localStorage.setItem('role', JSON.stringify("none"));

  }
  onSubmit() {
    let body = this.registerForm.value;
    this.http.post("http://localhost:8094/api/v1/auth/register",body,{responseType:'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("user Registered Successfully");
 
    });
  }
  

}
