import { Component, Inject, Input } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../../home/home.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent {
  @Input() selectedCatId :any ; 
  produitForm: FormGroup;
  categories : any;
  categ : Array<Object>=[];
  constructor(@Inject(MAT_DIALOG_DATA)  data : any,private router: Router,private productService: ProductService, private formBuilder: FormBuilder,private homeservice : HomeService) {
    this.produitForm = this.formBuilder.group({
      nom: [data.element, Validators.required],
      quantite: [data.qt, Validators.required],
      prixunite: [data.pr, Validators.required],
      categorieid: [data.el, Validators.required],
      imgUrl: [data.img, Validators.required]
    });
   
  }
  ngOnInit(): void {
    this.getcategory();
  }
  getcategory(): void {
    this.homeservice.getItems('http://localhost:8094/Subcategory/getcat')
      .subscribe(
        categories => {
          this.categories = categories;
        });
    this.categ = this.categories;
  
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      this.produitForm.patchValue({
        imgUrl: imageUrl
      });
    }
  }
  addProduct() {
    if (this.produitForm.invalid) {
      return;
    }
    const newProduct = this.produitForm.value;
    console.log(newProduct);
    this.productService.addProduct(newProduct).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
      }
    );
  }
}
