import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../../home/home.service';
import { CategorieService } from 'src/app/admin-dashboard/categorie/categorie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-subcategorie',
  templateUrl: './add-subcategorie.component.html',
  styleUrls: ['./add-subcategorie.component.css']
})
export class AddSubcategorieComponent {
  categoryForm: FormGroup;
  categories : any;
  categ : Array<Object>=[];
  constructor(private categorieService :CategorieService,private router: Router,private productService: ProductService, private formBuilder: FormBuilder,private homeservice : HomeService) {
    this.categoryForm = this.formBuilder.group({
      nom: ['', Validators.required],
      categorieid: ['', Validators.required],
      image: ['', Validators.required]
    });
   
  }
  ngOnInit(): void {
    this.getcategory();
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
  getcategory(): void {
    this.homeservice.getItems('http://localhost:8094/Category/getcat')
      .subscribe(
        categories => {
          this.categories = categories;
        });
    this.categ = this.categories;
  }
  addSubCategory() {
    if (this.categoryForm.invalid) {
      return;
    }
    const newCategory = this.categoryForm.value;
    console.log(newCategory);
    this.categorieService.addSubCategorie(newCategory).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
      }
    );
  }
}
