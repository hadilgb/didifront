import { Component } from '@angular/core';
import { ReclamationService } from './reclamation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddrecComponent } from './addrec/addrec.component';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  RecForm: FormGroup;
  reclamation:any;
  constructor(private dialogup: MatDialog,private router: Router,private reclamationservice: ReclamationService, private formBuilder: FormBuilder) {
    this.RecForm = this.formBuilder.group({
      objet: ['', Validators.required],
      message: ['', Validators.required]
    });
   
  }
  ngOnInit(){
    this.getRecs();
  }
  rec : any;


  getRecs(): void {
    
    this.reclamationservice.getRec()
      .subscribe(
        recs => {
          this.rec = recs;
        });
  }
  openDialog(): void {
    const dialogRef = this.dialogup.open(AddrecComponent, {
      width: '500px'
    });
  }

  }

