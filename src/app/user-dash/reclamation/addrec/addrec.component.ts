import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-addrec',
  templateUrl: './addrec.component.html',
  styleUrls: ['./addrec.component.css']
})
export class AddrecComponent {
  recForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,private reclamationservice: ReclamationService) {
    this.recForm = this.formBuilder.group({
      message: ['', Validators.required],
    });
   
  }
  addRec() {
    if (this.recForm.invalid) {
      return;
    }
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    const formattedDate = currentDate.toLocaleString('en-US', options);
    const newRec = this.recForm.value;
    const rec = {
      email: localStorage.getItem('email'),
      message: newRec.message,
      etat:"Non Lu",
      date:formattedDate
    };
    
    console.log(rec);
    this.reclamationservice.addRecs(rec).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
      }
    );
  }
}
