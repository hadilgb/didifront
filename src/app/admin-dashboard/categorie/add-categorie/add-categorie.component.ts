import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../../home/home.service';
import { CategorieService } from 'src/app/admin-dashboard/categorie/categorie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {
  categoryForm: FormGroup;
  categories : any;
  categ : Array<Object>=[];
  constructor(private categorieService :CategorieService,private router: Router,private productService: ProductService, private formBuilder: FormBuilder,private homeservice : HomeService) {
    this.categoryForm = this.formBuilder.group({
      nom: ['', Validators.required],
      image: ['', Validators.required]
    });
   
  }
  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log(file);
      
      const image = URL.createObjectURL(file);
      this.categoryForm.patchValue({
        image: './assets/img/categories/'+file.name
      });
    }
  }
  addCategory() {
    if (this.categoryForm.invalid) {
      return;
    }
    const newCategory = this.categoryForm.value;
    console.log(newCategory);
    
    this.categorieService.addCategorie(newCategory).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
      }
    );
  }
}
