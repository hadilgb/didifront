import { Component, Inject, Input } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../../home/home.service';
import { CategorieService } from 'src/app/admin-dashboard/categorie/categorie.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent {
  @Input() selectedCatId :any ; 
  categoryForm: FormGroup;
  categories : any;
  categ : Array<Object>=[];
  selectedCategorie : any;
  idcat : any;
  constructor(@Inject(MAT_DIALOG_DATA)  data : any, private categorieService :CategorieService,private router: Router,private productService: ProductService, private formBuilder: FormBuilder,private homeservice : HomeService) {
    this.categoryForm = this.formBuilder.group({
      nom: [data.element, Validators.required]  ,
      categorieid: [data.el, Validators.required],
      image: [data.img, Validators.required]
    });

    this.idcat = data.el;
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
  getcategory(): void {
    this.homeservice.getItems('http://localhost:8094/Category/getcat')
      .subscribe(
        categories => {
          this.categories = categories;
        });
    this.categ = this.categories;
  }
  addSubCategory() {
      const updatedCategorie = {
        categorieid: this.idcat,
        nom: this.categoryForm.value.nom,
        image: this.categoryForm.value.image,
      };
    
      this.categorieService.updateCategorie(this.idcat,updatedCategorie).subscribe(
        () => {
          
          window.location.reload();
        },
        (error) => {
          console.log(error);
          
        }
      );
     
  }
 
  }



